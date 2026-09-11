# anav.souzab — Design System

A small, opinionated brand system for **anav.souzab**, an independent
designer-and-writer working in Portuguese (pt-BR) who builds landing pages,
visual identities and does positioning consultancy. The source describes itself
as *"minimalista, feminino, com força editorial para landing pages e produto"* —
minimal, feminine, with editorial force.

There is no product app here. The system serves two surfaces:

1. **Landing page / marketing site** — the services-and-portfolio page the tokens
   were written for.
2. **Social media** — Instagram feed posts, carousels, stories and testimonial
   cards, at native export sizes.

## Sources

Everything in this system was derived from a mounted local folder, `D.system/`,
containing exactly three files:

| File | What it gave us |
| --- | --- |
| `D.system/design-tokens.css` | CSS custom properties: six colours, three font families, the type scale, spacing, radii |
| `D.system/design-tokens.json` | The same tokens in JSON, with Portuguese descriptions of intent per token |
| `D.system/style-guide.png` | A rendered specimen sheet — palette swatches, type ladder, button and card examples (copied to `sources/style-guide.png`) |

No Figma file, no GitHub repository, no product codebase, no slide deck and **no
logo** were provided. Anything below that goes beyond those three files is
inference, and is flagged as such where it matters.

### Gaps and substitutions — read before using

- **No logo exists.** Nothing was drawn or reconstructed. Wherever a mark would
  go, the brand name is set in Instrument Serif (see the "Marca em tipo" card).
  The user has confirmed no logo exists yet. It is encapsulated in the `Wordmark`
  component — supply a real logo later and changing that one file updates every
  surface in the system.
- **No icon set was supplied.** Lucide (2px stroke, round caps) is linked from
  CDN as the closest match to the system's thin editorial line work. **This is a
  substitution — confirm or replace it.**
- **Photography:** two studio portraits were supplied (grey seamless, red top)
  and are cropped and lightly warmed into `assets/photos/` — `ana-hero-4x5`,
  `ana-perfil-1x1`, `ana-editorial-4x5`, `ana-editorial-1x1`,
  `ana-story-9x16`. One real project screenshot was supplied — the **Laís Consuelo** landing page
  (biomédica esteta, Manaus), in `assets/projects/` — `laisconsuelo-desktop.png`,
  `laisconsuelo-mobile.png` and `laisconsuelo-mobile-full.png` (the whole mobile
  page, stitched from five captures). The portfolio section shows this one project
  only — invented filler projects were removed. When more real work exists,
  switch `Work.jsx` back to the 2-up `Card` grid with the pill `Tabs` filter
  (both components are still in the system).
- **The testimonial is still invented** ("Marina Rocha · Método Raiz") and
  appears in `Testimonial.jsx`, the landing template and `QuoteCard` demos.
  Replace it with a real client quote before anything ships.
- **No font binaries were supplied.** All three families are Google Fonts and
  load from the Google CDN, exactly as the source CSS did — so these are the real
  fonts, not lookalikes.
- **No status palette exists** in the source. `positive` / `warning` / `critical`
  / `info` were derived in-family (a muted sage, the antique gold, bordeaux, and
  the secondary text colour) and are marked as derived on their card.

---

## Content fundamentals

**Language is Portuguese (pt-BR).** The source tokens are annotated in
Portuguese; all copy in this system follows suit. If a consumer needs English,
translate — do not switch register.

**Voice: "eu" to "você", second person singular, informal.** The brand is one
person talking to one client. Never corporate "nós", never the formal "senhor/a".

> *Me conta em duas linhas o que você precisa.*
> *Onde você está travada hoje?*
> *Eu desenho e entrego a página inteira.*

Note the feminine default in address (*travada*, not *travado*) — the audience is
women founders and solo practitioners, and the copy assumes it.

**Confident, quiet, never hyped.** The brand's own headline is *"Landing pages
que convertem **sem gritar**"* — pages that convert without shouting. That is the
tone rule in miniature. No exclamation marks, no "revolucionário", no urgency
theatre. Scarcity is stated as fact, not pressure: *"Duas vagas para março."*

**Specific beats superlative.** Claims carry numbers or they are cut.

> ✅ *A página nova pagou o investimento em seis semanas.*
> ✅ *Três semanas em média · +40 páginas entregues*
> ❌ *Resultados incríveis para nossos clientes!*

**Casing.** Sentence case everywhere — headlines, buttons, labels. The single
exception is the mono eyebrow/caption, which is UPPERCASE with 0.12em tracking
(`portfólio · 2026`), and mono tags, which are lowercase (`css`, `tipografia`).
Never Title Case An Entire Headline.

**Headlines are short and use italic for emphasis**, not bold — the display face
has no bold. One or two italicised words per headline, maximum:
*"Landing pages que convertem <em>sem gritar</em>"*.

