# Spaccini Barbecue

This repository contains the foundation of the official Spaccini Barbecue website, serving Perugia and Umbria. The current release is a responsive, accessible branded foundation while the full commercial website is defined; it is not the final commercial experience.

The canonical website URL is [https://www.spaccinibarbecue.com](https://www.spaccinibarbecue.com).

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- Vitest and Testing Library
- GitHub Actions for quality checks
- Vercel for hosting and deployment

## Prerequisites

- Git
- [nvm](https://github.com/nvm-sh/nvm)
- The Node.js version declared in [`.nvmrc`](./.nvmrc)
- The npm version bundled with that Node.js release

## Ubuntu setup

```bash
git clone https://github.com/lucaspaccini/spaccini-barbecue.git
cd spaccini-barbecue
nvm install
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use npm as the only package manager. `npm ci` installs the exact dependency versions recorded in `package-lock.json`.

## Available scripts

| Command                | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Start the local Next.js development server. |
| `npm run build`        | Create an optimized production build.       |
| `npm run start`        | Serve a completed production build.         |
| `npm run format`       | Format supported files with Prettier.       |
| `npm run format:check` | Check formatting without changing files.    |
| `npm run lint`         | Run ESLint across the project.              |
| `npm run lint:fix`     | Apply ESLint's safe automatic fixes.        |
| `npm run typecheck`    | Run TypeScript without emitting files.      |
| `npm test`             | Run the Vitest suite once.                  |
| `npm run test:watch`   | Run Vitest in watch mode.                   |

## Repository structure

```text
.
├── .github/              # CI and dependency update configuration
├── docs/                 # Architecture and deployment notes
├── public/               # Approved static assets
├── src/app/              # App Router pages, metadata, and global styles
├── src/test/             # Test setup and behavior-focused tests
├── .nvmrc                # Pinned local Node.js version
├── package.json          # npm scripts and dependency manifest
└── vitest.config.mts     # Vitest configuration
```

## Environment variables

The foundation currently requires no environment variables. [`.env.example`](./.env.example) documents that state and contains no credentials. Never commit real `.env` files or sensitive values.

## Quality checks

Run the same core checks used by CI before handing off a change:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm audit --omit=dev
```

The `CI` GitHub Actions workflow runs on every pull request, on pushes to `main`, and on manual dispatch. It installs dependencies with `npm ci`, performs the checks above, and does not deploy the site. Dependabot checks npm packages and GitHub Actions weekly, groups compatible minor and patch updates, and leaves major updates as individual pull requests.

## Deployment

Production deployment uses the GitHub–Vercel integration, not GitHub Actions. `main` is the production branch and pull requests provide preview deployments. See [Deployment](./docs/deployment.md) for the release process and domain checklist.

For architectural scope and extension guidelines, see [Architecture](./docs/architecture.md).

For a factual record of completed work, verification results, decisions, and planned next steps, see [Sprint History](./docs/sprint-history.md).

## License and ownership

This repository and its assets are proprietary. All rights reserved. No open-source license is granted, and this repository intentionally has no `LICENSE` file.
