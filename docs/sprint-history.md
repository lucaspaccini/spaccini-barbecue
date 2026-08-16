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

## Sprint 03 — Commercial Homepage

### Date

2026-08-10

### Status

Completed

### Goal

Replace the foundation placeholder with the first professional commercial homepage for Spaccini Barbecue, using the approved commercial brief to explain the event experience, cooking method, preparations, service models, and enquiry path without publishing unverified operational claims.

### Completed

- Rebuilt the homepage as a mobile-first, statically rendered composition of Server Components
- Added a compact header with the official logo, desktop anchor navigation, a keyboard-accessible native mobile menu, and an internal event CTA
- Added a commercial hero, problem-and-solution section, live-service sequence, preparation overview, technical method explanation, two service models, brand story, event types, FAQ, final CTA, and essential footer
- Centralized repeated navigation, preparation, method, event, and FAQ content in a typed content module
- Directed all event CTAs to the final enquiry section and used the verified Instagram profile as the only temporary external contact destination
- Updated homepage metadata while preserving the canonical `https://www.spaccinibarbecue.com` host
- Replaced the foundation-page tests with behavior-focused commercial homepage coverage and retained SEO coverage
- Built the visual language from the official mark with warm coal and brown surfaces, ivory typography, controlled fire accents, paper-like light sections, editorial numbering, and CSS-only technical and heat graphics
- Added Roberto Spaccini’s lightly edited first-person manifesto as the central element of the founder story and repeated “Per me il cibo è un’emozione” once in the hero
- Reframed the service paths as “Prenotazione e ritiro” followed by “Barbecue e catering per eventi,” explicitly distinguishing the live barbecue, stand, and preparation from traditional catering
- Centralized the verified Instagram destination in the typed content module and kept it as the only public contact, with internal event CTAs continuing to lead to the final homepage section
- Kept the official SVG logo byte-for-byte unchanged and added no photographs, generated imagery, font downloads, client-side JavaScript, forms, APIs, analytics, or external services

### Decisions

- Keep `docs/commercial-brief.md` as the binding source for commercial copy, evidence limits, and prohibited claims.
- Use native `details` and `summary` elements for the mobile navigation so the menu remains keyboard-operable without a Client Component.
- Use system serif and sans-serif stacks to create an editorial, gastronomic character without external font requests.
- Preserve Roberto’s direct first-person voice in the founder manifesto instead of rewriting it as generic promotional copy.
- Do not publish Roberto’s personal telephone number; a dedicated commercial number and WhatsApp Business remain future decisions, with telephone contact as a later alternative.
- Present the cooking system as a concrete technical difference without patent, health, provenance, or absolute-superiority claims.
- Keep prices, address, capacity, minimum attendance, lead time, availability, and a permanent contact channel unpublished until verified.

### Verification

- `npm run format:check` passed
- `npm run lint` passed
- `npm run typecheck` passed
- `npm test` passed with 14 tests across 2 test files
- `npm run build` passed with static output for the homepage, robots, and sitemap routes
- `npm audit --omit=dev` reported zero production vulnerabilities
- `git diff --check` passed
- Runtime checks confirmed the Italian document language, canonical metadata, robots, sitemap, section identifiers, and valid internal anchor destinations
- Firefox headless checks covered mobile, tablet, and desktop layouts; the mobile navigation opened from the keyboard and exposed 46–48 px touch targets
- Browser measurements found no horizontal overflow at the tested responsive breakpoints and confirmed visible landmarks, headings, focus treatment, and reduced-motion behavior
- Keyboard navigation made the skip link visible with a 3 px focus outline before moving to the main content
- Measured foreground and background combinations exceeded WCAG AA, with the lowest primary contrast pair at 5.83:1
- Viewport and full-page screenshots were reviewed for hierarchy, spacing, readability, section rhythm, responsive composition, and header behavior
- Follow-up browser checks confirmed the manifesto, signature, service order, single footer landmark, reduced-motion preference, and absence of horizontal overflow on mobile, tablet, and desktop
- The official logo SHA-256 and Git blob remained identical to the committed file

### Remaining Evidence Gates

- Authentic, rights-cleared photography and video have not yet been supplied or integrated.
- Prices, availability, service limits, collection details, permanent contact information, and other operational conditions still require confirmation before publication.
- No real Vercel, Aruba, DNS, analytics, form, booking, or third-party service change was made.

### Residual Warning

