<?php
/**
 * Plugin Name: The Crew Blueprint
 * Description: Production delivery layer for The Crew Blueprint free learner release.
 * Version: 0.1.0-rc
 * Requires PHP: 8.1
 */

defined('ABSPATH') || exit;

define('CBP_PLUGIN_VERSION', '0.1.0-rc');
define('CBP_PLUGIN_FILE', __FILE__);
define('CBP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CBP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('CBP_AGE_GATE_VERSION', '2026-09-10.2');
define('CBP_TERMS_VERSION', '2026-09-10.2');

function cbp_manifest(): array {
    static $manifest = null;
    if ($manifest !== null) return $manifest;
    $file = CBP_PLUGIN_DIR . 'config/routes.php';
    $manifest = is_file($file) ? require $file : ['public' => [], 'protected' => []];
    return is_array($manifest) ? $manifest : ['public' => [], 'protected' => []];
}

function cbp_required_config(): array {
    return [
        'CBP_CLERK_PUBLISHABLE_KEY',
        'CBP_CLERK_SECRET_KEY',
        'CBP_CLERK_JWT_KEY',
        'CBP_CLERK_ISSUER',
        'CBP_CLERK_AUTHORIZED_PARTY',
        'CBP_CLERK_FRONTEND_API',
    ];
}

function cbp_missing_config(): array {
    return array_values(array_filter(cbp_required_config(), static fn($name) => !defined($name) || !constant($name)));
}

add_action('admin_notices', function (): void {
    if (!current_user_can('manage_options')) return;
    $missing = cbp_missing_config();
    if (!$missing) return;
    echo '<div class="notice notice-error"><p><strong>The Crew Blueprint:</strong> production authentication is fail-closed until these wp-config.php constants are set: ' .
        esc_html(implode(', ', $missing)) . '.</p></div>';
});

add_filter('pre_option_users_can_register', static fn() => '0');
add_filter('comments_open', static fn() => false, 100);
add_filter('pings_open', static fn() => false, 100);

function cbp_normalize_path(string $path): string {
    $path = '/' . ltrim($path, '/');
    if ($path !== '/') $path = rtrim($path, '/') . '/';
    return $path;
}

function cbp_current_path(): string {
    $uri = wp_parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    return cbp_normalize_path(is_string($uri) ? $uri : '/');
}

function cbp_asset_url(string $rel = ''): string {
    return CBP_PLUGIN_URL . 'assets/' . ltrim($rel, '/');
}

function cbp_runtime_config_script(): string {
    $frontend = defined('CBP_CLERK_FRONTEND_API') ? rtrim((string)CBP_CLERK_FRONTEND_API, '/') : '';
    $publishable = defined('CBP_CLERK_PUBLISHABLE_KEY') ? (string)CBP_CLERK_PUBLISHABLE_KEY : '';
    $config = [
        'siteBase' => home_url('/'),
        'signInUrl' => home_url('/'),
        'signUpUrl' => home_url('/create-account/'),
        'afterSignOutUrl' => home_url('/'),
        'clerkPublishableKey' => $publishable,
        'clerkUiUrl' => $frontend ? $frontend . '/npm/@clerk/ui@1/dist/ui.browser.js' : '',
        'clerkJsUrl' => $frontend ? $frontend . '/npm/@clerk/clerk-js@6/dist/clerk.browser.js' : '',
        'production' => true,
    ];
    return '<script>window.CBP_CONFIG=' . wp_json_encode($config, JSON_UNESCAPED_SLASHES) . ';</script>';
}

function cbp_load_document(string $file): ?string {
    $path = CBP_PLUGIN_DIR . 'content/' . ltrim($file, '/');
    if (!is_file($path)) return null;
    $value = require $path;
    return is_string($value) ? $value : null;
}

function cbp_render_document(string $file, bool $private = false): never {
    $html = cbp_load_document($file);
    if ($html === null) {
        status_header(404);
        nocache_headers();
        echo 'Not found.';
        exit;
    }

    $html = str_replace('__CB_ASSET_BASE__', esc_url(cbp_asset_url()), $html);
    $html = str_replace('__CB_RUNTIME_CONFIG__', cbp_runtime_config_script(), $html);

    if ($private) {
        header('Cache-Control: private, no-store, max-age=0');
        header('Pragma: no-cache');
        header('X-Robots-Tag: noindex, nofollow', true);
    } else {
        header('Cache-Control: public, max-age=300');
    }
    header('Content-Type: text/html; charset=' . get_option('blog_charset'));
    echo $html;
    exit;
}

function cbp_b64url_decode(string $value): string|false {
    $value = strtr($value, '-_', '+/');
    $pad = strlen($value) % 4;
    if ($pad) $value .= str_repeat('=', 4 - $pad);
    return base64_decode($value, true);
}

function cbp_session_token(): ?string {
    if (!empty($_COOKIE['__session']) && is_string($_COOKIE['__session'])) {
        return $_COOKIE['__session'];
    }
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (is_string($auth) && preg_match('/^Bearer\s+(.+)$/i', $auth, $m)) return trim($m[1]);
    return null;
}

function cbp_authorized_parties(): array {
    $raw = defined('CBP_CLERK_AUTHORIZED_PARTY') ? (string)CBP_CLERK_AUTHORIZED_PARTY : '';
    return array_values(array_filter(array_map('trim', explode(',', $raw))));
}

function cbp_verify_clerk_session(?string $token = null): array|false {
    if (cbp_missing_config()) return false;
    $token = $token ?: cbp_session_token();
    if (!$token) return false;

    $parts = explode('.', $token);
    if (count($parts) !== 3) return false;
    [$encodedHeader, $encodedPayload, $encodedSignature] = $parts;

    $headerJson = cbp_b64url_decode($encodedHeader);
    $payloadJson = cbp_b64url_decode($encodedPayload);
    $signature = cbp_b64url_decode($encodedSignature);
    if ($headerJson === false || $payloadJson === false || $signature === false) return false;

    $header = json_decode($headerJson, true);
    $claims = json_decode($payloadJson, true);
    if (!is_array($header) || !is_array($claims)) return false;
    if (($header['alg'] ?? '') !== 'RS256') return false;

    $pem = str_replace('\\n', "\n", (string)CBP_CLERK_JWT_KEY);
    $verified = openssl_verify($encodedHeader . '.' . $encodedPayload, $signature, $pem, OPENSSL_ALGO_SHA256);
    if ($verified !== 1) return false;

    $now = time();
    $skew = 60;
    if (!isset($claims['exp']) || (int)$claims['exp'] < ($now - $skew)) return false;
    if (isset($claims['nbf']) && (int)$claims['nbf'] > ($now + $skew)) return false;
    if (isset($claims['iat']) && (int)$claims['iat'] > ($now + $skew)) return false;
    if (($claims['iss'] ?? '') !== (string)CBP_CLERK_ISSUER) return false;
    if (empty($claims['sub']) || !is_string($claims['sub'])) return false;

    $authorized = cbp_authorized_parties();
    if (!$authorized) return false;
    if (empty($claims['azp']) || !in_array((string)$claims['azp'], $authorized, true)) return false;

    return $claims;
}

function cbp_clerk_request(string $method, string $endpoint, ?array $body = null): array|WP_Error {
    if (!defined('CBP_CLERK_SECRET_KEY') || !CBP_CLERK_SECRET_KEY) {
        return new WP_Error('cbp_missing_secret', 'Clerk secret key is not configured.');
    }
    $args = [
        'method' => $method,
        'timeout' => 10,
        'headers' => [
            'Authorization' => 'Bearer ' . CBP_CLERK_SECRET_KEY,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ],
    ];
    if ($body !== null) $args['body'] = wp_json_encode($body);
    $response = wp_remote_request('https://api.clerk.com/v1/' . ltrim($endpoint, '/'), $args);
    if (is_wp_error($response)) return $response;
    $status = wp_remote_retrieve_response_code($response);
    $decoded = json_decode(wp_remote_retrieve_body($response), true);
    if ($status < 200 || $status >= 300 || !is_array($decoded)) {
        return new WP_Error('cbp_clerk_api', 'Clerk Backend API request failed.', ['status' => $status]);
    }
    return $decoded;
}

function cbp_user_private_metadata(string $userId, bool $refresh = false): array {
    $key = 'cbp_clerk_meta_' . md5($userId);
    if (!$refresh) {
        $cached = get_transient($key);
        if (is_array($cached)) return $cached;
    }
    $user = cbp_clerk_request('GET', 'users/' . rawurlencode($userId));
    if (is_wp_error($user)) return [];
    $meta = isset($user['private_metadata']) && is_array($user['private_metadata']) ? $user['private_metadata'] : [];
    set_transient($key, $meta, 300);
    return $meta;
}

function cbp_handoff_cookie_name(): string {
    return 'cbp_adult_handoff';
}

function cbp_sign_handoff(array $payload): string {
    $body = rtrim(strtr(base64_encode(wp_json_encode($payload)), '+/', '-_'), '=');
    $sig = hash_hmac('sha256', $body, wp_salt('auth'));
    return $body . '.' . $sig;
}

function cbp_verify_handoff(?string $token = null): array|false {
    $token = $token ?: ($_COOKIE[cbp_handoff_cookie_name()] ?? '');
    if (!is_string($token) || !str_contains($token, '.')) return false;
    [$body, $sig] = explode('.', $token, 2);
    $expected = hash_hmac('sha256', $body, wp_salt('auth'));
    if (!hash_equals($expected, $sig)) return false;
    $decoded = cbp_b64url_decode($body);
    $payload = $decoded !== false ? json_decode($decoded, true) : null;
    if (!is_array($payload) || ($payload['exp'] ?? 0) < time()) return false;
    if (($payload['eligible'] ?? false) !== true) return false;
    return $payload;
}

function cbp_set_handoff_cookie(array $payload): void {
    $token = cbp_sign_handoff($payload);
    setcookie(cbp_handoff_cookie_name(), $token, [
        'expires' => time() + 600,
        'path' => '/',
        'secure' => is_ssl(),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    $_COOKIE[cbp_handoff_cookie_name()] = $token;
}

function cbp_clear_handoff_cookie(): void {
    setcookie(cbp_handoff_cookie_name(), '', [
        'expires' => time() - 3600,
        'path' => '/',
        'secure' => is_ssl(),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    unset($_COOKIE[cbp_handoff_cookie_name()]);
}

function cbp_mark_adult_eligible(string $userId): bool {
    $result = cbp_clerk_request('PATCH', 'users/' . rawurlencode($userId) . '/metadata', [
        'private_metadata' => [
            'adultEligibility' => true,
            'ageGateVersion' => CBP_AGE_GATE_VERSION,
            'eligibilityConfirmedAt' => gmdate('c'),
        ],
    ]);
    if (is_wp_error($result)) return false;
    delete_transient('cbp_clerk_meta_' . md5($userId));
    return true;
}

function cbp_authenticated_adult(bool $allowFinalize = true): array|false {
    $claims = cbp_verify_clerk_session();
    if (!$claims) return false;
    $userId = (string)$claims['sub'];
    $meta = cbp_user_private_metadata($userId);
    if (($meta['adultEligibility'] ?? false) === true) return $claims;

    if ($allowFinalize && cbp_verify_handoff()) {
        if (cbp_mark_adult_eligible($userId)) {
            cbp_clear_handoff_cookie();
            return $claims;
        }
    }
    return false;
}

function cbp_age_from_dob(string $dob): ?int {
    $date = DateTimeImmutable::createFromFormat('!Y-m-d', $dob);
    if (!$date || $date->format('Y-m-d') !== $dob) return null;
    $today = new DateTimeImmutable('today', new DateTimeZone('UTC'));
    if ($date > $today) return null;
    return $date->diff($today)->y;
}

add_action('admin_post_nopriv_cbp_age_check', 'cbp_handle_age_check');
add_action('admin_post_cbp_age_check', 'cbp_handle_age_check');
function cbp_handle_age_check(): never {
    check_admin_referer('cbp_age_check');
    $return = isset($_POST['return_url']) ? esc_url_raw(wp_unslash($_POST['return_url'])) : home_url('/start-here/');
    if (!str_starts_with($return, home_url('/'))) $return = home_url('/start-here/');

    $dob = isset($_POST['dob']) ? sanitize_text_field(wp_unslash($_POST['dob'])) : '';
    $accepted = !empty($_POST['legal_acceptance']);
    $age = cbp_age_from_dob($dob);

    if (!$accepted || $age === null) {
        wp_safe_redirect(add_query_arg(['cbp_error' => 'invalid'], home_url('/create-account/')));
        exit;
    }
    if ($age < 18) {
        setcookie('cbp_age_screen_ineligible', '1', [
            'expires' => 0,
            'path' => '/',
            'secure' => is_ssl(),
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        wp_safe_redirect(add_query_arg(['cbp_error' => 'ineligible'], home_url('/create-account/')));
        exit;
    }

    cbp_set_handoff_cookie([
        'eligible' => true,
        'exp' => time() + 600,
        'nonce' => wp_generate_uuid4(),
        'age_gate_version' => CBP_AGE_GATE_VERSION,
        'terms_version' => CBP_TERMS_VERSION,
    ]);

    wp_safe_redirect(add_query_arg([
        'phase' => 'signup',
        'return_url' => rawurlencode($return),
    ], home_url('/create-account/')));
    exit;
}

function cbp_render_create_account(): never {
    nocache_headers();
    header('X-Robots-Tag: noindex, nofollow', true);
    $error = isset($_GET['cbp_error']) ? sanitize_key($_GET['cbp_error']) : '';
    $phase = isset($_GET['phase']) ? sanitize_key($_GET['phase']) : '';
    $return = isset($_GET['return_url']) ? esc_url_raw(rawurldecode((string)$_GET['return_url'])) : home_url('/start-here/');
    if (!str_starts_with($return, home_url('/'))) $return = home_url('/start-here/');

    $asset = esc_url(cbp_asset_url());
    $home = esc_url(home_url('/'));
    $terms = esc_url(home_url('/terms-and-conditions/'));
    $privacy = esc_url(home_url('/privacy-policy/'));

    if ($phase === 'signup' && cbp_verify_handoff()) {
        $frontend = defined('CBP_CLERK_FRONTEND_API') ? rtrim((string)CBP_CLERK_FRONTEND_API, '/') : '';
        $publishable = defined('CBP_CLERK_PUBLISHABLE_KEY') ? (string)CBP_CLERK_PUBLISHABLE_KEY : '';
        $finalize = add_query_arg('return_url', rawurlencode($return), home_url('/account-finalize/'));
        echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Create Account | The Crew Blueprint</title><link rel="stylesheet" href="' . $asset . 'css/blueprint-v4.css"></head><body>';
        echo '<main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Continue to secure account creation.</h1><p>Your age eligibility check passed. Your date of birth was not retained in the account handoff.</p></div></section><section class="section"><div class="shell"><div id="cbp-clerk-signup" class="card" style="padding:24px"><p>Loading secure account creation…</p></div></div></section></main>';
        echo '<script src="' . esc_url($frontend . '/npm/@clerk/ui@1/dist/ui.browser.js') . '" crossorigin="anonymous"></script>';
        echo '<script data-clerk-publishable-key="' . esc_attr($publishable) . '" src="' . esc_url($frontend . '/npm/@clerk/clerk-js@6/dist/clerk.browser.js') . '" crossorigin="anonymous"></script>';
        echo '<script>(async()=>{if(!window.Clerk)return;await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signUpUrl:' . wp_json_encode(home_url('/create-account/')) . ',signInUrl:' . wp_json_encode(home_url('/')) . ',signUpFallbackRedirectUrl:' . wp_json_encode($finalize) . '});window.Clerk.openSignUp({signInUrl:' . wp_json_encode(home_url('/')) . ',fallbackRedirectUrl:' . wp_json_encode($finalize) . '});})();</script>';
        echo '</body></html>';
        exit;
    }

    $message = '';
    if ($error === 'ineligible' || !empty($_COOKIE['cbp_age_screen_ineligible'])) {
        $message = 'This account is not eligible for registration.';
    } elseif ($error === 'invalid') {
        $message = 'Enter a valid date of birth and accept the Terms and Privacy Policy.';
    }

    echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Create Account | The Crew Blueprint</title><link rel="stylesheet" href="' . $asset . 'css/blueprint-v4.css"></head><body>';
    echo '<header class="topbar"><div class="shell topbar-inner"><a class="brand" href="' . $home . '">The Crew <span>Blueprint</span></a></div></header>';
    echo '<main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Create your account.</h1><p>Public sample pages do not require an account. A date of birth is required only when creating a new learner account.</p></div></section><section class="section"><div class="shell" style="max-width:720px"><article class="card" style="padding:28px">';
    if ($message) echo '<p role="alert" class="boundary">' . esc_html($message) . '</p>';
    if (empty($_COOKIE['cbp_age_screen_ineligible'])) {
        echo '<form method="post" action="' . esc_url(admin_url('admin-post.php')) . '"><input type="hidden" name="action" value="cbp_age_check"><input type="hidden" name="return_url" value="' . esc_attr($return) . '">';
        wp_nonce_field('cbp_age_check');
        echo '<p><label for="cbp-dob"><strong>Date of birth</strong></label><br><input id="cbp-dob" name="dob" type="date" autocomplete="bday" required style="width:100%;min-height:48px"></p>';
        echo '<p><label><input type="checkbox" name="legal_acceptance" value="1" required> I agree to the <a href="' . $terms . '" target="_blank" rel="noopener">Terms and Conditions</a> and acknowledge the <a href="' . $privacy . '" target="_blank" rel="noopener">Privacy Policy</a>.</label></p>';
        echo '<button class="btn primary" type="submit">Continue to account creation</button></form>';
    }
    echo '</article></div></section></main></body></html>';
    exit;
}

function cbp_finalize_account(): never {
    nocache_headers();
    header('X-Robots-Tag: noindex, nofollow', true);
    $claims = cbp_verify_clerk_session();
    if (!$claims || !cbp_verify_handoff()) {
        wp_safe_redirect(home_url('/create-account/?cbp_error=invalid'));
        exit;
    }
    $userId = (string)$claims['sub'];
    if (!cbp_mark_adult_eligible($userId)) {
        status_header(503);
        echo 'Account eligibility could not be finalized. Please try again.';
        exit;
    }
    cbp_clear_handoff_cookie();
    $return = isset($_GET['return_url']) ? esc_url_raw(rawurldecode((string)$_GET['return_url'])) : home_url('/start-here/');
    if (!str_starts_with($return, home_url('/'))) $return = home_url('/start-here/');
    wp_safe_redirect($return);
    exit;
}

function cbp_public_route_for_path(string $path): ?array {
    foreach (cbp_manifest()['public'] ?? [] as $route) {
        if (cbp_normalize_path((string)($route['path'] ?? '')) === $path) return $route;
    }
    return null;
}

function cbp_protected_route_for_slug(string $slug): ?array {
    foreach (cbp_manifest()['protected'] ?? [] as $route) {
        if (($route['slug'] ?? '') === $slug) return $route;
    }
    return null;
}

add_action('init', function (): void {
    add_rewrite_tag('%cbp_course%', '([^&]+)');
    add_rewrite_rule('^learn/([^/]+)/?$', 'index.php?cbp_course=$matches[1]', 'top');
    add_rewrite_rule('^account-finalize/?$', 'index.php?cbp_finalize=1', 'top');
    add_rewrite_tag('%cbp_finalize%', '([01])');
});

register_activation_hook(__FILE__, function (): void {
    flush_rewrite_rules();
});
register_deactivation_hook(__FILE__, function (): void {
    flush_rewrite_rules();
});

add_action('template_redirect', function (): void {
    $path = cbp_current_path();

    if ($path === '/create-account/') cbp_render_create_account();
    if ($path === '/account-finalize/' || get_query_var('cbp_finalize')) cbp_finalize_account();

    $courseSlug = get_query_var('cbp_course');
    if (!$courseSlug && preg_match('#^/learn/([^/]+)/$#', $path, $m)) $courseSlug = $m[1];
    if ($courseSlug) {
        $route = cbp_protected_route_for_slug(sanitize_title((string)$courseSlug));
        if (!$route) return;
        if (!cbp_authenticated_adult()) {
            $return = home_url('/learn/' . rawurlencode((string)$courseSlug) . '/');
            wp_safe_redirect(add_query_arg(['signin' => '1', 'return_url' => rawurlencode($return)], home_url('/courses/')));
            exit;
        }
        cbp_render_document('protected/' . $route['file'], true);
    }

    $route = cbp_public_route_for_path($path);
    if (!$route) return;

    $memberFile = $route['member_file'] ?? null;
    if ($memberFile && cbp_authenticated_adult(false)) {
        cbp_render_document('public/' . $memberFile, false);
    }
    cbp_render_document('public/' . $route['file'], false);
}, 0);

add_filter('wp_sitemaps_posts_query_args', function (array $args, string $postType): array {
    if ($postType !== 'page') return $args;
    return $args;
}, 10, 2);
