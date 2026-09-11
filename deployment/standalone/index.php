<?php
declare(strict_types=1);

define('ABSPATH', __DIR__ . '/');
define('CBP_ROOT', __DIR__ . '/');
define('CBP_CONTENT_PATH', CBP_ROOT . 'content/');
define('CBP_AGE_GATE_VERSION', '2026-09-10.2');
define('CBP_TERMS_VERSION', '2026-09-10.2');

function cbp_config(): array {
    static $cfg = null;
    if ($cfg !== null) return $cfg;
    $file = CBP_ROOT . 'config/local.php';
    if (!is_file($file)) return $cfg = [];
    $loaded = require $file;
    return $cfg = is_array($loaded) ? $loaded : [];
}
function cbp_cfg(string $key, string $default = ''): string {
    $value = cbp_config()[$key] ?? $default;
    return is_string($value) ? trim($value) : $default;
}
function cbp_missing_config(): array {
    $required = ['site_url','clerk_publishable_key','clerk_secret_key','clerk_jwt_key','clerk_issuer','clerk_authorized_party','clerk_frontend_api','app_secret'];
    return array_values(array_filter($required, static fn(string $k): bool => cbp_cfg($k) === '' || str_contains(cbp_cfg($k), 'REPLACE_ME') || str_contains(cbp_cfg($k), 'YOUR-PRODUCTION')));
}
function cbp_site_url(string $path = '/'): string {
    $base = rtrim(cbp_cfg('site_url', 'https://thecrewblueprint.com'), '/');
    return $base . '/' . ltrim($path, '/');
}
function cbp_escape(string $value): string { return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
function cbp_json(mixed $value): string { return json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR); }
function cbp_is_https(): bool { return (!empty($_SERVER['HTTPS']) && strtolower((string)$_SERVER['HTTPS']) !== 'off') || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https'); }
function cbp_normalize_path(string $path): string { $path = '/' . ltrim($path, '/'); return $path === '/' ? '/' : rtrim($path, '/') . '/'; }
function cbp_current_path(): string { $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH); return cbp_normalize_path(is_string($uri) ? $uri : '/'); }
function cbp_redirect(string $url, int $status = 302): never { header('Location: ' . $url, true, $status); exit; }
function cbp_no_cache(): void { header('Cache-Control: private, no-store, max-age=0'); header('Pragma: no-cache'); }
function cbp_asset_url(string $rel = ''): string { return cbp_site_url('/assets/' . ltrim($rel, '/')); }

function cbp_manifest(): array {
    static $manifest = null;
    if ($manifest !== null) return $manifest;
    $value = require CBP_ROOT . 'config/routes.php';
    return $manifest = is_array($value) ? $value : ['public'=>[], 'protected'=>[]];
}
function cbp_load_document(string $file): ?string {
    $path = CBP_CONTENT_PATH . ltrim($file, '/');
    if (!is_file($path)) return null;
    $value = require $path;
    return is_string($value) ? $value : null;
}
function cbp_runtime_config_script(bool $serverAuthenticated = false): string {
    $frontend = rtrim(cbp_cfg('clerk_frontend_api'), '/');
    $config = [
        'siteBase'=>cbp_site_url('/'), 'signInUrl'=>cbp_site_url('/'), 'signUpUrl'=>cbp_site_url('/create-account/'),
        'afterSignOutUrl'=>cbp_site_url('/'), 'assetBase'=>cbp_asset_url(), 'termsUrl'=>cbp_site_url('/terms-and-conditions/'),
        'limitationUrl'=>cbp_site_url('/limitation-of-liability/'), 'coursesUrl'=>cbp_site_url('/courses/'),
        'clerkPublishableKey'=>cbp_cfg('clerk_publishable_key'),
        'clerkUiUrl'=>$frontend ? $frontend . '/npm/@clerk/ui@1/dist/ui.browser.js' : '',
        'clerkJsUrl'=>$frontend ? $frontend . '/npm/@clerk/clerk-js@6/dist/clerk.browser.js' : '',
        'production'=>true, 'serverAuthenticated'=>$serverAuthenticated,
    ];
    return '<script>window.CBP_CONFIG=' . cbp_json($config) . ';</script>';
}
function cbp_render_document(string $file, bool $private = false, bool $serverAuthenticated = false): never {
    $html = cbp_load_document($file);
    if ($html === null) { http_response_code(404); cbp_no_cache(); echo 'Not found.'; exit; }
    $html = str_replace('__CB_ASSET_BASE__', cbp_escape(cbp_asset_url()), $html);
    $runtime = cbp_runtime_config_script($serverAuthenticated);
    if ($private) $runtime .= '<script>window.CBP_SERVER_AUTHORIZED=true;</script>';
    $html = str_replace('__CB_RUNTIME_CONFIG__', $runtime, $html);
    if ($private) { cbp_no_cache(); header('X-Robots-Tag: noindex, nofollow', true); }
    else header('Cache-Control: public, max-age=300');
    header('Content-Type: text/html; charset=UTF-8');
    echo $html; exit;
}

