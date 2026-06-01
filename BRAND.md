# EduLinker — Brand & Design Reference v1.0

> Sprievodca pre tvorbu **prezentácií, dokumentov, pitch decku a ďalších landing stránok**,
> ktoré majú vizuálne nadväzovať na `edulinker.cz` a `edulinker-academy.cz`.
> Brno · jún 2026

---

## 1. Filozofia v jednej vete

> **Vyzerá to ako keby to robil niekto, kto má vkus a nemá čas na ozdoby.**
> Žiadne stock fotky, žiadne gradienty, žiadne 3D ikony, žiadne emoji.
> Typografia robí 80 % práce. Biele miesto robí zvyšok.

---

## 2. Farebná paleta

### Hlavná paleta (používaná všade)

| Token | HEX | Použitie |
|---|---|---|
| **Navy** | `#0F2A47` | Hlavná farba textu (nadpisy), tmavé sekcie, primárne CTA buttony |
| **Navy mid** | `#1a3a5c` | Hover stav nad Navy |
| **Navy deep** | `#081a2e` | Najtmavšie pozadie (cards v tmavých sekciách) |
| **Paper** | `#fbfaf6` | Hlavné pozadie (NIE pure white — vždy mierne krémový) |
| **Paper tint** | `#f4f1e9` | Sekundárne sekcie, jemný kontrast voči hlavnej Paper |
| **Ink** | `#111827` | Body text |
| **Ink muted** | `#4b5563` | Sekundárny text, popisky |
| **Ink faint** | `#9ca3af` | Tretí level — disclaimer, timestamps |

### Akcent — líši sa medzi projektami

| Projekt | Token | HEX | Použitie |
|---|---|---|---|
| **EduLinker platforma** | **Teal** | `#0D7C66` | Akcentové linky, „eyebrow" labely, podčiarknutia |
| **EduLinker Academy** | **Accent** (burnt orange) | `#b45309` | To isté, ale oranžové — okamžitý rozdiel |

### Pravidlá použitia farieb

✓ **Hlavné pozadie vždy Paper (`#fbfaf6`)** — nikdy nie čistá biela. Rozdiel je drobný, ale zásadný.
✓ **Tmavé sekcie sú vždy Navy (`#0F2A47`)**, nie čierne. Text v nich `Paper` s `opacity ~80%` (`text-paper/80`).
✓ **Akcent v 1 farbe na projekt** — Platform = Teal, Academy = Orange. Nemiešať.
✓ **Maximálne 3 farby na obrazovku** (Paper, Navy, Akcent). Šedé tóny sa nepočítajú.
✗ **Žiadne gradienty**, ever.
✗ **Žiadne semaphor farby** (red error, green success). Použi navy + accent.

---

## 3. Typografia

### Dvojica fontov

