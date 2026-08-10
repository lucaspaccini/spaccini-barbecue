# Repository guidelines

- Use npm as the only package manager and Node.js from `.nvmrc`. Do not change the package manager or runtime without approval.
- Use the Next.js App Router and Server Components by default. Add Client Components only when browser-side interactivity requires them.
- Keep TypeScript strict and prefer small, typed, reusable modules.
- Preserve `public/spaccini-barbecue-logo.svg` byte-for-byte. Do not create logo variants, favicons, or derived assets without approval.
- Meet WCAG AA, use semantic HTML, maintain visible keyboard focus, and support responsive layouts.
- Keep SEO URLs aligned with the canonical `https://www.spaccinibarbecue.com` host.
- Test observable behavior rather than fragile implementation details or snapshots.
- Before handoff, run `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm audit --omit=dev`.
- Never run `npm audit fix` or `npm audit fix --force`. Do not modify `allowScripts` without approval.
- Never commit credentials, private data, or real `.env` files.
- Do not add external services, analytics, tracking, a CMS, a database, APIs, or forms without approval.
- Do not make health, environmental, patent, or provenance claims without verifiable evidence.
- Do not change Vercel, Aruba, or DNS settings without authorization.
- At the end of each significant sprint, update `docs/sprint-history.md` with completed work, verification, and decisions without presenting future features as complete.
- This is a proprietary project. Do not add an open-source license.
