# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server
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
- Styled with Tailwind CSS using custom design system
- Framer Motion used for animations

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
root and bare imports like `constants/features` no longer resolve — always use an alias.

**Data Management:**
- Static constants in `/constants/`: `navItems`, `features` (homepage cards),
  `testimonials`, and `services` (the registry backing `RelatedServices`)
- No CMS and no MDX: every page's copy lives inline in its `page.tsx`

**Styling System (Tailwind 4):**
- Configured entirely in `styles/globals.css` — there is no `tailwind.config.js`
- Brand colors and the `construction-*` / `building-*` scales are declared as
  `--color-*` custom properties inside `@theme` (primary: #2563eb, secondary: #1e40af)
- `postcss.config.js` uses `@tailwindcss/postcss`; autoprefixer is gone, v4
  handles vendor prefixing itself
- The `bg-grid-*` background patterns are plain `@utility` rules with the colour
  baked into the SVG data URI. They used to be a `matchUtilities` plugin driven by
  `flattenColorPalette`, which v4 removed — and since v4 colours are CSS variables,
  a JS plugin can no longer read the literal value an SVG data URI needs. Adding a
  new colour variant means adding another `@utility` by hand.
- A base rule restores Tailwind 3's default `border-color: gray-200`; without it
  the many cards using a bare `border` class would inherit `currentColor`

### Page Structure
- **Home page**: Hero, SubHero, About, Testimonials, CTA
- **Service pages**: each owns a distinct scope and links to sibling trades rather
  than repeating their content — keep it that way, the overlap previously kept two
  pages out of Google's index
- **Container component**: wraps pages with Navbar, Footer and CookieBanner

### SEO Configuration
`app/layout.tsx` holds the site-wide metadata and the `GeneralContractor` JSON-LD;
each page sets its own title, description and canonical. Service pages add a
`Service` JSON-LD via `components/JsonLd.tsx`.
