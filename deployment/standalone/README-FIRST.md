# The Crew Blueprint — Standalone IONOS/PHP Production Package

This package is the standalone runtime adaptation of the WordPress release candidate. It preserves the generated frontend, public/protected route map, Clerk session verification, 18+ account-creation handoff, and server-only learner content while removing WordPress as a runtime dependency.

## Server requirements

- Apache-compatible webspace with `.htaccess` / `mod_rewrite`
- PHP 8.1+
- OpenSSL PHP extension
- cURL recommended (PHP stream fallback is included)
- HTTPS on the production domain

## Configure before account testing

1. Copy `config/local.example.php` to `config/local.php` on the production server.
2. Fill in the production Clerk values directly on the server. **Never commit `config/local.php`.**
3. Generate a random application secret on the server with `php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"` and place it in `app_secret`.
4. Confirm `https://thecrewblueprint.com` is the `site_url` and Clerk authorized party.
5. Confirm the Clerk Production Frontend API and issuer values match the production instance.

## Deployment

Upload the *contents* of the generated `the-crew-blueprint` directory into the document root that serves `thecrewblueprint.com`. Keep the previous live files as a rollback backup until validation passes.

Do not upload a production Clerk secret to GitHub, public JavaScript, HTML, or browser-visible config.

## Validation sequence

1. `/` loads with intended CSS/images.
2. `/courses/`, `/start-here/`, `/field-skills/`, and `/context-labs/` work signed out.
3. `/create-account/` presents the server-side age screen.
4. Google / LinkedIn / email sign-in opens through Clerk.
5. A signed-out request to `/learn/<known-course>/` redirects instead of returning the protected body.
6. A valid eligible Clerk account can open a protected course.
7. Protected responses are `private, no-store` and `noindex, nofollow`.
8. Logout removes access on the next protected request.
9. Direct requests to `/config/`, `/content/`, and `/runtime/` are denied by Apache.
10. Complete browser/network/privacy/cookie and accessibility QA before release approval.

## Deliberate boundaries

- Free-tier package only.
- No paid lesson bodies.
- No Production Atlas learner access.
- DOB is evaluated server-side and is not stored in learner metadata.
- Protected lesson bodies remain PHP-return payloads and are not directly retrievable static HTML.
