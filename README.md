# Collaborative Document Editor

A portfolio-quality collaborative document editor built as a static React SPA with a separate
Node.js WebSocket collaboration server.

## Planned Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Editor: TipTap
- Collaboration: Yjs over WebSockets
- Auth and database: Supabase Auth and Supabase PostgreSQL
- Server hosting: Railway
- Frontend hosting: GitHub Pages
- CI/CD: GitHub Actions

## Workspace

```text
apps/web                    React/Vite static SPA
apps/collaboration-server   Node.js/TypeScript WebSocket server
packages/shared             Shared TypeScript contracts and helpers
supabase                     Database migrations and policy notes
```

## Local Development

Install Node.js, then enable pnpm:

```bash
corepack enable
corepack prepare pnpm@9.12.3 --activate
pnpm install
```

Run the web app:

```bash
pnpm dev:web
```

Run the collaboration server:

```bash
pnpm dev:server
```

## Phase Status

- Phase 0: repository/tooling scaffold
- Phase 1 next: Supabase Auth and application shell