function cbp_b64url_decode(string $value): string|false { $value = strtr($value, '-_', '+/'); $pad = strlen($value)%4; if ($pad) $value .= str_repeat('=',4-$pad); return base64_decode($value,true); }
function cbp_b64url_encode(string $value): string { return rtrim(strtr(base64_encode($value), '+/', '-_'), '='); }
function cbp_session_token(): ?string {
    if (!empty($_COOKIE['__session']) && is_string($_COOKIE['__session'])) return $_COOKIE['__session'];
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (is_string($auth) && preg_match('/^Bearer\s+(.+)$/i', $auth, $m)) return trim($m[1]);
    return null;
}
function cbp_verify_clerk_session(?string $token = null): array|false {
    if (cbp_missing_config()) return false;
    $token = $token ?: cbp_session_token(); if (!$token) return false;
    $parts = explode('.', $token); if (count($parts)!==3) return false;
    [$encodedHeader,$encodedPayload,$encodedSignature] = $parts;
    $headerJson=cbp_b64url_decode($encodedHeader); $payloadJson=cbp_b64url_decode($encodedPayload); $signature=cbp_b64url_decode($encodedSignature);
    if ($headerJson===false || $payloadJson===false || $signature===false) return false;
    $header=json_decode($headerJson,true); $claims=json_decode($payloadJson,true);
    if (!is_array($header) || !is_array($claims) || ($header['alg']??'')!=='RS256') return false;
    $pem=str_replace('\\n',"\n",cbp_cfg('clerk_jwt_key'));
    if (openssl_verify($encodedHeader.'.'.$encodedPayload,$signature,$pem,OPENSSL_ALGO_SHA256)!==1) return false;
    $now=time(); $skew=60;
    if (!isset($claims['exp']) || (int)$claims['exp']<($now-$skew)) return false;
    if (isset($claims['nbf']) && (int)$claims['nbf']>($now+$skew)) return false;
    if (isset($claims['iat']) && (int)$claims['iat']>($now+$skew)) return false;
    if (($claims['iss']??'')!==cbp_cfg('clerk_issuer') || empty($claims['sub']) || !is_string($claims['sub'])) return false;
    $authorized=array_values(array_filter(array_map('trim',explode(',',cbp_cfg('clerk_authorized_party')))));
    if (!$authorized || empty($claims['azp']) || !in_array((string)$claims['azp'],$authorized,true)) return false;
    return $claims;
}
function cbp_http_json(string $method, string $url, ?array $body=null): array|false {
    $payload=$body===null?null:cbp_json($body);
    $headers=['Authorization: Bearer '.cbp_cfg('clerk_secret_key'),'Accept: application/json','Content-Type: application/json'];
    if (function_exists('curl_init')) {
        $ch=curl_init($url); curl_setopt_array($ch,[CURLOPT_RETURNTRANSFER=>true,CURLOPT_CUSTOMREQUEST=>$method,CURLOPT_HTTPHEADER=>$headers,CURLOPT_TIMEOUT=>10,CURLOPT_CONNECTTIMEOUT=>5]);
        if ($payload!==null) curl_setopt($ch,CURLOPT_POSTFIELDS,$payload);
        $raw=curl_exec($ch); $status=(int)curl_getinfo($ch,CURLINFO_RESPONSE_CODE); curl_close($ch);
    } else {
        $opts=['http'=>['method'=>$method,'header'=>implode("\r\n",$headers),'timeout'=>10,'ignore_errors'=>true]];
        if ($payload!==null) $opts['http']['content']=$payload;
        $raw=@file_get_contents($url,false,stream_context_create($opts)); $status=0;
        if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/',$http_response_header[0],$m)) $status=(int)$m[1];
    }
    if (!is_string($raw) || $status<200 || $status>=300) return false;
    $decoded=json_decode($raw,true); return is_array($decoded)?$decoded:false;
}
function cbp_clerk_request(string $method,string $endpoint,?array $body=null): array|false { return cbp_cfg('clerk_secret_key')===''?false:cbp_http_json($method,'https://api.clerk.com/v1/'.ltrim($endpoint,'/'),$body); }
function cbp_user_private_metadata(string $userId): array { $user=cbp_clerk_request('GET','users/'.rawurlencode($userId)); return is_array($user['private_metadata']??null)?$user['private_metadata']:[]; }