**Buttons are verb-first and concrete.** *Agendar conversa*, *Ver portfólio*,
*Enviar mensagem*, *Baixar PDF*. Never *Clique aqui*, *Saiba mais* on a primary
action, or *Submit*.

**Punctuation as texture.** The middot separates metadata (`Marina Rocha ·
Método Raiz`, `São Paulo, BR`); the em dash sets an aside. Curly quotes always.

**No emoji.** The source contains none and the register rules them out. Icons do
the work emoji would do elsewhere.

**Length discipline.** Body copy stays under ~62 characters per line
(`--measure`). A social frame carries one idea. If copy does not fit at the
prescribed size, cut words — never shrink the type.

---

## Visual foundations

### Palette
Six colours, all warm, all sharing a rosy-violet undertone — there is no neutral
grey anywhere in the system.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-ink` | `#23181B` | Warm near-black. Text, headlines, dark sections. |
| `--color-base` | `#FAF6F4` | Porcelain white with a rosy cast. The page ground. |
| `--color-primary` | `#7A2438` | Deep bordeaux. The brand colour: CTAs, links, emphasis. |
| `--color-secondary` | `#D9A6A0` | Dusty nude rose. Section grounds, badges, quote marks. |
| `--color-neutral` | `#E4DAD5` | Warm greige. Borders, dividers, off states. |
| `--color-accent` | `#B08A4E` | Antique gold. Premium moments only — never a second CTA colour. |

Tints (`--color-*-tint`) are light washes mixed from those six for badge grounds
and hover states. **Backgrounds are flat colour.** The only gradients in the
system are (a) the ink protection gradient over imagery and (b) bordeaux→ink on
story frames where no photo exists. No decorative multi-hue gradients, ever, and
absolutely no blue-purple.

### Type
Three families, each with a job that never blurs:

- **Instrument Serif** (`--font-display`) — display only. Regular and italic;
  **there is no bold weight and none should be simulated.** Tracking is pulled to
  −0.01em at large sizes, −0.02em on the wordmark. Line-height 1.02–1.15.
- **Manrope** (`--font-body`) — everything readable: body, UI, buttons, nav,
  labels. 400 for prose, 500 for controls, 700 for `h3`-level headings.
- **JetBrains Mono** (`--font-mono`) — eyebrows, captions, tags, metadata,
  prices, numbers. This is the system's signal that a designer writes code; it is
  the one "technical" note in an otherwise editorial palette.

The recurring composition is **mono eyebrow → serif headline → sans body**. That
three-step is the brand's visual sentence; it appears in the hero, every section
header, every social frame.

### Spacing and layout
Strict 8px base — `8 / 16 / 24 / 32 / 48 / 64 / 96`. Section rhythm is
`--section-y` (96px). Content lives in a 1120px container with a 24px gutter;
prose is capped at `--measure` (62ch). Layouts are asymmetric two-column grids
(≈1.15fr / 0.85fr) rather than even halves — the editorial tell. The header is
the only fixed element.

### Radii
`6px` fields and tags · `14px` buttons, badges, toasts · **`28px` cards and
images — the signature curve** · `999px` pills. A card at 28px next to a button
at 14px is the system's most recognisable shape relationship.

### Cards
White or a nude wash, **either a 1px greige hairline or a soft shadow — never
both**. Plain hairline cards are the default in grids; `raised` is reserved for
the one card that should be noticed. Interactive cards lift 2px and deepen their
shadow; they never change colour on hover.

### Shadows
Four steps, all tinted with ink (`rgba(35,24,27, …)`) at 5–10% — never pure
black, which reads cold against porcelain. Shadows are wide and low-contrast
(`0 20px 48px` at 10% for the largest). There is no inner-shadow system; the one
inset token draws a hairline, not depth.

### Motion
Quiet and short: `120ms` for hovers, `200ms` for most transitions, `420ms` for
entrances. Two curves only — `cubic-bezier(.4,0,.2,1)` standard and
`cubic-bezier(.16,1,.3,1)` for anything that should feel soft on arrival.
**No bounce, no spring, no overshoot.** Fades and small translations; nothing
travels more than a few pixels.

### Interaction states
- **Hover** — bordeaux darkens to `#5E1B2B`; quiet controls fill with a greige
  wash; cards lift 2px. Opacity is never used as a hover state.
- **Press** — a 0.985 scale on buttons, 0.94 on icon buttons. Colour does not
  flash on press.
- **Focus** — bordeaux border plus a 3px bordeaux ring at 22% opacity. Always
  visible; never removed.
- **Disabled** — greige fill, muted text, `not-allowed`. Never a faded version of
  the active state.

### Transparency and blur
Used in exactly two situations. **Veils:** the sticky header and any capsule
sitting on imagery use `--veil-light` (72% porcelain) with
`saturate(140%) blur(14px)`. **Scrims:** modals dim the page with 44% ink plus a
4px blur. Over photography, text gets either a protection gradient
(`--protect-bottom`, ink 72%→0) or a blurred capsule — pick one per composition,
never both.

