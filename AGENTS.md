# Wedding Site Agent Instructions

## Project Overview

Single-page wedding website for Elle & Alexander (October 15, 2026). Built on the AstroWind template (Astro v6 + Tailwind CSS v4), heavily customized with wedding-specific widgets.

**Stack:** Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | Sharp

Domain context, glossary, and wedding details: see `CONTEXT.md`.

## Commands

| Command           | Purpose                         |
| ----------------- | ------------------------------- |
| `npm run dev`     | Dev server at localhost:4321    |
| `npm run build`   | Static build to `./dist/`       |
| `npm run preview` | Preview production build        |
| `npm run check`   | astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier      |

**Node.js:** >= 22.12.0

## Architecture

### Config

Site config is a plain TypeScript module at `src/config.ts` — **not** a YAML file or virtual module. Import directly:

```typescript
import { SITE, METADATA, APP_BLOG } from '~/config';
```

Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`.

`astro.config.ts` reads `SITE.site`, `SITE.base`, `SITE.trailingSlash` from this file.

### Key Directories

```
src/
  config.ts                  # Site config (SITE, I18N, METADATA, APP_BLOG, UI)
  content.config.ts          # Content collections: post + photo
  navigation.ts              # Empty — header/footer links are hardcoded in widgets
  layouts/
    WeddingLayout.astro      # Main layout (wraps Layout.astro + WeddingHeader)
  pages/
    index.astro              # Single-page wedding site (all sections)
    [...blog]/               # Blog/announcements routes
  components/widgets/        # Wedding sections: WeddingHero, OurStory, EventDetails,
                             #   PhotoGallery, RSVP, Announcements, WeddingFAQs,
                             #   Accommodations, Registry, WeddingFooter, WeddingHeader
  data/
    post/                    # Blog/announcement entries (.md/.mdx)
    photo/                   # Photo collection entries (.md with frontmatter)
public/
  photos/                    # Actual photo image files (referenced by photo entries)
```

### Path Aliases

`~/` maps to `src/` (configured in both `tsconfig.json` and `astro.config.ts` Vite alias).

### Tailwind CSS v4

CSS-first config in `src/assets/styles/tailwind.css`:

- Theme tokens via `@theme { --color-primary: var(--aw-color-primary); ... }`
- Dark mode: class-based via `@variant dark (&:where(.dark, .dark *))`
- Custom variant: `@custom-variant intersect (&:not([no-intersect]))`
- Plugin: `@tailwindcss/typography`
- Vite plugin `@tailwindcss/vite` (not an Astro integration)

CSS variables for colors/fonts defined in `src/components/CustomStyles.astro`.

**Note:** `tailwind-merge` is NOT installed or used despite being mentioned in upstream AstroWind docs.

## Theme System

Three themes controlled by `data-theme` attribute on `:root`:

- **sedona** (default) — dusty blue/terracotta, the invitation watercolor palette
- **forest** — deep greens, earth tones
- **desert** — warm terracotta, sandy beige

All theme tokens live in `src/components/CustomStyles.astro` with light + dark variants. Fonts: Playfair Display Variable (serif/heading) + Lato Variable (sans).

## Photo Collection

Photos are Astro content collection entries in `src/data/photo/` (e.g., `ph_01.md`). Each entry has frontmatter:

```yaml
title: 'ElleAlexander_01'
caption: 'Add your photo caption here'
date: 2024-01-01
order: 17 # Controls display sort order
image: 'photos/ElleAlexander_01.jpg' # Path relative to public/
isInGallery: true
isInTimeline: false
timelineEvent: '' # Optional timeline label
```

Image files live in `public/photos/`. The `PhotoGallery` widget queries `isInGallery: true` entries and sorts by `order`.

Photo gallery uses **GLightbox loaded from CDN** (not npm) — see `src/components/widgets/PhotoGallery.astro`.

## RSVP Form

Posts to Formspree (`https://formspree.io/f/mdavdaqy`). Fields: name, email, attending (radio), guests (select: 1 or 2), guest name, mailing address, dietary restrictions. Guest details section is hidden until "attending = yes" via inline `<script>`.

## Deployment

- **GitHub Pages** via `.github/workflows/actions.yaml`: builds with `npm run build`, uploads `./dist`
- A second workflow `static.yml` exists but uploads the raw repo (likely stale — prefer `actions.yaml`)
- `SITE.base` is `/` — if deploying to a subpath like `/weddingSite`, update this in `src/config.ts`

## Verification

After changes, run:

1. `npm run build` — must succeed
2. `npm run check` — astro check + ESLint + Prettier
3. Visual check: homepage sections, photo gallery, RSVP form, dark mode toggle
