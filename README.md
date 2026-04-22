# mayank-portfolio

My personal site — `mayank.dev`. An editorial-style, single-page portfolio
with a magnetic cursor, scroll-linked reveals and live GitHub / npm stats.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS with a small set of custom utilities (see `src/index.css`)
- Framer Motion for scroll-linked and interaction animations
- Radix primitives (via shadcn/ui) for dialogs and a few composables
- Vercel Analytics

## Running locally

Requires Node 18+.

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint
```

## Structure

```
src/
  components/          # one file per section (Hero, Projects, About, …)
    ui/                # shared primitives — cursor, marquee, reveal, kicker
  pages/Index.tsx      # top-level page, mounts the cursor + grain overlay
  index.css            # design tokens + editorial helpers
public/
  projects/            # screenshots used in the hover-preview
```

Section order and layout live in `src/pages/Index.tsx`. Each section is
self-contained and owns its own container width / padding so they can be
reordered freely.

## Live data

The About paragraph pulls GitHub stars and npm weekly downloads for
GlueStack and NativeBase on mount, with current values as fallbacks so the
copy renders correctly even if a fetch fails:

- `api.github.com/repos/gluestack/gluestack-ui`
- `api.github.com/repos/GeekyAnts/NativeBase`
- `api.npmjs.org/downloads/point/last-week/@gluestack-ui/themed`
- `api.npmjs.org/downloads/point/last-week/native-base`

See `src/components/About.tsx`.

## Deployment

Deployed on Vercel from `main`. The build output is a static `dist/`
folder — any static host (Netlify, Cloudflare Pages, GitHub Pages) works.

## License

Personal project — code under MIT, content (copy, images, brand marks) is
not licensed for reuse.