- `unrs-resolver@1.12.2` still has a pending postinstall script; `allowScripts` remains unchanged and the script was neither approved nor denied.
- A repeated final build attempt in the managed sandbox was blocked when Turbopack/PostCSS tried to bind a local port; the same application build had already passed earlier in the sprint and was served successfully for runtime and browser verification.

### Takeaway

Spaccini Barbecue now has a complete, tested commercial homepage that communicates the live event experience and technical identity with a distinctive responsive design while preserving the project’s evidence boundaries and zero-service foundation.

---

## Sprint 04 — Motion-Led Redesign and Design-Intelligence Tooling

### Date

2026-08-16

### Status

Completed

### Goal

Elevate the Sprint 03 commercial homepage against its own documented weaknesses (textual density, weak preparation grid without photography, flat mobile headings, monotone rhythm, an abstract hero that doesn't yet evoke Roberto, fire, or the live event) using Framer Motion for measured, accessible motion and the UI/UX Pro Max skill for design intelligence, without discarding the approved copy, claims boundaries, or the untouched logo.

### Completed

- Installed `ui-ux-pro-max-cli@2.15.0` project-locally (`npm install ui-ux-pro-max-cli@2.15.0 --no-save`, not added to `package.json`) after verifying the registry version and dist-tag, then ran `uipro init --ai codex` from the project root, which added only `.agents/skills/` (Codex-format skill and reference data; no other files touched)
- Read the generated `.agents/skills/ui-ux-pro-max/SKILL.md` in full and queried its local search engine (`--design-system`, and `--domain landing/gsap/ux`) for premium Umbrian barbecue, founder-led food brand, storytelling landing structure, scroll-reveal/stagger timing, and reduced-motion guidance; declined the tool's literal style/font recommendation (a "Liquid Glass" system with Google Fonts) because it conflicts with the brief's no-external-fonts rule and the established carbone/avorio/ember identity, and used its motion-timing and rhythm principles instead
- Installed `framer-motion@13.1.0` as a production dependency after verifying its registry version, dist-tag, and React 18/19 peer range
- Added two small Client Component motion islands (`src/components/motion/reveal.tsx`, `src/components/motion/ember-glow.tsx`) instead of converting `page.tsx` to a Client Component; every other component stays a Server Component
- Wired a consistent scroll-reveal (fade + 16px lift, ~0.5s, shared easing, staggered on lists) across the hero, section headings, experience steps, preparation cards, method points, service cards, the story timeline, and the events list; left the sticky story heading, the FAQ accordion, and the entire contact section unanimated by deliberate choice (sticky-position risk and “never delay the CTA”)
- Added a slow, low-amplitude breathing glow to the hero's existing CSS ember graphic (explicitly authorized as a "light variation of the abstract fire graphic"), gated by `useReducedMotion` and rendering nothing when reduced motion is preferred
- Added a `<noscript>` stylesheet in the root layout that forces `[data-reveal]` elements to full opacity/no transform when JavaScript is unavailable, after confirming Framer Motion otherwise ships the animated `opacity:0` initial state in the server-rendered HTML
- Added a short, atmospheric sensory-word strip (Fuoco · Legno · Tempo · Brace · Convivialità · Cura — all vocabulary already authorized by the brief) between the hero and the problem section, and a mid-page "moment divider" between the cooking and method sections to break up rhythm without adding new factual claims
- Gave each preparation card a distinct CSS-only texture (diagonal hatch, radial glow, or grain, cycling per card) so the cooking grid reads with more visual variety in the continued absence of real photography
- Tightened mobile heading sizes (hero `h1`, section `h2`s, service-card `h3`, the contact heading) at the ≤36rem breakpoint, and gave the sensory strip its own compact mobile layout
- Ignored `.agents/**` in ESLint and Prettier (third-party skill assets, not application source)
- Added an `IntersectionObserver` and `matchMedia` test polyfill to `src/test/setup.ts`, and added `src/test/motion.test.tsx`, `src/test/motion-reduced.test.tsx`, and two new homepage tests covering the sensory strip/moment divider and the `data-reveal` island wiring; extended, not replaced, the existing 14 behavior-focused tests

### Decisions

- Keep `page.tsx`, `layout.tsx`, and both site header/footer components as Server Components; motion lives only inside `Reveal` and `EmberGlow`.
- Use `motion.div/li/article` directly rather than `LazyMotion`/`domAnimation`: evaluated it, but for a single page with two small motion components the added wrap-everywhere risk (a `m.*` component renders nothing useful if a `LazyMotion` provider is missing) outweighed the bundle savings.
- Do not repeat “Per me il cibo è un’emozione” outside the hero and the founder manifesto; the new atmospheric copy (sensory strip, moment divider) uses different, non-factual, brief-authorized wording instead.
- Treat the UI/UX Pro Max skill as design intelligence, not a source of commercial fact or an authority over the brief's font/claims/logo constraints; its literal style/font suggestion for this query was reviewed and declined for that reason.
- Leave `.agents/skills/` untracked in this handoff rather than deciding unilaterally whether to commit a large third-party asset tree; the commit proposal below treats it as optional.

### Verification

- `npm ci` passed from the updated lockfile (Node 24.x is pinned in `.nvmrc`/`package.json engines`, but this sandbox only provides Node v22.22.1 and npm 9.2.0; `npm` printed `EBADENGINE` warnings for the root package and `jsdom` on every install and is noted here rather than worked around)
- `npm run format:check`, `npm run lint`, and `npm run typecheck` passed
- `npm test` passed with 19 tests across 4 files (the 14 Sprint 03 tests unchanged plus 5 new ones), both before and after a clean `npm ci`
- `npm run build` passed (Turbopack, static output for the homepage, robots, and sitemap routes), both before and after a clean `npm ci`
- `npm audit --omit=dev` and a full `npm audit` both reported zero vulnerabilities
- `git diff --check` passed; searches for the personal phone number, `tel:`, `wa.me`, and `bbqyou.it` in the application source found none (the only `tel:`/`wa.me` match is the negative test assertion)
- The official logo hash was re-verified after all changes: `sha256:f31ae9eaf23055742b01e9ceffecc7aebda304cddd8f67d8bd6944660bda1b6f`, identical to the pre-existing committed file
- Confirmed via the server-rendered HTML (not just jsdom) that: there is exactly one `<h1>`, the canonical stays `https://www.spaccinibarbecue.com`, the `<noscript>` override is present and targets the same 39 `data-reveal` elements that Framer Motion pre-hides with an inline `opacity:0` in the SSR output, and no `bbqyou.it`/`tel:`/`wa.me` string reaches the page
- Inspected the production chunks directly: the motion-related client chunk is ~136KB raw / ~43KB gzipped and is code-split from the main React/Next.js runtime chunk, consistent with the “small, confined motion islands” requirement; no true pre-Framer-Motion bundle baseline exists to diff against since this is the dependency's first install
- **Not possible in this sandbox:** actual browser screenshots. `firefox --headless --screenshot` (the tool used for Sprint 03's browser verification) ran without error but produced no output file at any of the tested paths (project scratchpad or `/tmp`); Playwright is not installed and has no cached browser binaries. Visual verification for this sprint is therefore limited to the static, server-rendered HTML/CSS inspected above (single `h1`, landmarks, canonical, `data-reveal`/`noscript` wiring, per-breakpoint CSS rules present in the built stylesheet) plus the existing automated accessibility-shaped tests — not an actual rendered viewport at 320/375/768/1024/1440px, keyboard traversal, or a reduced-motion visual pass. This gap should be closed with a real browser check before shipping.

### Remaining Evidence Gates

- Authentic, rights-cleared photography and video still have not been supplied or integrated; the preparation grid and hero remain CSS-only by design.
- Prices, availability, service limits, collection details, a permanent (non-Instagram) contact channel, and other operational conditions still require confirmation before publication.
- No real Vercel, Aruba, DNS, analytics, form, booking, or third-party service change was made.
- Actual cross-browser/device visual verification (see above) is still outstanding; only static HTML/CSS and automated tests were checked this sprint.

### Residual Warning

- `unrs-resolver@1.12.2` still has a pending postinstall script; `allowScripts` remains unchanged and the script was neither approved nor denied.
- The sandbox's Node.js is v22.22.1 against the pinned `24.x`; every `npm install`/`npm ci` in this sprint printed `EBADENGINE` warnings. All checks still passed, but this should be re-verified on the pinned runtime before release.
- `.agents/skills/` (the UI/UX Pro Max install) is currently untracked; it was deliberately left for the user to decide whether to commit (persist the skill for future assistant sessions in this repo) or gitignore it (treat it as a local tool, not a repo asset).

### Takeaway

The homepage keeps its Sprint 03 identity, copy, and evidence boundaries but now has a deliberate, accessible motion layer, a design-intelligence-informed rhythm break (sensory strip, moment divider, textured preparation cards), and tighter mobile headings — addressing the density, monotony, and “doesn't yet feel like fire and Roberto” critique without photography or new claims. The remaining gap before shipping is a real browser/device visual pass, which this sandbox could not perform.

---
