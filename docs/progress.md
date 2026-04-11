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

### Next Steps
- [ ] Approve Hero.tsx + Souvenirs.tsx + GroupBookingCTA.tsx and commit
- [ ] Build Navbar as standalone components/sections/Navbar.tsx
- [ ] Build Pricing section
- [ ] Build FAQ section
- [ ] Build Footer
- [ ] Compose final app/page.tsx