function cbp_handoff_cookie_name(): string { return 'cbp_adult_handoff'; }
function cbp_sign_handoff(array $payload): string { $body=cbp_b64url_encode(cbp_json($payload)); return $body.'.'.hash_hmac('sha256',$body,cbp_cfg('app_secret')); }
function cbp_verify_handoff(?string $token=null): array|false {
    $token=$token?:($_COOKIE[cbp_handoff_cookie_name()]??''); if (!is_string($token)||!str_contains($token,'.')) return false;
    [$body,$sig]=explode('.',$token,2); $expected=hash_hmac('sha256',$body,cbp_cfg('app_secret')); if (!hash_equals($expected,$sig)) return false;
    $decoded=cbp_b64url_decode($body); $payload=$decoded!==false?json_decode($decoded,true):null;
    if (!is_array($payload)||($payload['exp']??0)<time()||($payload['eligible']??false)!==true) return false; return $payload;
}
function cbp_set_handoff_cookie(array $payload): void { $token=cbp_sign_handoff($payload); setcookie(cbp_handoff_cookie_name(),$token,['expires'=>time()+600,'path'=>'/','secure'=>cbp_is_https(),'httponly'=>true,'samesite'=>'Lax']); $_COOKIE[cbp_handoff_cookie_name()]=$token; }
function cbp_clear_handoff_cookie(): void { setcookie(cbp_handoff_cookie_name(),'', ['expires'=>time()-3600,'path'=>'/','secure'=>cbp_is_https(),'httponly'=>true,'samesite'=>'Lax']); unset($_COOKIE[cbp_handoff_cookie_name()]); }
function cbp_mark_adult_eligible(string $userId): bool { return cbp_clerk_request('PATCH','users/'.rawurlencode($userId).'/metadata',['private_metadata'=>['adultEligibility'=>true,'ageGateVersion'=>CBP_AGE_GATE_VERSION,'eligibilityConfirmedAt'=>gmdate('c')]])!==false; }
function cbp_authenticated_adult(bool $allowFinalize=true): array|false {
    $claims=cbp_verify_clerk_session(); if (!$claims) return false; $userId=(string)$claims['sub']; $meta=cbp_user_private_metadata($userId);
    if (($meta['adultEligibility']??false)===true) return $claims;
    if ($allowFinalize && cbp_verify_handoff() && cbp_mark_adult_eligible($userId)) { cbp_clear_handoff_cookie(); return $claims; }
    return false;
}
function cbp_age_from_dob(string $dob): ?int { $date=DateTimeImmutable::createFromFormat('!Y-m-d',$dob); if (!$date||$date->format('Y-m-d')!==$dob) return null; $today=new DateTimeImmutable('today',new DateTimeZone('UTC')); if ($date>$today) return null; return $date->diff($today)->y; }
function cbp_csrf_token(): string { $nonce=bin2hex(random_bytes(16)); $ts=(string)time(); $body=$ts.'.'.$nonce; return cbp_b64url_encode($body).'.'.hash_hmac('sha256',$body,cbp_cfg('app_secret')); }
function cbp_verify_csrf(string $token): bool {
    if (!str_contains($token,'.')) return false; [$encoded,$sig]=explode('.',$token,2); $body=cbp_b64url_decode($encoded);
    if ($body===false||!str_contains($body,'.')) return false; [$ts]=explode('.',$body,2);
    if (!ctype_digit($ts)||abs(time()-(int)$ts)>1800) return false; return hash_equals(hash_hmac('sha256',$body,cbp_cfg('app_secret')),$sig);
}
function cbp_safe_return_url(?string $value,string $fallback='/start-here/'): string { $fallbackUrl=cbp_site_url($fallback); if (!$value) return $fallbackUrl; $decoded=rawurldecode($value); return str_starts_with($decoded,rtrim(cbp_cfg('site_url'),'/').'/')?$decoded:$fallbackUrl; }
function cbp_handle_age_check(): never {
    if ($_SERVER['REQUEST_METHOD']!=='POST'||!cbp_verify_csrf((string)($_POST['csrf']??''))) cbp_redirect(cbp_site_url('/create-account/?cbp_error=invalid'));
    $return=cbp_safe_return_url((string)($_POST['return_url']??'')); $dob=trim((string)($_POST['dob']??'')); $accepted=!empty($_POST['legal_acceptance']); $age=cbp_age_from_dob($dob);
    if (!$accepted||$age===null) cbp_redirect(cbp_site_url('/create-account/?cbp_error=invalid'));
    if ($age<18) { setcookie('cbp_age_screen_ineligible','1',['expires'=>0,'path'=>'/','secure'=>cbp_is_https(),'httponly'=>true,'samesite'=>'Lax']); cbp_redirect(cbp_site_url('/create-account/?cbp_error=ineligible')); }
    cbp_set_handoff_cookie(['eligible'=>true,'exp'=>time()+600,'nonce'=>bin2hex(random_bytes(16)),'age_gate_version'=>CBP_AGE_GATE_VERSION,'terms_version'=>CBP_TERMS_VERSION]);
    cbp_redirect(cbp_site_url('/create-account/?phase=signup&return_url='.rawurlencode($return)));
}
function cbp_render_create_account(): never {
    cbp_no_cache(); header('X-Robots-Tag: noindex, nofollow',true);
    $error=preg_replace('/[^a-z0-9_-]/','',strtolower((string)($_GET['cbp_error']??''))); $phase=preg_replace('/[^a-z0-9_-]/','',strtolower((string)($_GET['phase']??''))); $return=cbp_safe_return_url((string)($_GET['return_url']??''));
    $asset=cbp_escape(cbp_asset_url()); $home=cbp_escape(cbp_site_url('/')); $terms=cbp_escape(cbp_site_url('/terms-and-conditions/')); $privacy=cbp_escape(cbp_site_url('/privacy-policy/'));
    if ($phase==='signup'&&cbp_verify_handoff()) {
        $frontend=rtrim(cbp_cfg('clerk_frontend_api'),'/'); $publishable=cbp_cfg('clerk_publishable_key'); $finalize=cbp_site_url('/account-finalize/?return_url='.rawurlencode($return));
        echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Create Account | The Crew Blueprint</title><link rel="stylesheet" href="'.$asset.'css/blueprint-v4.css"></head><body><main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Continue to secure account creation.</h1><p>Your age eligibility check passed. Your date of birth was not retained in the account handoff.</p></div></section><section class="section"><div class="shell"><div id="cbp-clerk-signup" class="card" style="padding:24px"><p>Loading secure account creation…</p></div></div></section></main>';
        echo '<script src="'.cbp_escape($frontend.'/npm/@clerk/ui@1/dist/ui.browser.js').'" crossorigin="anonymous"></script><script data-clerk-publishable-key="'.cbp_escape($publishable).'" src="'.cbp_escape($frontend.'/npm/@clerk/clerk-js@6/dist/clerk.browser.js').'" crossorigin="anonymous"></script>';
        echo '<script>(async()=>{if(!window.Clerk)return;await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signUpUrl:'.cbp_json(cbp_site_url('/create-account/')).',signInUrl:'.cbp_json(cbp_site_url('/')).',signUpFallbackRedirectUrl:'.cbp_json($finalize).'});window.Clerk.openSignUp({signInUrl:'.cbp_json(cbp_site_url('/')).',fallbackRedirectUrl:'.cbp_json($finalize).'});})();</script></body></html>'; exit;
    }
    $message=''; if ($error==='ineligible'||!empty($_COOKIE['cbp_age_screen_ineligible'])) $message='This account is not eligible for registration.'; elseif ($error==='invalid') $message='Enter a valid date of birth and accept the Terms and Privacy Policy.';
    echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Create Account | The Crew Blueprint</title><link rel="stylesheet" href="'.$asset.'css/blueprint-v4.css"></head><body><header class="topbar"><div class="shell topbar-inner"><a class="brand" href="'.$home.'">The Crew <span>Blueprint</span></a></div></header><main><section class="page-hero"><div class="shell"><span class="eyebrow">Free learner account</span><h1>Create your account.</h1><p>Public sample pages do not require an account. A date of birth is required only when creating a new learner account.</p></div></section><section class="section"><div class="shell" style="max-width:720px"><article class="card" style="padding:28px">';
    if ($message) echo '<p role="alert" class="boundary">'.cbp_escape($message).'</p>';
    if (empty($_COOKIE['cbp_age_screen_ineligible'])) {
        echo '<form method="post" action="'.cbp_escape(cbp_site_url('/age-check/')).'"><input type="hidden" name="return_url" value="'.cbp_escape($return).'"><input type="hidden" name="csrf" value="'.cbp_escape(cbp_csrf_token()).'"><p><label for="cbp-dob"><strong>Date of birth</strong></label><br><input id="cbp-dob" name="dob" type="date" autocomplete="bday" required style="width:100%;min-height:48px"></p><p><label><input type="checkbox" name="legal_acceptance" value="1" required> I agree to the <a href="'.$terms.'" target="_blank" rel="noopener">Terms and Conditions</a> and acknowledge the <a href="'.$privacy.'" target="_blank" rel="noopener">Privacy Policy</a>.</label></p><button class="btn primary" type="submit">Continue to account creation</button></form>';
    }
    echo '</article></div></section></main></body></html>'; exit;
}
function cbp_finalize_account(): never {
    cbp_no_cache(); header('X-Robots-Tag: noindex, nofollow',true); $claims=cbp_verify_clerk_session();
    if (!$claims||!cbp_verify_handoff()) cbp_redirect(cbp_site_url('/create-account/?cbp_error=invalid'));
    if (!cbp_mark_adult_eligible((string)$claims['sub'])) { http_response_code(503); echo 'Account eligibility could not be finalized. Please try again.'; exit; }
    cbp_clear_handoff_cookie(); cbp_redirect(cbp_safe_return_url((string)($_GET['return_url']??'')));
}
function cbp_public_route_for_path(string $path): ?array { foreach (cbp_manifest()['public']??[] as $route) if (cbp_normalize_path((string)($route['path']??''))===$path) return $route; return null; }
function cbp_protected_route_for_slug(string $slug): ?array { foreach (cbp_manifest()['protected']??[] as $route) if (($route['slug']??'')===$slug) return $route; return null; }

