# EduLinker Academy (landing)

Marketingová landing page pre EduLinker Academy — workshopy pre školy a firmy.
Postavené v Astro 4 + Tailwind, plne statické.

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
├── layouts/Base.astro
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro          # hlavná — dve cesty (školy / firmy)
│   ├── pre-skoly.astro      # AI pre učiteľov · 3,5h workshop
│   ├── pre-firmy.astro      # AI Champion Programme
│   └── kontakt.astro
└── styles/global.css
public/
└── favicon.svg
```

## Brand

- `--navy` `#0F2A47` — hlavná tmavá
- `--accent` `#b45309` — academy oranžová (odlišuje od platformy, ktorá má teal)
- Fonty: Inter (sans), Source Serif 4 (display)

## Pre koho je tento repo

Workshopový brand pod EduLinker s.r.o. (Brno). Hlavný kontakt: `patrik@edulinker.cz`.
