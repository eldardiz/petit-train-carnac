# Progress Log

## Session: April 11, 2026
### Done
- Repo cloned, npm install confirmed, dev server running
- Memory system created (CLAUDE.md, AGENTS.md, docs/)

### Done (continued)
- figma-to-react plugin installed and configured
- playwright + oxlint added as dev dependencies
- styles/figma-tokens.css created (base tokens: primary purple, bg, text colors)
- app/globals.css updated to import figma-tokens.css before Tailwind
- components/sections/Hero.tsx generated from Figma node 8:783 (1440×1165 px frame)
  - Announcement banner, Navbar, main hero split, info card overlay, Online Booking banner
  - 0 oxlint errors, zero inline styles, mobile-first (flex-col → lg:flex-row)
  - Diagonal split reproduced with [clip-path:polygon(0_0,100%_0,0_100%)] Tailwind class

### Pending manual steps
- [ ] Export image assets from Figma → public/figma-assets/ (see list below)
- [ ] Verify Hero renders correctly in dev server — awaiting approval before commit

### Image assets needed in public/figma-assets/
| Filename | Purpose |
|---|---|
| logo.svg | Site logo in navbar |
| icon-train.svg | Section label ornament icon |
| icon-ticket.svg | CTA button ticket icon |
| hero-image.jpg | Right-panel hero photograph |
| google-icon.svg | Google "G" logo in rating block |
| stars.svg | 5-star rating graphic |
| languages-flags.png | Language flags thumbnail in info card |

