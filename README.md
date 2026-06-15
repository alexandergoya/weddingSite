# Elle & Alexander — Wedding Site

Wedding website built with Astro v6 + Tailwind CSS v4. Deployed at [ellealexander.lol](https://ellealexander.lol).

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Production build to `./dist/`            |
| `npm run preview` | Preview production build locally         |
| `npm run check`   | Run astro check + ESLint + Prettier      |
| `npm run fix`     | Auto-fix ESLint + Prettier issues        |

Requires **Node.js >= 22.12.0**.

## Project Structure

```
src/
├── config.yaml                  # Site name, URL, metadata, theme
├── pages/index.astro            # Homepage (single-page layout)
├── components/widgets/          # Page sections
│   ├── OurStory.astro           # Timeline content (dates + story + images)
│   ├── PhotoGallery.astro       # Photo grid with lightbox
│   ├── RSVP.astro               # RSVP form (Formspree)
│   ├── EventDetails.astro       # Date, venue, schedule
│   ├── Announcements.astro      # Blog post feed
│   ├── WeddingFAQs.astro        # FAQ accordion
│   ├── Accommodations.astro     # Lodging/transportation
│   ├── WeddingHero.astro        # Hero section
│   ├── WeddingHeader.astro      # Top nav
│   └── WeddingFooter.astro      # Footer
├── data/
│   ├── post/                    # Blog posts / announcements (.md or .mdx)
│   └── photo/                   # Photo metadata (.md, one per photo)
└── assets/styles/tailwind.css   # Tailwind theme tokens + utilities
```

## How to Modify Content

### Timeline (Our Story)

Edit `src/components/widgets/OurStory.astro`. Each entry in the `timeline` array has:

```js
{
  date: '2007',                    // Date label
  title: 'A Roma(nce) in Tacoma',  // Event title
  description: `...`,              // Multi-paragraph description
  image: 'photos/ElleAlexander_NN.jpg',  // Image path
}
```

### Photos (Gallery)

1. Add the `.jpg` file to `public/photos/`
2. Create a metadata file at `src/data/photo/ph_NN.md`:

```yaml
---
title: 'ElleAlexander_NN'
caption: 'Your caption here'
date: 2024-01-01
order: NN            # Sort order (use photo number)
image: 'photos/ElleAlexander_NN.jpg'
isInGallery: true
---
```

Photos with `isInGallery: true` appear in the gallery grid sorted by `order`. Run `npm run build` after adding photos.

### Announcements / Blog Posts

Add a `.md` or `.mdx` file to `src/data/post/`:

```yaml
---
title: 'Your Post Title'
publishDate: 2026-06-15
excerpt: 'Short description shown in the feed'
draft: false
---

Write your post content here using Markdown.
```

Set `draft: true` to hide a post from the site. Posts appear automatically under the Announcements section.

### Site Configuration

Edit `src/config.yaml`:

- **Site name / URL / base path** — `site:` block
- **Page title & SEO metadata** — `metadata:` block
- **Theme** — `ui: theme:` (`'light:only'`, `'dark:only'`, `'system'`)
- **Blog enabled / posts per page** — `apps: blog:` block

### RSVP Form

The form in `src/components/widgets/RSVP.astro` submits to Formspree. To change the destination, update the `action` attribute on the `<form>` element.

### Colors & Fonts

- **CSS variables** — `src/components/CustomStyles.astro` defines light/dark theme colors and fonts
- **Tailwind theme** — `src/assets/styles/tailwind.css` maps CSS variables to Tailwind utilities

### Navigation Links

Edit the `navLinks` array in `src/components/widgets/WeddingHeader.astro`.

## Deploy

```shell
npm run build   # Outputs to ./dist/
```

Deploy the `dist/` folder to any static host. A `CNAME` file in `public/` handles the GitHub Pages custom domain.
