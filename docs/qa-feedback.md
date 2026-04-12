# Homepage QA Feedback — Petit Train de Carnac

> Generated: 2026-04-12 | Source: Visual QA review by Eldar

---

## DESKTOP

- [x] **Global padding** — Replaced `px-[5%]` with `px-5 xl:px-0` across all section containers
- [x] **Navbar — Routes link** — "The Route" is now a regular Link (dropdown SVG removed)
- [ ] **PracticalInfo — Typo fix** — "2 hours**before**" typo not found in current code; text in Hero.tsx (line 202) already has correct spacing. Skipped — may be stale QA item.
- [x] **Features section — Layout wrong** — Rebuilt as 2×2 grid left + tall image flush right edge (full-width two-column flex, image fills flex-1 right column)
- [x] **Section order wrong** — Reordered `app/page.tsx` per Figma y-positions: Hero → Souvenirs → Features → PracticalInfo → Prices → OurLocation → RoutesTimeline → Reviews → GroupBookingCTA → Locations → FAQ → Footer
- [x] **Locations — Heading overflow on mobile** — Added `max-w-[570px] [text-wrap:balance]` to heading; changed `px-[5%]` → `px-5 xl:px-0`
- [x] **Reviews — Google hyperlink** — "4.7 on Google" is now an `<a>` link to Google Maps search
- [x] **OurLocation — Remove purple element** — Decorative rotated band div removed
- [x] **RoutesTimeline — Scroll fill animation** — IntersectionObserver triggers `clip-path` reveal animation (opacity 0→100 top-to-bottom) when section enters viewport
- [ ] **Locations — Wrong icon** — Needs Figma verification of which icon should appear on right side of card headings (`icon-link.svg` currently). Skipped pending Figma check.
- [x] **Footer — Wrong design** — Background image scoped to CTA block only (uses `hero-image.jpg`); footer body is solid `bg-[#58496c]` purple
- [x] **FAQ — Accordion animation** — Transition updated to `0.3s ease` in globals.css

---

## MOBILE

- [x] **Navbar — Hamburger menu** — Hamburger button added with animated lines; mobile drawer slides down with all nav links + CTA buttons
- [x] **Souvenirs — Hide on mobile** — Section now `hidden md:block`
- [x] **OurLocation — Mobile layout** — `flex-col-reverse lg:flex-row`: content on top, image on bottom on mobile
- [x] **RoutesTimeline — Mobile layout** — Images hidden on mobile (`hidden lg:block`); content has `pl-10` left offset to clear timeline line at `left: 16px`

---

## Image swaps completed

- [x] Souvenirs: all 5 images swapped from picsum → `/figma-assets/souvenir-{1-5}.jpg`

---

## Notes for Claude

- Features grid: 2 columns of features left + 1 tall image right, flush to section edge
- Section order: read Figma page node for canonical order, reorder `app/page.tsx`
- Timeline scroll fill: use IntersectionObserver or scroll-driven animation on `.timeline-line`
- Never run Playwright — Eldar reviews in browser directly
