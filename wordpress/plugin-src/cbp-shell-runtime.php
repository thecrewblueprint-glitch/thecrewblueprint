<?php
/**
 * Crew Blueprint WordPress global shell runtime.
 *
 * Additive presentation/runtime hardening only. This file does not replace
 * Clerk verification, adult-eligibility logic, course authorization, or
 * learner content delivery in the primary plugin entrypoint.
 */

defined('ABSPATH') || exit;

function cbp_global_shell_header(): string {
    $home = esc_url(home_url('/'));
    $logo = esc_url(cbp_asset_url('images/crew-blueprint-logo.svg'));
    $links = [
        'Home' => home_url('/'),
        'Start Here' => home_url('/start-here/'),
        'Courses' => home_url('/courses/'),
        'Field Skills' => home_url('/field-skills/'),
        'Context Labs' => home_url('/context-labs/'),
    ];
    $nav = '';
    foreach ($links as $label => $url) {
        $nav .= '<a href="' . esc_url($url) . '">' . esc_html($label) . '</a>';
    }
    return '<header class="topbar cbp-global-header" data-cbp-global-shell="header">'
        . '<div class="shell topbar-inner cbp-global-header-inner">'
        . '<a class="brand cbp-global-brand" href="' . $home . '" aria-label="The Crew Blueprint home">'
        . '<img class="cbp-global-logo" src="' . $logo . '" alt="The Crew Blueprint"></a>'
        . '<button class="nav-toggle" aria-expanded="false" aria-controls="cbp-global-nav">Menu</button>'
        . '<nav class="nav cbp-global-nav" id="cbp-global-nav" aria-label="Primary">' . $nav
        . '<div id="clerk-auth-slot" class="clerk-auth-slot"></div></nav></div></header>';
}

function cbp_global_shell_footer(): string {
    $logo = esc_url(cbp_asset_url('images/crew-blueprint-logo.svg'));
    return '<footer class="footer cbp-global-footer" data-cbp-global-shell="footer"><div class="shell footer-layout cbp-global-footer-layout">'
        . '<div class="footer-primary"><a class="brand footer-brand cbp-global-brand" href="' . esc_url(home_url('/')) . '" aria-label="The Crew Blueprint home">'
        . '<img class="cbp-global-logo cbp-global-logo-footer" src="' . $logo . '" alt="The Crew Blueprint"></a>'
        . '<nav class="footer-nav" aria-label="Footer navigation"><a href="' . esc_url(home_url('/')) . '">Home</a><a href="' . esc_url(home_url('/courses/')) . '">Courses</a><a href="' . esc_url(home_url('/contact/')) . '">Contact</a></nav></div>'
        . '<div class="footer-boundary"><strong>Learning boundary:</strong> online course completion does not create employer authorization, certification, licensing, union status, or permission to perform controlled or safety-critical work. Employer/site rules, qualified-person requirements, applicable regulation, manufacturer instructions, and task-specific authorization remain controlling.</div>'
        . '<div class="footer-legal"><nav aria-label="Legal"><a href="' . esc_url(home_url('/privacy-policy/')) . '">Privacy</a><a href="' . esc_url(home_url('/terms-and-conditions/')) . '">Terms</a><a href="' . esc_url(home_url('/accessibility-statement/')) . '">Accessibility</a><a href="' . esc_url(home_url('/cookies-notice/')) . '">Cookies</a><a href="' . esc_url(home_url('/limitation-of-liability/')) . '">Liability</a><a href="' . esc_url(home_url('/affiliate-disclosure/')) . '">Affiliate Disclosure</a></nav><div>© 2026 The Crew Blueprint</div></div>'
        . '</div></footer>';
}

function cbp_global_shell_head(string $title): string {
    $asset = esc_url(cbp_asset_url());
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<meta name="robots" content="noindex,nofollow"><title>' . esc_html($title) . '</title>'
        . '<link rel="stylesheet" href="' . $asset . 'css/blueprint-v4.css">'
        . '<link rel="stylesheet" href="' . $asset . 'css/wordpress-global-shell.css">'
        . cbp_runtime_config_script(false)
        . '</head><body>' . cbp_global_shell_header();
}

function cbp_global_shell_close(bool $includeShellRuntime = true): string {
    $runtime = $includeShellRuntime
        ? '<script src="' . esc_url(cbp_asset_url('js/wordpress-global-shell.js')) . '"></script>'
        : '';
    return cbp_global_shell_footer() . $runtime . '</body></html>';
}

/**
 * Dynamic Create Account shell. Age-check and Clerk handoff semantics intentionally
 * mirror the primary production plugin; this function changes presentation only.
 */
