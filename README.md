# Ptrickshott — EduLinker working repo

Pracovný repozitár s marketingovými stránkami pre **EduLinker** a **EduLinker Academy**.

## Aktívne projekty

| Priečinok | Stack | Účel |
|---|---|---|
| [`edulinker-platform/`](./edulinker-platform) | Astro 4 + Tailwind | Landing pre platformu EduLinker (B2B/B2G SaaS) |
| [`edulinker-academy/`](./edulinker-academy) | Astro 4 + Tailwind | Landing pre EduLinker Academy (workshopy) |

Oba projekty sú samostatné Astro buildy s vlastným `package.json` a `dist/`. Detaily v ich vlastných README.

```bash
cd edulinker-platform && npm install && npm run dev
cd edulinker-academy   && npm install && npm run dev
```

## Plán presunu do samostatných GitHub repov

Tieto dva priečinky sú pripravené na presun do samostatných GitHub repozitárov.
Akonáhle budú nové repá vytvorené, použijeme `git subtree split` + push:

```bash
# Pre platformu
git subtree split --prefix=edulinker-platform -b platform-export
git push <nove-repo-url> platform-export:main

# Pre academy
git subtree split --prefix=edulinker-academy -b academy-export
git push <nove-repo-url> academy-export:main
```

## Legacy

- `edulinker/` — starý AngularJS prototyp z 2023, ponechaný ako referencia.
- `ptrickshott/` + `tests/` — Python primality utilita (nesúvisí s EduLinker).
