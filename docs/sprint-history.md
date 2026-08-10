# Sprint History

## Sprint 01 — Professional Foundation Rebuild

### Date

2026-08-10

### Status

Completed

### Goal

Replace the vulnerable legacy application with a secure, maintainable, and professionally documented foundation for the official Spaccini Barbecue website while preserving the Git repository, project identity, and official logo.

### Completed

- Updated the runtime and package tooling to Node.js 24.19.0 and npm 11.17.0
- Rebuilt the application on Next.js 16.3.0, React 19, strict TypeScript, and Tailwind CSS 4
- Added a static, responsive, and accessible branded foundation page for Perugia and Umbria
- Preserved `public/spaccini-barbecue-logo.svg` byte-for-byte as the official logo
- Added semantic landmarks, keyboard focus treatment, a skip link, responsive layout, and WCAG AA-conscious contrast
- Configured the canonical `https://www.spaccinibarbecue.com` host across metadata, Open Graph, robots, and sitemap output
- Removed obsolete application assets, generated favicon content, and legacy Tailwind configuration
- Added Vitest, Testing Library, explicit test cleanup, and 7 behavior-focused foundation and SEO tests
- Added a GitHub Actions quality workflow for pull requests, pushes to `main`, and manual execution
- Added weekly Dependabot updates for npm and GitHub Actions with compatible minor and patch grouping
- Added project setup, architecture, deployment, environment, ownership, and repository-agent documentation
- Documented GitHub–Vercel deployment, the intended primary domain, and the future Aruba DNS checklist without applying external changes

### Decisions

- Keep the official SVG logo unchanged and create no variants, favicons, or derived assets without approval.
- Use Server Components and static rendering by default until verified commercial requirements justify additional architecture.
- Keep `https://www.spaccinibarbecue.com` as the canonical host; the apex redirect remains future deployment work.
- Use npm exclusively, keep the lockfile deterministic, and do not use forced audit fixes or dependency overrides.
- Leave the pending `unrs-resolver` postinstall warning unresolved and do not modify `allowScripts` without approval.
- Keep deployment outside GitHub Actions and make no real changes to Vercel, Aruba, or DNS during the foundation sprint.

### Verification

- `npm ci` passed from the lockfile
- `npm run format:check` passed
- `npm run lint` passed
- `npm run typecheck` passed
- `npm test` passed with 7 tests across 2 test files
- `npm run build` passed with static output for the page, robots, and sitemap routes
- `npm audit --omit=dev` reported zero production vulnerabilities
- `npm audit` reported zero vulnerabilities across production and development dependencies
- Desktop and mobile visual verification passed manually
- The official logo hash remained identical to the repository version
- The final diff check, documentation links, documented commands, and secret scan passed

### Residual Warning

- `unrs-resolver@1.12.2` has a pending postinstall script; `allowScripts` was not modified and the script was neither approved nor denied.

### Takeaway

Spaccini Barbecue now has a tested, accessible, statically rendered, and deployment-ready foundation with reproducible tooling, zero known dependency vulnerabilities, automated quality checks, and concise technical documentation. It remains a foundation rather than the final commercial website.

### Next Sprint

Planned, not completed:

- Conduct commercial research and prepare the commercial brief
- Define positioning and conversion strategy
- Define the final information architecture
- Inventory available photography, video, reviews, and supporting evidence
- Define the design system
- Develop the commercial website and booking journey

---

## Sprint 02 — Commercial Research and Strategy

### Date

2026-08-10

### Status

Completed

### Goal

Define the evidence-led commercial strategy that will govern future content, UX, design, SEO, photography, image generation, and development without implementing commercial pages or integrations.

### Completed

- Defined the commercial objectives for qualified event and pickup enquiries
- Structured the current event and pickup service models without inventing prices, capacities, dates, or availability
- Prioritized private, wedding, corporate, venue, festival, association, hospitality, and pickup audiences
- Connected system characteristics to practical customer benefits, emotional value, and required proof
- Defined the brand-story arc around Roberto Spaccini while separating owner accounts from independently documented facts
- Verified the independent 2013 Piacere Barbecue reference and classified official historical channels as proprietary evidence requiring archival review
- Reviewed official scientific summaries and peer-reviewed studies on general HCA and PAH formation pathways
- Established strict limits preventing patent, health, provenance, superiority, and product-specific scientific claims without evidence
- Defined the future conversion path, CTA hierarchy, low-friction enquiry fields, objection handling, and privacy considerations
- Proposed a future information architecture and local SEO strategy centered on useful, non-duplicated content
- Defined a real-first photography and video plan and restricted generated imagery from factual proof
- Created a source register, documented chronology, verification backlog, evidence checklist, and future measurement framework
- Proposed the entry criteria, deliverables, exclusions, and definition of done for the first commercial development sprint

### Decisions

- Treat `docs/commercial-brief.md` as the binding strategic baseline for future commercial work.
- Use BBQYOU and official social channels as internal proprietary archives, not independent proof or public-site dependencies.
- Use the 2013 InformaCibo article as independent evidence only for the specific event and presentation it documents.
- Explain the external collection of cooking liquids as a mechanical characteristic; do not infer a product-specific health benefit.
- Keep “patented,” blanket Umbrian provenance, client, capacity, review, pricing, and availability claims blocked until verified.
- Prioritize authentic, rights-cleared photography; generated imagery must not represent real food, people, equipment, or events.
- Add no commercial page, form, API, analytics, CMS, database, or external service during this strategy sprint.

### Verification

- Reviewed the supplied historical, official, independent, scientific, and platform-guidance sources and recorded their limits.
- Cross-checked the commercial brief against the required 25 strategic sections.
- Marked inaccessible social-post content and proprietary technical details for manual capture rather than inferring them.
- Kept all current application, logo, CI, dependency, deployment, Vercel, Aruba, DNS, and domain state unchanged.

### Takeaway

The project now has a truthful commercial decision framework rather than unverified marketing copy. Future implementation can proceed only when the relevant operational facts, rights, contact details, and evidence gates are satisfied.

### Next Sprint

Planned, not completed:

- Resolve publication blockers with Roberto and collect the first rights-cleared evidence pack
- Confirm the final sitemap, claims matrix, and production content model
- Draft and approve commercial page copy and low-fidelity conversion flows
- Begin the commercial development sprint only after its documented entry criteria are met

---