### Done (continued)
- components/sections/Souvenirs.tsx rebuilt from Figma node 49:2977 (1440×1045 px frame)
  - Purple bg (#5a4a6e), section label + train icon placeholder top-left
  - Mouse trail fixed: replaced hand-rolled impl with fancycomponents.dev ImageTrail
    (useAnimate + querySelectorAll, lerp smoothing, proper display:block reveal)
  - 5 polaroid cards (342×289 px image + cream bg + thick bottom border), each slightly rotated
  - Placeholder images from picsum; src props already named /figma-assets/souvenir-N.jpg
  - lib/utils.ts created with cn() (clsx + tailwind-merge)
  - 0 TypeScript errors, clean production build
- app/page.tsx: Souvenirs imported below Hero

### Done (continued)
- components/sections/GroupBookingCTA.tsx generated from Figma node 1:13740 (1440×367 px frame)
  - Full-bleed background photo (group-booking-bg.jpg) with 50% black overlay
  - Two-column layout: left = section label (italic Libre Baskerville) + large heading; right = body text + CTA button
  - Light cream CTA button (#f7f7f0) with dark text, ring/shadow matching project button style
  - Assets downloaded from Figma MCP: group-booking-bg.jpg, icon-train-white.svg, icon-link.svg
  - Mobile-first (flex-col → lg:flex-row), 0 TypeScript errors, 0 inline styles

### Done (April 12, 2026 — all homepage sections)
- components/sections/Footer.tsx ✅ node 33:832 — purple bg, CTA + 3-col links + social icons
- components/sections/Features.tsx ✅ node 1:13279 — 4 feature cards + large photo, cream bg
- components/sections/PracticalInfo.tsx ✅ node 49:2694 — 4 photo cards + 2 wide cards grid
- components/sections/Prices.tsx ✅ node 1:13387 — 2 pricing cards (individual + group)
- components/sections/Reviews.tsx ✅ node 1:13645 — masonry grid of 6 real reviews + gallery
- components/sections/FAQ.tsx ✅ node 1:13767 — interactive accordion, 7 Q&A, "use client"
- components/sections/OurLocation.tsx ✅ node 1:13453 — photo + 3 access feature items
- components/sections/RoutesTimeline.tsx ✅ node 1:13507 — 3 stops zigzag timeline
- components/sections/Locations.tsx ✅ node 49:2226 — 2 location cards (Vannes + Quiberon)
- app/page.tsx updated with all 12 sections in visual order
- Final npx tsc --noEmit: 0 errors

### Done (April 12, 2026 — UI Polish & Animation Pass)
- components/layout/Navbar.tsx ✅ — extracted from Hero, sticky with scroll shadow (navbar-scrolled), nav-link hover underlines, btn-primary/btn-secondary on CTA buttons
- components/ui/ScrollReveal.tsx ✅ — IntersectionObserver reveal component with up/left/right direction + delay support
- app/layout.tsx ✅ — Navbar imported and rendered above page content (persists across all routes)
- components/sections/Hero.tsx ✅ — banner + navbar removed (now in layout), btn-primary/btn-secondary on hero CTAs, px-[5%] container
- components/sections/Reviews.tsx ✅ — rebuilt with 3 infinite-scroll CSS columns (reviews-track-down/up), mask-image fade, card-hover, responsive (1→2→3 cols)
- components/sections/FAQ.tsx ✅ — grid-cols-[35%_1fr] layout, single-open accordion with faq-answer-wrap CSS grid trick, btn-primary CTA, ScrollReveal stagger 50ms
- components/sections/RoutesTimeline.tsx ✅ — timeline-line CSS added, connector dots restyled, btn-primary/btn-secondary on stop CTAs, ScrollReveal alternating left/right, px-[5%] container
- components/sections/Features.tsx ✅ — px-[5%] container, card-hover on feature cards, ScrollReveal stagger 70ms
- components/sections/PracticalInfo.tsx ✅ — px-[5%] container, ScrollReveal on all cards with stagger, btn-primary on Discover More
- components/sections/Prices.tsx ✅ — px-[5%] container, ScrollReveal left/right on pricing cards
- components/sections/OurLocation.tsx ✅ — px-[5%] container, ScrollReveal stagger 70ms on location items, rotate-[8.21deg] Tailwind instead of inline style
- components/sections/Locations.tsx ✅ — px-[5%] container, card-hover on location cards, btn-primary on CTAs
- components/sections/Footer.tsx ✅ — px-[5%] on all 3 wrapper divs, footer-link on nav links, social-icon on social icons, btn-primary/btn-secondary on CTAs
- components/sections/GroupBookingCTA.tsx ✅ — max-w-[1280px] px-[5%] container, btn-primary on CTA
- Final npx tsc --noEmit: 0 errors

### Next Steps
- [ ] Export real image assets from Figma → public/figma-assets/
- [ ] Build inner pages (Informations, Prices, Routes, Careers, Book, Privatization, FAQs)

### Done (April 12, 2026 — Homepage QA Pass)
- Section order corrected per Figma y-positions: Hero → Souvenirs → Features → PracticalInfo → Prices → OurLocation → RoutesTimeline → Reviews → GroupBookingCTA → Locations → FAQ → Footer
- Global padding standardized: all `px-[5%]` → `px-5 xl:px-0` across all section containers and Navbar
- Navbar: "The Route" dropdown removed (now plain Link); hamburger menu added for mobile with animated lines and slide-down drawer
- Features: rebuilt as 2×2 feature grid (left) + tall image flush to right viewport edge (full-width two-column flex)
- Souvenirs: real images swapped in (souvenir-1..5.jpg); section hidden on mobile (`hidden md:block`)
- OurLocation: decorative purple band removed; mobile layout = content top, image bottom (`flex-col-reverse lg:flex-row`)
- RoutesTimeline: scroll fill animation via IntersectionObserver + clip-path reveal on `.timeline-line`; images hidden on mobile; content offset left to clear left-side timeline line
- Reviews: "4.7 on Google" now an `<a>` link to Google Maps
- Locations: heading uses `max-w-[570px] [text-wrap:balance]`; padding standardized
- Footer: background image scoped to CTA block only; footer body is solid purple `bg-[#58496c]`
- FAQ: accordion transition updated to `0.3s ease`
- npx tsc --noEmit: 0 errors

### Next Steps
- [ ] Build inner pages starting with Informations (node 1:13939)
- [ ] Verify Locations section icon with Figma (icon-link.svg vs correct icon)

## QA Pass 2 + Figma Audit (Apr 12, 2026)
- Removed `card-hover` lift animation from Features, Reviews, Locations cards
- Fixed PracticalInfo: single-column mobile grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)
- Fixed PracticalInfo heading: `w-[575px]` → `max-w-[575px] w-full` for responsive width
- Fixed Souvenirs section label: gray placeholder → `icon-train-white.svg` (matching all other sections)
- Downloaded 15 real images from Figma design to `public/figma-assets/`
- Swapped all 15 picsum placeholder URLs with real `/figma-assets/` paths across 7 section files
- Removed `unoptimized` prop from all swapped `<Image>` components
- TypeScript check: 0 errors
