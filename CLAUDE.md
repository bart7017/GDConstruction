# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server

### Package Management
Uses npm with package-lock.json. The project also has a pnpm-lock.yaml file present.

## Architecture

This is a **Next.js marketing website template** (originally called "Foxtrot") built with React, TypeScript, and Tailwind CSS. The project follows a pages-based routing structure with MDX blog support.

### Key Architectural Patterns

**Component Structure:**
- All React components are in `/components/` directory
- Components use TypeScript with `.tsx` extensions
- Styled with Tailwind CSS using custom design system
- Framer Motion used for animations

**Path Aliases (tsconfig.json):**
- `@components/*` → `components/*`
- `@pages/*` → `pages/*` 
- `@utils/*` → `utils/*`
- `@layouts/*` → `layouts/*`
- `@context/*` → `context/*`
- `@hooks/*` → `hooks/*`
- `@server/*` → `server/*`
- `@db/*` → `prisma/*` (configured but no Prisma files present)
- `@images/*` → `images/*`

**Data Management:**
- Static constants in `/constants/` (navigation, features, testimonials)
- Blog content stored as MDX files in `/data/blogs/`
- Custom MDX utilities in `/lib/mdx.ts` for file processing

**Styling System:**
- Custom Tailwind configuration with brand colors (primary: #00ABB3, secondary: #3C4048)
- Custom utility classes for background patterns (bg-grid, bg-dot variants)
- Vulcan color palette defined for dark theme elements
- PostCSS with Tailwind and Autoprefixer

### Page Structure
- **Home page**: Composed of Hero, SubHero, Testimonials, Pricing, CTA sections
- **Blog system**: Dynamic routing with `[slug].tsx` for individual blog posts
- **Container component**: Provides consistent layout with SEO meta tags, Banner, Navbar, Footer

### Blog/Content System
The MDX blog system processes markdown files with:
- Front matter parsing via gray-matter
- Reading time calculation
- Word count statistics
- Serialization via next-mdx-remote

### SEO Configuration
Container component handles meta tags with hardcoded branding for "Foxtrot" and "aceternity.com" domains.