function cbp_render_create_account_with_global_shell(): never {
    nocache_headers();
    header('X-Robots-Tag: noindex, nofollow', true);
    header('Cache-Control: private, no-store, max-age=0');

    $error = isset($_GET['cbp_error']) ? sanitize_key($_GET['cbp_error']) : '';
    $phase = isset($_GET['phase']) ? sanitize_key($_GET['phase']) : '';
    $return = isset($_GET['return_url']) ? esc_url_raw(rawurldecode((string) $_GET['return_url'])) : home_url('/start-here/');
    if (!str_starts_with($return, home_url('/'))) $return = home_url('/start-here/');

    $terms = esc_url(home_url('/terms-and-conditions/'));
    $privacy = esc_url(home_url('/privacy-policy/'));

    echo cbp_global_shell_head('Create Account | The Crew Blueprint');

    if ($phase === 'signup' && cbp_verify_handoff()) {
        $frontend = defined('CBP_CLERK_FRONTEND_API') ? rtrim((string) CBP_CLERK_FRONTEND_API, '/') : '';
        $publishable = defined('CBP_CLERK_PUBLISHABLE_KEY') ? (string) CBP_CLERK_PUBLISHABLE_KEY : '';
        $finalize = add_query_arg('return_url', rawurlencode($return), home_url('/account-finalize/'));

        echo '<main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Continue to secure account creation.</h1><p>Your age eligibility check passed. Your date of birth was not retained in the account handoff.</p></div></section>';
        echo '<section class="section"><div class="shell"><div id="cbp-clerk-signup" class="card" style="padding:24px"><p>Loading secure account creation…</p></div></div></section></main>';

        if (!$frontend || !$publishable) {
            echo '<div class="shell"><p role="alert" class="boundary">Account creation is temporarily unavailable because production authentication is not fully configured.</p></div>';
            echo cbp_global_shell_close();
            exit;
        }

        echo '<script src="' . esc_url($frontend . '/npm/@clerk/ui@1/dist/ui.browser.js') . '" crossorigin="anonymous"></script>';
        echo '<script data-clerk-publishable-key="' . esc_attr($publishable) . '" src="' . esc_url($frontend . '/npm/@clerk/clerk-js@6/dist/clerk.browser.js') . '" crossorigin="anonymous"></script>';
        echo '<script>(async()=>{if(!window.Clerk)return;await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signUpUrl:' . wp_json_encode(home_url('/create-account/')) . ',signInUrl:' . wp_json_encode(home_url('/')) . ',signUpFallbackRedirectUrl:' . wp_json_encode($finalize) . '});window.Clerk.openSignUp({signInUrl:' . wp_json_encode(home_url('/')) . ',fallbackRedirectUrl:' . wp_json_encode($finalize) . '});})();</script>';
        echo cbp_global_shell_close(false);
        exit;
    }

    $message = '';
    if ($error === 'ineligible' || !empty($_COOKIE['cbp_age_screen_ineligible'])) {
        $message = 'This account is not eligible for registration.';
    } elseif ($error === 'invalid') {
        $message = 'Enter a valid date of birth and accept the Terms and Privacy Policy.';
    }

    echo '<main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Create your account.</h1><p>Public sample pages do not require an account. A date of birth is required only when creating a new learner account.</p></div></section>';
    echo '<section class="section"><div class="shell" style="max-width:720px"><article class="card" style="padding:28px">';
    if ($message) echo '<p role="alert" class="boundary">' . esc_html($message) . '</p>';

    if (empty($_COOKIE['cbp_age_screen_ineligible'])) {
        echo '<form method="post" action="' . esc_url(admin_url('admin-post.php')) . '"><input type="hidden" name="action" value="cbp_age_check"><input type="hidden" name="return_url" value="' . esc_attr($return) . '">';
        wp_nonce_field('cbp_age_check');
        echo '<p><label for="cbp-dob"><strong>Date of birth</strong></label><br><input id="cbp-dob" name="dob" type="date" autocomplete="bday" required style="width:100%;min-height:48px"></p>';
        echo '<p><label><input type="checkbox" name="legal_acceptance" value="1" required> I agree to the <a href="' . $terms . '" target="_blank" rel="noopener">Terms and Conditions</a> and acknowledge the <a href="' . $privacy . '" target="_blank" rel="noopener">Privacy Policy</a>.</label></p>';
        echo '<button class="btn primary" type="submit">Continue to account creation</button></form>';
    }
    echo '</article></div></section></main>';
    echo cbp_global_shell_close();
    exit;
}

// Intercept only the dynamic account-creation route before the legacy renderer.
add_action('template_redirect', function (): void {
    if (cbp_current_path() === '/create-account/') cbp_render_create_account_with_global_shell();
}, -100);

// Surface a release-blocking configuration problem where the owner can see it.
add_action('admin_notices', function (): void {
    if (!current_user_can('manage_options')) return;
    $structure = (string) get_option('permalink_structure', '');
    if ($structure !== '') return;
    echo '<div class="notice notice-error"><p><strong>The Crew Blueprint:</strong> WordPress permalinks are set to <strong>Plain</strong>. Pretty permalinks are required for canonical routes such as <code>/learn/{slug}/</code>. Change Settings → Permalinks before production release.</p></div>';
});
