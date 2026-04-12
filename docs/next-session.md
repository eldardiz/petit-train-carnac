# Next Session Instructions — Inner Pages Build

## Current Git State

Last commit: `c1d0025` — "feat: UI polish pass — animations, hover effects, navbar extraction, container fixes"
Branch: main, pushed to origin.
No uncommitted changes.

---

## Homepage Section Status

| Section | File | State | Notes |
|---|---|---|---|
| Hero | Hero.tsx | ✅ done | Navbar extracted; btn-primary/secondary on CTAs; px-[5%] |
| Souvenirs | Souvenirs.tsx | ✅ done | ImageTrail working; picsum placeholders |
| Features | Features.tsx | ✅ done | card-hover; ScrollReveal stagger 70ms; px-[5%] |
| GroupBookingCTA | GroupBookingCTA.tsx | ✅ done | btn-primary; max-w-[1280px] px-[5%] |
| PracticalInfo | PracticalInfo.tsx | ✅ done | ScrollReveal stagger; btn-primary; px-[5%] |
| Prices | Prices.tsx | ✅ done | ScrollReveal left/right; px-[5%] |
| Reviews | Reviews.tsx | ✅ done | 3 infinite-scroll columns; mask-image fade; card-hover |
| FAQ | FAQ.tsx | ✅ done | CSS grid layout; single-open accordion; faq-answer-wrap |
| OurLocation | OurLocation.tsx | ✅ done | ScrollReveal stagger; rotate-[8.21deg]; px-[5%] |
| RoutesTimeline | RoutesTimeline.tsx | ✅ done | timeline-line; btn-primary/secondary; ScrollReveal left/right |
| Locations | Locations.tsx | ✅ done | card-hover; btn-primary; px-[5%] |
| Footer | Footer.tsx | ✅ done | footer-link; social-icon; btn-primary/secondary; px-[5%] |
| Navbar | components/layout/Navbar.tsx | ✅ done | sticky; scroll shadow; nav-link; client component |

---

## Known Issues (do not fix unless explicitly asked)

### 1. Navbar — no mobile menu
No hamburger button or mobile drawer exists. On screens < lg the nav links are `hidden` with no toggle. The mobile banner is visible but the nav is inaccessible.
- Fix needed: hamburger icon button + state-controlled mobile drawer (slide down or overlay)
- Files: `components/layout/Navbar.tsx`

### 2. Hero diagonal clip-path on mobile
`clip-path: polygon(0 0, 100% 0, 0 100%)` diagonal split looks wrong at < 768px because the two columns stack. The clip-path still applies to the left column background.
- Fix needed: remove or swap clip-path on mobile (`lg:` breakpoint guard)
- File: `components/sections/Hero.tsx`

### 3. Responsive text overflow — Locations.tsx
Location card content text (description) is full width but the card is `h-[550px]` fixed. On medium screens the text overflows the bottom edge of the card.
- Fix: add `line-clamp-4` to the description `<p>` tag
- File: `components/sections/Locations.tsx` line ~103

### 4. Reviews column height on narrow screens
Middle column is `hidden md:block` and third column is `hidden lg:block`. On mobile only one column shows. The `h-[560px]` container height was sized for 3 columns of content — on mobile it may feel short.
- Watch when testing on real device; adjust container height if needed.

---

## Image Assets

All homepage assets downloaded via Figma REST API on 2026-04-12. ✅

**⚠ Visual check needed:**
- `icon-info.svg` and `icon-info-white.svg` — same file size (1885 bytes); may be identical. Verify in browser that the white variant actually renders white on the dark Prices card.
- `icon-ticket-white.svg` — same file size as `icon-train-white.svg` (9142 bytes); verify it looks like a ticket icon, not a train icon.

All 33 files now in `public/figma-assets/`. Inner page assets will be downloaded per-session as each page is built.

---

## Inner Pages Build Order

Build one page per session. Each page gets its own `app/[route]/page.tsx`. Navbar + Footer are already in `app/layout.tsx` — do not re-add them.

