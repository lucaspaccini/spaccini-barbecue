# Foundation architecture

## Purpose and boundaries

This foundation establishes a secure, maintainable baseline for the official Spaccini Barbecue website. Its current scope is a single branded information page for Perugia and Umbria, plus the metadata and quality controls required for a public repository. The future commercial architecture will be defined after the strategic brief.

The foundation does not currently provide menus, pricing, bookings, contact forms, APIs, a database, a CMS, analytics, tracking, or other external services. These are possible future decisions, not existing capabilities.

## Rendering model

The current routes are statically rendered at build time. This keeps the initial site simple, fast, cacheable, and independent of runtime data services.

The project uses the Next.js App Router under `src/app`:

- `layout.tsx` defines the Italian document language and shared site metadata.
- `page.tsx` renders the semantic branded foundation page.
- `globals.css` provides the CSS-first Tailwind import and the small global presentation layer.
- `robots.ts` exposes crawl directives and the canonical sitemap location.
- `sitemap.ts` exposes the single canonical website URL.

Server Components are the default. A component should become a Client Component only when it needs browser APIs, local interactive state, or client-side event handling.

## Separation of concerns

UI structure and presentation belong in components and styles. Editorial content should remain distinct from component behavior and, as the site grows, move into typed, centralized content models. Future integrations should be isolated behind clear boundaries rather than coupled directly to presentation components.

No integration layer is required at this stage because there are no APIs, databases, CMS providers, forms, analytics platforms, or other external services.

## Principles for future work

- Build small, reusable components with explicit responsibilities.
- Centralize and type content when repetition or multiple pages make it useful.
- Prefer progressive enhancement so essential content remains available without client-side JavaScript.
- Treat WCAG AA accessibility and semantic HTML as acceptance criteria.
- Minimize client JavaScript, third-party code, and unnecessary dependencies.
- Preserve static rendering where content and integrations allow it.
- Test user-visible behavior and public metadata rather than fragile implementation details.

Commercial features, information architecture, integrations, and content models must follow the future strategic brief. They must not be inferred from this foundation.