| Font | Použitie | Kde stiahnuť |
|---|---|---|
| **Source Serif 4** | Display nadpisy, citáty, čísla | [Google Fonts](https://fonts.google.com/specimen/Source+Serif+4) |
| **Inter** | Všetok ostatný text, UI | [Google Fonts](https://fonts.google.com/specimen/Inter) |

### Veľkostná stupnica (pre prezentácie a dokumenty)

| Účel | Font | Veľkosť (slide 1920×1080) | Príklad |
|---|---|---|---|
| Hero nadpis | Source Serif 4, regular | **120–160 pt** | Hlavný slide title |
| H1 nadpis slide-u | Source Serif 4, regular | **72–96 pt** | Section opener |
| H2 podnadpis | Source Serif 4, regular | **40–56 pt** | Sub-section |
| Body | Inter, regular | **22–28 pt** | Hlavný text |
| Caption / Eyebrow | Inter, semi-bold, UPPERCASE, letter-spacing 0.18em | **12–14 pt** | Popisky |
| Veľké číslo | Source Serif 4, regular | **140–200 pt** | „4 700+" statistika |
| Mikrotext | Inter, regular | **14–16 pt** | Disclaimers, page numbers |

### Špeciálne treatments

#### „Eyebrow" label (nad každým nadpisom)
```
─── BRNO · PRE-SEED · MVP LIVE
```
- UPPERCASE
- letter-spacing 0.18em
- font weight 600
- farba: Teal (platform) / Orange (academy)
- pred textom krátka horizontálna čiara (24 px), tej istej farby

#### Italic emphasis v nadpise
Vždy zvýrazni **práve jedno slovo** v hero nadpise serifovým kurzívnym:

> Infraštruktúra pre trh<br/>so *znalosťami*.

> Nevytvárame závislosť.<br/>*Vytvárame kapacitu*.

Italic robí 80 % charakteru. Bez neho je to len ďalší sans-serif slide.

#### Línie a podčiarknutia
- Pravítka medzi sekciami: tenká línia (1 px) s gradient fade na okrajoch (nie ostrá čiara od kraja po kraj)
- Linky v texte: subtílne podčiarknutie cez `background-image` (akcentová farba na 45 % opacity), nie default underline

---

## 4. Layout & rytmus

### Šírky a okraje

| Element | Hodnota |
|---|---|
| Max šírka contentu | **1280 px** (web), na slidu = stred 70 % šírky |
| Max šírka textového bloku | **68 znakov** (~ 60–70 ch line length) |
| Vonkajší padding | 80–120 px (web), 100–140 px (slide) |
| Vertikálny rytmus medzi sekciami | **96–128 px** |

### Asymetria — vždy

Nikdy nedávaj nadpis na stred. Vždy ho zarovnaj **doľava**, s aside-quote alebo eyebrow napravo.

```
┌─────────────────────────────────────────────┐
│  ─── EYEBROW                                │
│                                             │
│  Veľký                          „Krátky     │
│  serifový             ←──→       citát na   │
│  nadpis                          pravej     │
│                                  strane."   │
│                                             │
│  Body text pod nadpisom, max               │
│  68 znakov na riadok, ink-muted.           │
└─────────────────────────────────────────────┘
```

### Grid

- Pre dva stĺpce: **2/3 vľavo + 1/3 vpravo** (nie 50/50)
- Pre tri karty: rovnaké, oddelené 1 px navy linkou (žiadne shadows, žiadne rounded corners > 8 px)

---

## 5. Komponenty (slide-friendly)

### Button / CTA

```
┌─────────────────────────────────┐
│  Dohodnúť audit (zadarmo)  →    │
└─────────────────────────────────┘
```
- Pozadie: **Navy** (alebo Accent pri Academy)
- Text: Paper, Inter medium, ~14 pt na webe
- Padding: 14 px × 28 px
- Border-radius: **2 px** (skoro nič — žiadne pill buttony)
- Žiadny shadow

### Statistický blok (kľúčový pre pitch deck)

```
4 700+
ŠKÔL S OP JAK
spravuje aktívne dotačné projekty v 2026.
```
- Veľké **serifové** číslo (140–200 pt)
- Tiny eyebrow popisok pod ním (12 pt, UPPERCASE, letter-spacing 0.16em, muted)
- Krátky descriptor riadok (16–18 pt, muted)
- Žiadne ikony pri číslach. Číslo si vystačí samo.

### Citačná karta (pull quote)

```
│
│ „Stratil som hodiny zbieraním podkladov
│  z piatich rôznych systémov. Stále som si
│  nebola istá správnosťou dát."
│
│ — riaditeľka ZŠ, Juhomoravský kraj
```
- Ľavá vertikálna čiara (2 px, accent color)
- Text: Source Serif 4, *italic*, 20–28 pt
- Atribúcia pod citátom: Inter, 14 pt, muted

### Tabuľka / matica (porovnanie)

- Header riadok: Navy pozadie, Paper text, font Inter semi-bold
- Riadky: striedavé Paper / Paper-tint pozadia
- 1 px Navy/10 % bordery medzi bunkami
- Žiadne rounded corners

---

## 6. Tón hlasu (copy)

### Tri pravidlá

1. **Konkrétne čísla, mená, miesta.** „4 700 škôl" > „mnoho škôl". „Brno" > „region". „Patrik" > „náš tím".
2. **Pomenuj problém presne, potom riešenie.** Najprv: „indikátor 525102, kalkulačka ZoR, dve vlny súbežne". Potom: „toto riešime tak…".
3. **Priznaj sa k limitom.** „v0.1 · ešte sa nám menia veci" je viac dôveryhodné než „best-in-class enterprise solution".

### Podpisové formulácie (používaj ich ako stálice)

- „Infraštruktúra pre trh so znalosťami." (na celkový pitch)
- „Byrokratický štít" (na OP JAK section)
- „Hřbitov licencií" (na firemnú section o LinkedIn Learning, Seduo a spol.)
- „Nestaviame ďalšiu platformu. Staviame infraštruktúru pre trh so znalosťami."
- „Champion stavia, my navigujeme." (pre Academy)
- „Nevytvárame závislosť — vytvárame kapacitu." (pre Academy)
- „Postavené v Brne." (footer/credit)

### Čo NEPÍŠEME

✗ „Revolutionize your workflow"
✗ „Unlock the power of AI"
✗ „Seamlessly integrate"
✗ „Best-in-class"
✗ „Empowering organizations"
✗ Akékoľvek „Trusted by 10,000+ companies" keď to nie je pravda
✗ Žiadne emoji vo formálnych materiáloch

---

## 7. Anti-AI checklist (pred publikovaním)

Prejdi si tento zoznam pri každom novom materiáli:

- [ ] Hero nadpis je **left-aligned**, nie centrovaný
- [ ] Aspoň jeden nadpis má **italic emphasis na jednom slove**
- [ ] Je tam **eyebrow label** nad nadpisom
- [ ] Pozadie je **Paper (`#fbfaf6`)**, nie pure white
- [ ] Maximum **2 farby + akcent** na obrazovku
- [ ] **Žiadne stock fotky** (ani „business meeting" ani „handshake")
- [ ] **Žiadne gradient backgrounds**
- [ ] **Žiadne 3D ilustrácie** alebo izometrické grafiky
- [ ] **Žiadne emoji** v hlavnom texte
- [ ] Aspoň jeden **konkrétny detail** (meno, číslo, mesto, dátum)
- [ ] V patičke / footer-i nejaký **úprimný credit** („v0.1", „pilotná séria", „postavené v Brne")
- [ ] Citáty a štatistiky majú **zdroj** (aspoň rolu, ak nie meno)

---

## 8. Konkrétne pre prezentácie

### Štruktúra slidu — default šablóna

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ─── EYEBROW (12 pt, accent farba)                   │
│                                                      │
│  Veľký serifový                                      │
│  nadpis slidu.                                       │
│                                                      │
│  Body text, ak treba. Maximum 3–4 vety.              │
│  Najradšej menej.                                    │
│                                                      │
│                                                      │
│                                                      │
│  EduLinker · Brno 2026          slide 7 / 24         │
└──────────────────────────────────────────────────────┘
```

### Typy slidov, ktoré fungujú

1. **Hero / titulný** — len serifový nadpis, veľký, vľavo dole. Eyebrow s dátumom/autorom.
2. **Statistika** — jedno obrovské číslo (200+ pt) na stred-vľavo, popis riadok pod.
3. **Citát** — ľavý border, italic serif, atribúcia pod.
4. **Porovnanie 2-stĺpce** — „Nehovor / Hovor namiesto toho". Nadpis vľavo, dva stĺpce pod.
5. **Päť pilierov** — očíslované sekcie 01–05, každá s krátkym popisom, oddelené 1px líniami.
6. **Tmavá sekcia** — Navy pozadie, Paper text, accent zvýraznenia. Použiť ekonomicky (1–2× za prezentáciu).

### Konkrétny PowerPoint / Keynote setup

| Nastavenie | Hodnota |
|---|---|
| Slide veľkosť | **16:9, 1920×1080** |
| Pozadie | `#fbfaf6` (NIE biela) |
| Default text | Inter Regular, navy `#0F2A47` |
| Default nadpis | Source Serif 4 Regular, navy |
| Spacing | Master template s `padding: 100 px` všetkých strán |
| Page numbery | Spodok vpravo, Inter 12 pt, `ink-muted #4b5563`, formát `7 / 24` |
| Stála pätička | Spodok vľavo, Inter 12 pt, „EduLinker · Brno 2026" |

### Slide transitions

**Žiadne.** Cut na ďalší slide. Animácie zabíjajú dojem premyslenosti.

---

## 9. Súbory ku stiahnutiu (nastav si ich raz)

| Položka | Kde |
|---|---|
| Source Serif 4 (woff2 alebo otf) | fonts.google.com/specimen/Source+Serif+4 |
| Inter | fonts.google.com/specimen/Inter |
| Brand farby (Figma plugin) | Skopíruj HEX kódy zo sekcie 2 do Figma stylesheets |
| Slide template (PowerPoint) | TODO — vytvoriť .pptx s 6 master slidmi (viď sekcia 8) |
| Slide template (Keynote) | TODO — to isté |

---

## 10. Keď si nie si istý

Pred dokončením sa pozri na live verziu:

- **Platform:** `https://edulinker.cz`
- **Academy:** `https://edulinker-academy.cz`

Otvor podstránku, otvor svoj nový dizajn vedľa — ak ich nevieš na prvý pohľad spojiť ako súčasť tej istej značky, **niečo si vynechal**. Najčastejšia chyba: pure white pozadie namiesto Paper, alebo chýbajúci eyebrow label.

---

*v1.0 · jún 2026 · vyrobené spolu s Patrikom, žiadny stock copywriter sa tomu nepriblížil.*
