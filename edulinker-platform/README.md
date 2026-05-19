# EduLinker — platforma (landing)

Marketingová landing page pre platformu EduLinker. Postavené v Astro 4 + Tailwind, plne statické.

## Vývoj

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # generuje dist/
npm run preview  # lokálny preview produkčného buildu
```

## Štruktúra

```
src/
├── layouts/Base.astro       # spoločný layout (head, Nav, Footer)
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro          # hlavná
│   ├── pre-skoly.astro      # OP JAK Compliance Engine
│   ├── pre-firmy.astro      # FinTech jadro, wallets
│   ├── pre-lektorov.astro   # Marketplace pre lektorov
│   └── cennik.astro
└── styles/global.css        # CSS premenné, font hooks, hand-style utility
public/
└── favicon.svg
```

## Deploy

Stránka je čisto statická (Astro generuje `dist/` s HTML, CSS, malými JS chunkami). Nasadenie:

- **Netlify / Vercel / Cloudflare Pages**: drag-drop priečinok `dist/`, alebo napojiť repo a build command `npm run build`.
- **GitHub Pages**: build a pushni `dist/` na `gh-pages` vetvu.

### Multi-doména (cz/sk/pl)

`astro.config.mjs` má `site: 'https://edulinker.cz'` ako kanonickú doménu. Doménky
`edulinker.sk` a `edulinker.pl` možno nasmerovať na rovnaký hosting cez DNS A/CNAME
záznam — obsah je identický a kanonická URL sa vždy vráti na `.cz`. Keď budú jazykové
mutácie, pridáme `hreflang` alternatívy a samostatné lokalizované buildy.

## Brand

- `--navy` `#0F2A47` — hlavná farba textu a hlavičky
- `--teal` `#0D7C66` — akcentová (linky, podtitulky)
- Fonty: Inter (sans), Source Serif 4 (display) — cez Google Fonts s `display=swap`.

## Pre koho je tento repo

Zakladateľský tím EduLinker (6 ľudí, Brno). Hlavný kontakt: `patrik@edulinker.cz`.