### Imagery
Warm, low-contrast, no cool casts, no heavy grain, no duotone. Portrait and
still-life over stock scenes. Every image is clipped to the 28px radius; only the
hero plate and full-bleed section grounds break out of it. Captions over images
always sit on a protection gradient. *(No real imagery was supplied — see
"Gaps".)*

### Borders and dividers
1px, `--border-subtle` greige. Section separation is done with a background
colour change (porcelain → nude wash → ink), not with rules. Dividers appear
inside cards and the footer only.

---

## Iconography

**Lucide**, loaded from CDN (`lucide-static@0.454.0`), rendered through the
`Icon` component as a CSS mask so every glyph inherits `currentColor`.

- **This is a substitution.** The brand sources contain no icon set, no icon
  font, no SVG sprite. Lucide was chosen because its 2px round-cap stroke matches
  the system's thin editorial line quality; a heavier or filled set would fight
  the type. **Please confirm or supply the real set.**
- **Line only, never filled.** Sizes are 16 / 20 / 24px — 16px inline with body
  and button text, 20px default, 24px for feature moments.
- Icons are **monochrome and inherit text colour**. The only coloured icons are
  the feature icons in service cards (bordeaux on a bordeaux-tint circle) and
  status glyphs in toasts.
- Icons **never appear alone without a label** except in `IconButton`, which
  requires an accessible `label` prop and shows it as a tooltip.
- **No emoji, ever.** **No unicode characters as icons** — with one deliberate
  exception: the typographic quote mark `"` set in Instrument Serif at large
  size, used as ornament in pull-quotes and testimonial cards. That is type, not
  an icon.
- Common glyphs in this system: `arrow-right`, `arrow-up-right`, `check`, `x`,
  `mail`, `user`, `calendar`, `instagram`, `linkedin`, `sparkles`, `layout`,
  `palette`, `compass`, `chevron-down`, `link`, `share-2`, `panels-top-left`,
  `circle-check`, `circle-alert`.

---

## Index

### Root
| Path | What |
| --- | --- |
| `styles.css` | Global CSS entry — `@import` lines only. Consumers link this one file. |
| `readme.md` | This document. |
| `SKILL.md` | Agent Skills front-matter so this folder works in Claude Code. |
| `thumbnail.html` | The system's homepage tile. |
| `sources/style-guide.png` | The original specimen sheet supplied with the brand. |
| `assets/photos/` | Cropped, lightly warmed portraits at each export ratio. |

### `tokens/`
`fonts.css` (Google Fonts import) · `colors.css` (base + semantic) ·
`typography.css` (families, scale, leading, tracking, weights) · `spacing.css`
(8px scale + layout) · `radius.css` · `effects.css` (shadows, motion,
transparency) · `base.css` (element defaults, link colours).

### `components/`
| Group | Components |
| --- | --- |
| `brand/` | `Wordmark` |
| `core/` | `Button`, `IconButton`, `Icon` |
| `forms/` | `Input`, `Select`, `Checkbox`, `Radio`, `Switch` |
| `display/` | `Card`, `Badge`, `Tag` |
| `navigation/` | `Tabs` |
| `feedback/` | `Dialog`, `Toast`, `Tooltip` |

Each has `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md`
(when to use it). Each directory has one `@dsCard` HTML showing its variants.

**Intentional additions.** The sources are brand-guidelines-only: they define no
component inventory, so this is an authored standard set rather than a
recreation. Two entries deserve a note: `Icon` exists purely as a wrapper for the
substituted Lucide set, and `Tag` (mono, lowercase, outlined) was split from
`Badge` because the source's mono-label treatment is visually distinct enough to
be its own thing.

### `ui_kits/`
- **`landing/`** — the marketing page. `Nav`, `Hero`, `Work`, `Services`,
  `Testimonial`, `ContactSection`, `Footer`, plus an interactive `index.html`
  (CTAs open a dialog; submitting fires a toast). See its README.
- **`social/`** — `SocialPost` (1080×1080), `CarouselSlide` (1080×1350),
  `StoryFrame` (1080×1920), `QuoteCard` (1080×1080), plus a tabbed, click-through
  `index.html`. Frames render at native pixel size, so a 1× screenshot is a
  ready-to-post asset. See its README.

### `templates/`
Starting folders a consuming project can copy: `landing-page/LandingPage.dc.html`
(the full marketing page) and `social-kit/SocialKit.dc.html` (all four social
formats at native size). Each loads the system through a sibling `ds-base.js`.

### `guidelines/`
Specimen cards feeding the Design System tab, grouped **Colors** (brand, support,
tints, semantic text, derived status, approved pairings), **Type** (display,
body, mono, the pairing in use), **Spacing** (8px scale, spacing in use, radii)
and **Brand** (shadows, states, motion, veils and protection gradients, the
wordmark).
