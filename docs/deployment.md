# Deployment

## Deployment model

Deployments use the GitHub–Vercel integration. GitHub Actions performs quality checks only and has no deployment job.

- `main` is the production branch.
- Pull requests are the source of preview deployments.
- Node.js 24.x is declared in `package.json`; `.nvmrc` pins the exact local version.
- Vercel must install dependencies with `npm ci` and build with `npm run build`.
- No environment variables are currently required.

The canonical URL and intended primary domain are:

```text
https://www.spaccinibarbecue.com
```

The apex domain will eventually redirect permanently to the canonical `www` host:

```text
https://spaccinibarbecue.com → https://www.spaccinibarbecue.com
```

This document does not apply that redirect or change any Vercel, Aruba, or DNS setting.

## Initial Aruba and Vercel checklist

1. Renew the domain with Aruba.
2. Connect the GitHub repository to a Vercel project.
3. Add both the `www` and apex domains in Vercel.
4. Set `www.spaccinibarbecue.com` as the primary domain.
5. Copy into Aruba only the DNS records displayed by Vercel at that time.
6. Do not invent or preserve potentially variable DNS record values in this repository.
7. Verify DNS propagation and the HTTPS certificate.
8. Verify the apex-to-`www` redirect returns HTTP 301.
9. Verify the canonical metadata, `robots.txt`, and `sitemap.xml` in production.

## Release checklist

1. Open a pull request and wait for the `CI` workflow to pass.
2. Review the Vercel preview for content, responsive layout, keyboard navigation, and visible focus.
3. Confirm that no private values or unapproved integrations are included.
4. Merge the reviewed pull request into `main`.
5. Confirm that Vercel completes the production build with `npm ci` and `npm run build`.
6. Check the canonical URL over HTTPS on common viewport sizes.
7. Check `/robots.txt` and `/sitemap.xml` on the canonical host.
8. Review Vercel build logs for unexpected warnings or failures.

## Rollback

If a production release is faulty, use Vercel to promote a previously verified deployment while the issue is corrected through the normal pull-request workflow. A rollback does not authorize changes to DNS, Aruba, or other external systems.