| # | Page | Node ID | Route | Priority |
|---|---|---|---|---|
| 1 | Informations | 1:13939 | app/informations/page.tsx | HIGH — linked from Navbar |
| 2 | Prices and Tickets | 1:17365 | app/prices/page.tsx | HIGH — linked from Navbar + Footer CTAs |
| 3 | Routes | 1:23354 | app/routes/page.tsx | HIGH — linked from Navbar |
| 4 | FAQs | 1:20537 | app/faqs/page.tsx | MEDIUM — linked from Footer |
| 5 | Book | 1:24145 | app/book/page.tsx | MEDIUM — CTA target for all booking buttons |
| 6 | Privatization | 1:17070 | app/privatization/page.tsx | LOW |
| 7 | Careers | 1:23842 | app/careers/page.tsx | LOW |

---

## First Task for Next Session

**Build `app/informations/page.tsx` from Figma node `1:13939`.**

1. Arm figma-to-react hook (see CLAUDE.md workflow)
2. Fetch Figma design context for node `1:13939` (file key: `wTd0GeN1Y2HWGw3nkii3t8`)
3. Identify all section frames within the page — build each as a separate component in `components/sections/` following naming convention
4. Create `app/informations/page.tsx` that imports those sections (no Navbar/Footer — already in layout)
5. Run `npx tsc --noEmit` — 0 errors
6. Update `docs/progress.md`
7. Ask for commit approval

Do not batch with other pages. One page = one session = one commit.
# Homepage QA Feedback — Petit Train de Carnac
> Generated: 2026-04-12 | Source: Visual QA review by Eldar

---

## DESKTOP

- [ ] **Global padding** — Remove the 5% global padding on all sections to make them all even
- [ ] **Navbar — Routes link** — The Route link should be a regular link, not a dropdown menu
- [ ] **PracticalInfo — Typo fix** — Missing space: "2 hours**before**" → "2 hours **before**"
- [ ] **Features section — Layout wrong** — Grid needs to be 2x2 not 1x4. Image flush to right edge with no padding (`components/sections/Features.tsx`)
- [ ] **Section order wrong** — Souvenirs needs to be BELOW the "Online Booking" note. Check Figma for canonical section order, reorder `app/page.tsx`
- [ ] **Locations — Heading overflow on mobile** — Heading getting cut off on left side. Add `text-wrap: balance` and proper responsive padding (`components/sections/Locations.tsx`)
- [ ] **Reviews — Google hyperlink** — "4.7 on Google" link needs to point to the Google Business Profile URL
- [ ] **OurLocation — Remove purple element** — Unknown purple element on the left side of the section image (`components/sections/OurLocation.tsx`)
- [ ] **RoutesTimeline — Scroll fill animation** — Timeline line fills from opacity 20 → 100 as user scrolls through section
- [ ] **Locations — Wrong icon** — Wrong icon on right side of section heading. Check Figma for correct icon
- [ ] **Footer — Wrong design** — Footer CTA needs background image. Footer background must be purple (`components/sections/Footer.tsx`)
- [ ] **FAQ — Accordion animation** — Open/close needs `0.3s ease` transition (`components/sections/FAQ.tsx`)

---

## MOBILE

- [ ] **Navbar — Hamburger menu** — Add hamburger menu with all nav links (`components/layout/Navbar.tsx`)
- [ ] **Souvenirs — Hide on mobile** — Hide Souvenirs section on mobile screens (`components/sections/Souvenirs.tsx`)
- [ ] **OurLocation — Mobile layout** — Image on bottom, content on top on mobile (`components/sections/OurLocation.tsx`)
- [ ] **RoutesTimeline — Mobile layout** — Line on left side, content on right side on mobile (`components/sections/RoutesTimeline.tsx`)

---

## Notes for Claude
- Features grid: 2 columns of features left + 1 tall image right, flush to section edge
- Section order: read Figma page node for canonical order, reorder `app/page.tsx`
- Timeline scroll fill: use IntersectionObserver or scroll-driven animation on `.timeline-line`
- Never run Playwright — Eldar reviews in browser directly