$path=cbp_current_path();
if ($path==='/age-check/') cbp_handle_age_check();
if ($path==='/create-account/') { if (cbp_missing_config()) { http_response_code(503); cbp_no_cache(); echo 'Account service is not configured yet.'; exit; } cbp_render_create_account(); }
if ($path==='/account-finalize/') { if (cbp_missing_config()) { http_response_code(503); cbp_no_cache(); echo 'Account service is not configured yet.'; exit; } cbp_finalize_account(); }
if (preg_match('#^/learn/([^/]+)/$#',$path,$m)) {
    $slug=rawurldecode($m[1]); $route=cbp_protected_route_for_slug($slug);
    if (!$route) { http_response_code(404); cbp_no_cache(); echo 'Not found.'; exit; }
    if (!cbp_authenticated_adult()) { $return=cbp_site_url('/learn/'.rawurlencode($slug).'/'); cbp_redirect(cbp_site_url('/courses/?signin=1&return_url='.rawurlencode($return))); }
    cbp_render_document('protected/'.$route['file'],true,true);
}
$route=cbp_public_route_for_path($path);
if ($route) {
    $memberFile=$route['member_file']??null;
    if ($memberFile && !cbp_missing_config() && cbp_authenticated_adult(false)) cbp_render_document('public/'.$memberFile,false,true);
    cbp_render_document('public/'.$route['file'],false);
}
http_response_code(404); cbp_no_cache(); header('Content-Type: text/plain; charset=UTF-8'); echo "Not found.\n";
