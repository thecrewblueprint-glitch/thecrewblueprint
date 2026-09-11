# The Crew Blueprint — WordPress Production Package

This directory is source material for the generated WordPress ZIP. Do not upload the repository itself to WordPress.

## Production Clerk setup

Before activating the final production package, create/configure the Clerk Production instance and add these constants to `wp-config.php` above the "stop editing" line:

```php
define('CBP_CLERK_PUBLISHABLE_KEY', 'pk_live_...');
define('CBP_CLERK_SECRET_KEY', 'sk_live_...');
define('CBP_CLERK_JWT_KEY', "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----");
define('CBP_CLERK_ISSUER', 'https://YOUR-PRODUCTION-FRONTEND-API');
define('CBP_CLERK_AUTHORIZED_PARTY', 'https://thecrewblueprint.com');
define('CBP_CLERK_FRONTEND_API', 'https://YOUR-PRODUCTION-FRONTEND-API');
```

The secret key and JWT public key must never be added to public JavaScript, page content, the Git repository, or a browser-visible configuration object.

## Account model

- Public sample browsing requires no account and no birthday.
- Existing-account Sign In does not ask for birthday.
- New account creation uses the WordPress server-side age screen first.
- The submitted DOB is used only to determine whether the person is 18+ and is not copied into Clerk account metadata.
- An eligible result creates a short-lived signed handoff cookie.
- After Clerk account creation, WordPress verifies the Clerk session and writes only `adultEligibility=true`, the age-gate version, and verification timestamp to Clerk private metadata.
- Full free learner routes require a valid Clerk session and server-authoritative adult eligibility.
- Protected learner responses use `Cache-Control: private, no-store` and `X-Robots-Tag: noindex, nofollow`.

## Clerk OAuth

Production social providers must be configured in the Clerk Production instance. Development/shared OAuth credentials are not the production configuration. Keep Sign In and Create Account separate: Sign In must not silently turn into Sign Up.

## WordPress behavior

The generated plugin:
- owns the Crew Blueprint public routes;
- keeps WordPress native public registration disabled;
- disables comments/pings for this release;
- serves only the free-tier production package;
- does not include paid/advanced lesson bodies or Production Atlas learner access;
- does not put full protected course bodies into directly retrievable static HTML files.

## Release sequence

1. Build and validate the exact package.
2. Upload/activate it in the WordPress staging/production filesystem.
3. Configure Clerk Production keys/domain/DNS.
4. Flush WordPress permalinks once after activation if required.
5. Test public browsing, age screen, Sign In, Create Account, OAuth callback, account finalization, protected course access, logout, and direct protected-route denial.
6. Inventory production cookies/network requests and reconcile them against Privacy/Cookies.
7. Complete the manual accessibility QA checkpoint.
8. Owner reviews learner-facing course content.
9. Release only after all gates are accepted.
