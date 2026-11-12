# Anns Qasim, portfolio

Senior Full-Stack Engineer and Tech Lead in Munich. Twelve years of
JavaScript, now building a luxury stays platform at WeStay. React,
Next.js, TypeScript and AI-first delivery.

Live at [annsqasim.vercel.app](https://annsqasim.vercel.app).

## Stack

- Next.js 15 (App Router, React Server Components)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion for animations and interactions
- Lenis for smooth scroll
- Lucide icons
- Fraunces (headlines), Inter (body), Caveat (handwritten accents)

## Design

- Warm paper palette with a single moss-green accent
- Kinetic headline on load, scroll-triggered reveals, parallax photo
  band, magnetic buttons and 3D tilt cards
- Dark Lauterbrunnen band bridges the hero and the about section
- Respects `prefers-reduced-motion`

## Run locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Deploy

Connected to Vercel. A push to `main` triggers a production deploy.

## Structure

```
app/
  layout.tsx           fonts + metadata
  page.tsx             home page
  work/westay/         WeStay case study route
components/
  Nav.tsx              sticky nav with magnetic pill
  HeroPhoto.tsx        3D mouse-parallax photo frame
  KineticHeadline.tsx  character-by-character reveal
  Marquee.tsx          seamless tech ticker
  WorkCard.tsx         tilt card for case studies
  ParallaxBand.tsx     scroll-driven photo band
  Reveal.tsx           scroll-triggered entry
  Magnetic.tsx         cursor-follow wrapper
  TiltCard.tsx         3D tilt wrapper
  CursorGlow.tsx       soft cursor spotlight
  ScrollProgress.tsx   top progress bar
  SmoothScroll.tsx     Lenis smooth scroll provider
public/
  images/              portrait and wide photos
  screenshots/         WeStay, Almosafer, Halal Explorer screenshots
```

## License

The code is MIT. The photos and written content are not.
