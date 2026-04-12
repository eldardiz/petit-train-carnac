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

## Missing Image Assets

All of these are referenced in components but don't exist in `public/figma-assets/`. They show broken image icons. Export from Figma before final review.

| Path | Used in | Figma source |
|---|---|---|
| `/figma-assets/souvenir-1.jpg` | Souvenirs.tsx | Polaroid card 1 |
| `/figma-assets/souvenir-2.jpg` | Souvenirs.tsx | Polaroid card 2 |
| `/figma-assets/souvenir-3.jpg` | Souvenirs.tsx | Polaroid card 3 |
| `/figma-assets/souvenir-4.jpg` | Souvenirs.tsx | Polaroid card 4 |
| `/figma-assets/souvenir-5.jpg` | Souvenirs.tsx | Polaroid card 5 |
| `/figma-assets/icon-train-seat.svg` | Features.tsx | Feature icon 1 |
| `/figma-assets/icon-audio-guide.svg` | Features.tsx | Feature icon 2 |
| `/figma-assets/icon-landmark.svg` | Features.tsx | Feature icon 3 |
| `/figma-assets/icon-family.svg` | Features.tsx | Feature icon 4 |
| `/figma-assets/icon-facebook.svg` | Footer.tsx | Social icon |
| `/figma-assets/icon-twitter.svg` | Footer.tsx | Social icon |
| `/figma-assets/icon-instagram.svg` | Footer.tsx | Social icon |
| `/figma-assets/icon-linkedin.svg` | Footer.tsx | Social icon |
| `/figma-assets/icon-email.svg` | Footer.tsx | Contact icon |
| `/figma-assets/icon-phone.svg` | Footer.tsx | Contact icon |
| `/figma-assets/icon-ticket-white.svg` | Locations.tsx, RoutesTimeline.tsx | White ticket icon |
| `/figma-assets/icon-map-pin.svg` | OurLocation.tsx | Access icon 1 |
| `/figma-assets/icon-car.svg` | OurLocation.tsx | Access icon 2 |
| `/figma-assets/icon-train-sm.svg` | OurLocation.tsx | Access icon 3 |
| `/figma-assets/train-illustration.png` | PracticalInfo.tsx | Decorative illustration |
| `/figma-assets/icon-info.svg` | Prices.tsx | Info icon (dark) |
| `/figma-assets/icon-group.svg` | Prices.tsx | Group icon |
| `/figma-assets/icon-info-white.svg` | Prices.tsx | Info icon (white) |

Already present (no action needed):
`google-icon.svg`, `group-booking-bg.jpg`, `hero-image.jpg`, `icon-link.svg`,
`icon-ticket.svg`, `icon-train-white.svg`, `icon-train.svg`, `languages-flags.png`,
`logo.svg`, `stars.svg`

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
