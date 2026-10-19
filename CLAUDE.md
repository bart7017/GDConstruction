# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npx next dev -p 3005` - Start the development server (port 3000 is used by another project)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint (`next lint` no longer exists in Next 16)

### Package Management
Uses npm with package-lock.json. Do not introduce a second lockfile: a stale
`pnpm-lock.yaml` used to sit here and caused tooling to silently switch to pnpm.

## Architecture

Marketing website for GD Construction, a general contractor in Pamfou (77830),
Seine-et-Marne. Built with Next.js (App Router), React, TypeScript and Tailwind CSS.
It started from a template called "Foxtrot"; some component names still come from it.

### Key Architectural Patterns

**Component Structure:**
- All React components are in `/components/` directory
- Components use TypeScript with `.tsx` extensions
- Styled with Tailwind CSS using custom design system; design decisions live in
  `design/direction.md` (read it before touching the UI)
- No animation library: motion is CSS (scroll-driven `reveal` / `reveal-zoom`, the
  hero `laser`, transitions). The mobile menu drawer is plain CSS + pointer events
- Page building blocks in `components/Page.tsx`: `PageHeader`, `Section`, `Blocks`,
  `Points`, `Gallery`; buttons are `ButtonLink` (`components/Button.tsx`)

**Routing:** App Router (`/app`). Routes are `/`, `/services`, `/services/<slug>`
(nine trade pages), `/realisations` + `/realisations/[slug]`, `/a-propos`,
`/contact`, `/mentions-legales`. `app/sitemap.ts` and `app/robots.ts` generate
`/sitemap.xml` and `/robots.txt` — keep the sitemap's slug list in sync when
adding a page.

**Path Aliases (tsconfig.json):**
- `@components/*` → `components/*`
- `@constants/*` → `constants/*`
- `@pages/*` → `pages/*` 
- `@utils/*` → `utils/*`
- `@layouts/*` → `layouts/*`
- `@context/*` → `context/*`
- `@hooks/*` → `hooks/*`
- `@server/*` → `server/*`
- `@db/*` → `prisma/*` (configured but no Prisma files present)
- `@images/*` → `images/*`

There is no `baseUrl` (deprecated in TS 7), so `paths` entries are relative to the repo
root and bare imports like `constants/services` no longer resolve — always use an alias.

**Data Management:**
- Static constants in `/constants/`: `navItems`, `testimonials` (empty until real
  reviews exist), `realisations`, and `services` (the registry backing
  `ServicesMosaic` / `RelatedServices`, including each trade's illustration image)
- No CMS and no MDX: every page's copy lives inline in its `page.tsx`

**Styling System (Tailwind 4):**
- Configured entirely in `styles/globals.css` — there is no `tailwind.config.js`
- The redesign palette is `ardoise`, `chaux`, `gres`, `signal` (`--color-*` in `@theme`);
  the older `primary` / `construction-*` / `building-*` tokens are still declared but
  no longer used by the redesigned pages. Fonts come from `next/font` (Archivo with
  the `wdth` axis for titles via the `display-title` utility, Inter for text)
- `postcss.config.js` uses `@tailwindcss/postcss`; autoprefixer is gone, v4
  handles vendor prefixing itself
- A base rule restores Tailwind 3's default `border-color: gray-200`; without it
  the many cards using a bare `border` class would inherit `currentColor`

### Page Structure
- **Home page**: Hero (Unsplash photo + laser + cotes), « Nos métiers » mosaic, About,
  Testimonials (renders nothing while empty). The footer carries the page-level CTA
- **Photos**: stock photos are illustrations only, never presented as GD Construction
  jobs, and show no identifiable person; credits in `design/direction.md`
- **Service pages**: each owns a distinct scope and links to sibling trades rather
  than repeating their content — keep it that way, the overlap previously kept two
  pages out of Google's index
- **Container component**: wraps pages with Navbar, Footer and CookieBanner

### SEO Configuration
`app/layout.tsx` holds the site-wide metadata and the `GeneralContractor` JSON-LD;
each page sets its own title, description and canonical. Service pages add a
`Service` JSON-LD via `components/JsonLd.tsx`.

## Outils IA
Règle : voir ~/.claude/CLAUDE.md (« Outils IA génératifs ») et ~/Documents/outils-ia.md. Un outil par action ; « à choisir » = me demander (ou tester sur chacun) au premier besoin, puis noter ici.

| Action | Outil | Offre | Usage commercial OK ? |
|---|---|---|---|
| Voix off | à choisir | — | — |
| Musique | à choisir | — | — |
| Effets sonores | à choisir | — | — |
| Clips vidéo IA | à choisir | — | — |
| Avatar IA | à choisir | — | — |
| Images / visuels | à choisir | — | — |
| Montage | à choisir | — | — |
