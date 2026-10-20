---
name: aui-frontend-designer
description: >-
  Specialized Agentic AI Skill for UI/UX Designers and Frontend Engineers working on the ASEAN University International (AUI) web portal.
  Enforces strict compliance with established Fraunces/Karla typography, Navy & Gold color tokens (--brand, --gold, --cream), component hierarchies (.hdr, .hero, .ahero, .sec, .wrap, .card, .fac, .tl, .val-grid, .ttable, .visit, .ftr), reference templates in template/ (about.html, accademic.html, addmissions.html, payment.html, sample.html), and Next.js 16 standards without deviating from project context.
---

# AUI Frontend Developer & UI/UX Design System Standard

This skill is the **mandatory reference and authoritative operating handbook** for all Frontend Development and UI/UX engineering on the **ASEAN University International (AUI)** portal.

Every component, page, layout, animation, and style modification **MUST strictly conform** to the established design system tokens, typography rules, component patterns, and existing templates documented below. **Do NOT deviate from this context or introduce foreign design languages.**

---

## 1. Core Design Tokens & Visual Hierarchy

All styling is governed by Vanilla CSS variables defined in [globals.css](file:///Users/kerasakti/Documents/AUI/src/app/globals.css).

### A. Color Palette Tokens
| Variable | Hex / HSL | Usage Role |
| :--- | :--- | :--- |
| `--brand` | `#0A2E52` | Primary institutional deep navy blue. Used for hero underlay, section headers, primary brand buttons, active indicator cards. |
| `--brand-2` | `#12467A` | Accent lighter navy. Used for secondary cards, figure backdrops, hover states. |
| `--brand-3` | `#071E38` | Ultra-dark midnight navy. Used for utility top-bar, dark quote bands, stats bands, and footer background. |
| `--gold` | `#C9962E` | Primary academic prestige gold. Used for primary CTA buttons (`.btn-gold`), active borders, timeline dots, quote marks, badges. |
| `--gold-2` | `#AC7F22` | Deep gold for button hover states (`.btn-gold:hover`). |
| `--gold-soft` | `#F0DFB4` | Light soft champagne gold. Used for contrast text against dark backgrounds (`--brand` & `--brand-3`), italic headlines, stats numbers. |
| `--cream` | `#FBF8F1` | Warm academic parchment cream. Used for page body background, cards, header backdrop, subtle contrasts. |
| `--paper` | `#FFFFFF` | Crisp pure white. Used for card backgrounds, modal boxes, inputs, table body. |
| `--ink` | `#152232` | Charcoal dark ink. Primary high-contrast body reading text. |
| `--muted` | `#5C6B7D` | Slate grey muted text. Secondary descriptions, timestamps, subtitles, form labels. |
| `--line` | `rgba(10, 46, 82, .14)` | Primary structural border line. |
| `--line-soft` | `rgba(10, 46, 82, .08)` | Subtle border line for card grids, table dividers, list separators. |

### B. Typography Tokens
- **Serif Font**: `"Fraunces", Georgia, serif` (`--serif`)
  - Used for all major headlines (`h1`, `h2`, `h3`), section titles, quote bands, timeline year markers, price tags, and stats numbers.
  - Weights: `300`, `400` (regular), `600` (semi-bold), `700` (bold), italic styles (`em`, `cite`).
- **Sans-Serif Font**: `"Karla", Helvetica, sans-serif` (`--sans`)
  - Used for body text, navigation menus, labels, button text, table cells, form inputs, and utility notices.
  - Weights: `400`, `500`, `600`, `700` (bold buttons and badges).

### C. Container & Geometry Tokens
- `--maxw`: `1240px` (maximum content wrapper width).
- `--radius`: `6px` (standard component border radius).
- Overlap padding: `padding: 0 32px` on desktop, `padding: 0 20px` on mobile (`<= 760px`).

---

## 2. Strict Anti-Patterns & Hard Constraints

To maintain 100% design integrity, the following anti-patterns are **STRICTLY FORBIDDEN**:

1. ❌ **NO TailwindCSS or Foreign Utility Frameworks**:
   - Do NOT introduce Tailwind utility classes (e.g., `bg-blue-600`, `p-4`, `flex-col`, `text-center`).
   - Use the native, semantic BEM/hybrid CSS classes declared in `globals.css` (e.g., `.wrap`, `.sec`, `.card`, `.btn`, `.btn-gold`).
2. ❌ **NO Foreign Color Injections**:
   - Never use generic red, bright green, purple, neon teal, or standard bootstrap blue.
   - All colors must stem directly from `var(--brand)`, `var(--gold)`, `var(--cream)`, and `var(--ink)`.
3. ❌ **NO Placeholder Images**:
   - Never use `via.placeholder.com` or broken image URLs.
   - Use verified high-res assets in `public/img/` (or Unsplash curated university photography already integrated in the project).
4. ❌ **NO Cluttering the Hero Section**:
   - The hero background uses the randomized tile fade-out slideshow (`HeroSlideshow.tsx`).
   - Keep the hero text compact and focused: **Eyebrow + H1 + Lede + 2 CTA Buttons**.
   - Do NOT put side boxes, sub-navigation dots, or search forms inside the hero. The search form belongs in the **Header Navigation**.
5. ❌ **NO Ad-Hoc Fonts**:
   - Never use `Inter`, `Roboto`, `Arial`, or browser default serif fonts. Always inherit `--serif` or `--sans`.

---

## 3. Standard Component Library & Architecture

When developing pages or modifying existing ones, strictly reuse the following pre-built UI components:

### A. Layout Wrappers
```tsx
// 1. Standard Section Wrapper
<section className="sec" id="section-id">
  <div className="wrap">
    <div className="sec-head rv">
      <div className="eyebrow">0X — Section Tag</div>
      <h2>Section Main Title</h2>
      <p>Descriptive subtitle explaining the value proposition.</p>
    </div>
    {/* Section content */}
  </div>
</section>
```

### B. Eyebrow Tagging System
The golden uppercase eyebrow badge identifies section hierarchy:
```tsx
<div className="eyebrow">01 — Academic Faculties &amp; Programmes</div>
```
- Includes automatic left golden divider line via `::before`.
- For dark backgrounds (like `.ahero` or `.hero`), color is overridden with `color: var(--gold-soft)`.

### C. Standard Buttons (`.btn`)
```tsx
// Primary prestige gold button
<a href="#tuition" className="btn btn-gold">Apply now</a>

// Dark brand button
<a href="#programmes" className="btn btn-brand">Explore Programmes</a>

// Ghost transparent button (for hero & dark banners)
<a href="#anywhere" className="btn btn-ghost">Study From Anywhere</a>

// Outlined card button
<Link href="/about" className="btn btn-line">Learn More →</Link>

// Text gold arrow link
<Link href="/academic" className="link-gold">Explore all faculties →</Link>
```

### D. Header & Global Navigation (`Header.tsx`)
- **Sticky Blur Bar**: `background: rgba(251, 248, 241, .95); backdrop-filter: blur(10px);`
- **Logo**: `/img/logo.png` with height `54px`.
- **Navigation Links**: Home, About (`/about`), Admissions (`#tuition`), Academic (`/academic`), Payment Information (`#tuition`), Students (`#students`), Contact (`#contact`).
- **Header Actions**:
  1. Interactive Search Toggle Button (`.hdr-search-btn` with SVG search icon).
  2. Slide-down search dropdown (`.hdr-search-bar`) with search input, quick suggestion pills, and `Esc` key listener.
  3. Primary CTA button (`.btn.btn-gold`).
  4. Language selector (`.lang` displaying `EN / 中文`).
  5. Responsive mobile hamburger button (`.burger`).

### E. Footer Navigation (`Footer.tsx`)
- **Background**: Deep midnight navy `var(--brand-3)` (`#041224`).
- **Footer Logo**: **MUST** use `/img/logo-footer.png` or `/img/logo-white.png`.
  - Must preserve the **authentic colored crest emblem from the header** on the left, paired with pure white `#FFFFFF` text on the right.
- **Columns**:
  1. Brand bio + social icons (Facebook, LinkedIn, YouTube, Instagram).
  2. Programmes list with Next.js `Link` routes.
  3. Quick Links (About AUI `/about`, Admissions, Network, Scholarship, Study Anywhere, portal-aui).
  4. Contact Info (Email, Phone/WhatsApp, Portal, Bangi Selangor Malaysia Address).
  5. Bottom copyright line with legal links.

### F. Page Hero (`.ahero` for Subpages)
Used on `/about`, `/academic`, `/payment`, `/admissions`:
```tsx
<section className="ahero">
  <img className="ahero-img" src="/img/..." alt="..." />
  <div className="wrap">
    <div className="eyebrow">Subpage Eyebrow</div>
    <h1>Main Page Heading</h1>
    <div className="sub">Italic Secondary Heading</div>
    <p className="lede">Detailed introductory paragraph...</p>
    <div className="ahero-stats">
      <div className="s"><b><span data-count="3000">0</span>+</b><span>Students · 5+ Countries</span></div>
      <div className="s"><b><span data-count="5">0</span></b><span>Academic Faculties</span></div>
    </div>
  </div>
</section>
```

### G. Interactive Stats Band & Count-Up Animation
Always use `data-count="<targetNumber>"` and `data-sym` for live count-up numbers:
```tsx
<div className="sband rv">
  <div className="row">
    <b><span data-count="30000">0</span></b>
    <span className="sym" data-sym>+</span>
  </div>
  <span>students across the globe</span>
</div>
```
Always instantiate the `IntersectionObserver` inside `useEffect` to trigger smooth easing count-up when scrolled into view.

### H. Timeline Architecture (`.tl`)
For historical journeys and step-by-step accreditation paths:
- Central vertical golden line: `.tl::before`
- Alternating rows: `.tl-row.left` and `.tl-row.right`
- Center dot: `.tl-dot i` (turns enlarged gold on hover)
- Milestone highlight: `.tl-row.hl .tl-card` (deep navy card)
- Current year badge: `.tl-row.now .tl-card` (gold border)

### I. Tables & Tuition Cards (`.ttable`)
For tuition fees, academic calendars, curriculum schedules:
- Bordered table with soft lines `var(--line-soft)`.
- Header background `var(--brand)` with white text and Fraunces serif font.
- Highlighted price tags: `color: var(--brand); font-family: var(--serif); font-weight: 700;`.
- Scholarship pills: gold background `rgba(201, 150, 46, .1)` with uppercase gold text.

---

## 4. Template Reference Library (`template/`)

Whenever building a new page or sub-view, check the existing pure HTML reference templates in `template/`:

1. [template/about.html](file:///Users/kerasakti/Documents/AUI/template/about.html):
   - Reference for: Timeline (`.tl`), Mission/Vision cards (`.mv-card`), Core values (`.vcard`), Leadership profiles (`.lead`), Faculty showcase (`.fac-grid`), Campus life mosaic (`.life-mosaic`), Partner logo grid (`.partners`), and Call to Action (`.visit`).
2. [template/accademic.html](file:///Users/kerasakti/Documents/AUI/template/accademic.html):
   - Reference for: Programme detail view, curriculum tabs, entry requirements, faculty staff breakdown, programme tuition cards, and FAQ accordion (`details.faq`).
3. [template/payment.html](file:///Users/kerasakti/Documents/AUI/template/payment.html):
   - Reference for: Tuition breakdown tables, instalment plans, international bank transfer details, Stripe/gateway procedures, and payment refund policies.
4. [template/addmissions.html](file:///Users/kerasakti/Documents/AUI/template/addmissions.html):
   - Reference for: Admissions criteria, scholarship qualification matrix, student application pipeline, and document checklist.
5. [template/sample.html](file:///Users/kerasakti/Documents/AUI/template/sample.html):
   - Reference for: Full homepage ecosystem, student portal quick-access card grid, research centers carousel, and partner network.

---

## 5. Next.js 16 Architectural Conventions

1. **Client vs. Server Components**:
   - Mark `'use client'` on components that require DOM state, interactive toggles, search inputs, or `IntersectionObserver` animations (`HomeView`, `AboutView`, `AcademicDetailView`, `HeroSlideshow`, `Header`, `Footer`).
2. **Next.js Link Routing**:
   - Use Next.js `<Link href="...">` for all internal routing (`/`, `/about`, `/academic`, `/payment`).
   - Use `<a href="#...">` for in-page smooth anchor scrolling.
3. **Hydration Safety**:
   - Always include `suppressHydrationWarning` on search inputs and forms where browser extensions or autofill might inject attributes.
4. **Clean Production Builds**:
   - Validate any code change with `npm run build` before finishing. Ensure zero TypeScript or Turbopack compilation errors.

---

## 6. Frontend Developer & UI/UX Checklist

Before concluding any UI task in AUI, verify:
- [ ] **Colors**: Used only `--brand`, `--gold`, `--cream`, `--paper`, `--ink`, `--muted`.
- [ ] **Typography**: Headings use `Fraunces` serif, body/controls use `Karla` sans.
- [ ] **Buttons**: Reused standard `.btn.btn-gold`, `.btn-brand`, `.btn-ghost`, or `.btn-line`.
- [ ] **Hero Cleanliness**: No clutter, side boxes, or search form inside the hero.
- [ ] **Header Search**: Global search button in `.hdr-cta` operates properly with dropdown and quick keywords.
- [ ] **Footer Logo**: Uses authentic colored emblem from header with crisp white text.
- [ ] **Mobile Responsiveness**: Checked layout on mobile breakpoint `<= 760px` (single column grids, padded wrappers, mobile menu drawer).
- [ ] **Zero Redundancy**: Subpages do not duplicate redundant contact cards before the footer.
- [ ] **Build Verification**: `npm run build` passes with code `0`.
