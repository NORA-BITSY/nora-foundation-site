# nora-foundation-site

The NORA Foundation website — <https://norafoundation.io>

Landing page for the [Canon specification](https://github.com/NORA-BITSY/nora-canon) and the Meridian-Canon reference implementation.

## Stack

- [Astro](https://astro.build) 6 (static output)
- [Tailwind CSS](https://tailwindcss.com) v4
- Deployed to Vercel

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output → dist/
npm run preview    # serve dist/
```

## Structure

```
src/
  pages/index.astro        single-page layout
  layouts/Base.astro       meta tags, fonts
  components/
    Hero.astro
    Problem.astro
    CanonExplainer.astro   W → F → R → S explainer
    Meridian.astro         reference implementation
    Roadmap.astro
    Contribute.astro       funding rails
    Footer.astro
  styles/global.css        Tailwind @theme tokens
public/
  favicon.svg
  meridian-canon-executive-summary.pdf
```

## TODO before launch

- [ ] Enable GitHub Sponsors on the `NORA-BITSY` org (link is live; payout must be configured).
- [ ] Create Open Collective account; replace placeholder URL in `Contribute.astro`.
- [ ] Create Stripe Payment Link; replace placeholder URL in `Contribute.astro`.
- [ ] Generate and publish BTC and ETH addresses; replace placeholders in `Contribute.astro`.
- [ ] Register `norafoundation.io` and point DNS at Vercel.
- [ ] Configure `hello@norafoundation.io` (forwarding from ProtonMail / Google Workspace / Fastmail).
- [ ] Add Open Graph cover image at `public/og.png` (1200×630).
- [ ] Enable Vercel Analytics (privacy-respecting; no cookies).

## Licence

CC0 1.0 Universal — same as the Canon specification. Text and code are in the public domain.
