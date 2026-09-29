<?php
/**
 * Copy this file to config/local.php on the production server and fill in the values.
 * NEVER commit config/local.php or expose its contents publicly.
 */
return [
    'site_url' => 'https://thecrewblueprint.com',
    'clerk_publishable_key' => 'pk_live_REPLACE_ME',
    'clerk_secret_key' => 'sk_live_REPLACE_ME',
    'clerk_jwt_key' => "-----BEGIN PUBLIC KEY-----\nREPLACE_ME\n-----END PUBLIC KEY-----",
    'clerk_issuer' => 'https://YOUR-PRODUCTION-FRONTEND-API',
    'clerk_authorized_party' => 'https://thecrewblueprint.com',
    'clerk_frontend_api' => 'https://YOUR-PRODUCTION-FRONTEND-API',
    // Generate with: php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"
    'app_secret' => 'REPLACE_WITH_64_HEX_CHAR_RANDOM_SECRET',
];
