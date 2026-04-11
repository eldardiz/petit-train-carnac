# Petit Train Carnac — Project Brain

## Stack

- Next.js 16.2.3 App Router, TypeScript, Tailwind CSS v4
- Deployed on Vercel via GitHub push (branch: main)
- Figma Professional plan + Figma MCP server (local desktop plugin)
- Plugin: gbasin/figma-to-react for generation + visual validation

## Installed Libraries (exact import paths)

```
motion@12.38.0        → import { useAnimate } from 'motion/react'
                        import type { DOMKeyframesDefinition, AnimationOptions } from 'motion'
clsx@2.1.1            → import { type ClassValue, clsx } from 'clsx'
tailwind-merge@3.5.0  → import { twMerge } from 'tailwind-merge'
oxlint@1.16.0         → npx oxlint --fix <file>
playwright@1.59.1     → dev dependency, chromium installed
```

## File Structure (established — do not reorganise)

```
app/
  globals.css           ← @import "../styles/figma-tokens.css" THEN @import "tailwindcss"
  page.tsx              ← imports sections only, no logic/styles
components/
  fancy/image/
    image-trail.tsx     ← fancycomponents.dev ImageTrail (DO NOT rewrite)
  sections/             ← one file per Figma section
    Hero.tsx            ✅ node 8:783
    Souvenirs.tsx       ✅ node 49:2977
    GroupBookingCTA.tsx ✅ node 1:13740
lib/
  utils.ts              ← cn() helper: twMerge(clsx(inputs))
styles/
  figma-tokens.css      ← CSS vars: --color-primary, --color-bg, --color-bg-dark,
                           --color-text, --color-text-muted
public/figma-assets/    ← all images/SVGs served here; URL prefix: /figma-assets/
```

## Architecture Rules

- app/ → page composition only, zero styling logic
- components/ui/ → reusable primitives (Button, Card, Badge, SectionTitle, Container) — not yet built
- components/sections/ → one component per Figma frame
- components/fancy/ → third-party animation components (keep as-is)
- lib/ → utility functions only
- styles/ → global CSS and design tokens

## Figma-to-Code Workflow (figma-to-react skill)

1. Run `$SKILL_DIR/scripts/status.sh` to find current step
2. Arm hook: `rm -rf /tmp/figma-to-react && mkdir -p /tmp/figma-to-react/captures && touch /tmp/figma-to-react/capture-active`
3. Write config.json to `/tmp/figma-to-react/config.json` with componentDir, assetDir, screens, screenNames
4. Spawn sub-agent with fileKey `wTd0GeN1Y2HWGw3nkii3t8` + nodeId, componentName, componentPath
5. Sub-agent calls `mcp__plugin_figma_figma__get_metadata` then `mcp__plugin_figma_figma__get_design_context`
6. Sub-agent writes the .tsx file, runs `npx tsc --noEmit`
7. Parent verifies file, updates progress.md, done

Figma file key: `wTd0GeN1Y2HWGw3nkii3t8`

## Section Build Order (remaining)

| #   | Section               | Node ID | Status  |
| --- | --------------------- | ------- | ------- |
| 1   | Group Booking CTA     | 1:13740 | ✅ done |
| 2   | Footer                | 33:832  | pending |
| 3   | Features              | 1:13279 | pending |
| 4   | Practical Information | 49:2694 | pending |
| 5   | Prices                | 1:13387 | pending |
| 6   | Reviews               | 1:13645 | pending |
| 7   | FAQ                   | 1:13767 | pending |
| 8   | Our Location          | 1:13453 | pending |
| 9   | Routes Timeline       | 1:13507 | pending |
| 10  | Locations             | 49:2226 | pending |

## Page Build Order (remaining)

| #   | Page               | Node ID | Route                      | Status  |
| --- | ------------------ | ------- | -------------------------- | ------- |
| 1   | Informations       | 1:13939 | app/informations/page.tsx  | pending |
| 2   | Prices and Tickets | 1:17365 | app/prices/page.tsx        | pending |
| 3   | Routes             | 1:23354 | app/routes/page.tsx        | pending |
| 4   | Careers            | 1:23842 | app/careers/page.tsx       | pending |
| 5   | Book               | 1:24145 | app/book/page.tsx          | pending |
| 6   | Privatization      | 1:17070 | app/privatization/page.tsx | pending |
| 7   | FAQs               | 1:20537 | app/faqs/page.tsx          | pending |

...

## Component Patterns That Work

### Section skeleton

```tsx
"use client"; // only if using hooks or browser APIs

import Image from "next/image";
import Link from "next/link";

export default function SectionName() {
  return <section className="...">...</section>;
}
```

### cn() utility (always use for conditional classes)

```tsx
import { cn } from "@/lib/utils";
// Usage: cn('base-class', condition && 'conditional-class', className)
```

### ImageTrail (mouse cursor trail effect)

```tsx
import ImageTrail, {
  ImageTrailItem,
} from "@/components/fancy/image/image-trail";

// CRITICAL: container must have explicit height — min-h-screen or a fixed height.
// h-full collapses to 0 inside a min-h-screen parent → onMouseMove never fires.
<ImageTrail
  threshold={80}
  intensity={0.3}
  repeatChildren={2}
  keyframes={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
  keyframesOptions={{ duration: 1.5, times: [0, 0.05, 0.85, 1] }}
  className="min-h-screen" // ← must be explicit, not h-full
>
  {items.map((item, i) => (
    <ImageTrailItem key={i} className="rotate-2">
      {" "}
      // slight rotation per card
      {/* content */}
    </ImageTrailItem>
  ))}
</ImageTrail>;
```

### Background image with overlay

```tsx
<section className="relative overflow-hidden">
  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
    <Image src="/figma-assets/photo.jpg" alt="" fill className="object-cover" />
    <div className="absolute inset-0 bg-black/50" />
  </div>
  <div className="relative z-10 ...">{/* content */}</div>
</section>
```

### Section label (repeating pattern across all sections)

```tsx
<div className="flex items-center gap-2">
  <div className="relative shrink-0 w-[19px] h-[19px]">
    <Image
      src="/figma-assets/icon-train.svg"
      alt=""
      fill
      className="object-contain"
      aria-hidden="true"
    />
  </div>
  <p className="font-['Libre_Baskerville',serif] italic text-white text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
    Section Title
  </p>
</div>
```

### Typography classes (from Figma)

- Large headings: `font-['Libre_Baskerville',serif] text-[48px] leading-[1.15] tracking-[-3.36px]`
- Section labels: `font-['Libre_Baskerville',serif] italic text-base tracking-[-0.48px]`
- Body text: `font-['Inter',sans-serif] text-[18px] leading-[1.2] tracking-[-0.54px]`
- Button text: `font-['Roboto',sans-serif] text-base font-medium tracking-[-0.64px]`

### CTA button (cream style)

```tsx
<Link
  href="#"
  className="inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
>
  Button label
</Link>
```

## Asset Conventions

- All assets go in `public/figma-assets/`
- Placeholder images: `https://picsum.photos/seed/[name]/[w]/[h]` (unoptimized)
- Placeholder src prop names must match future real asset: `/figma-assets/souvenir-1.jpg`
- SVG icons: use Next.js `<Image fill className="object-contain">` inside a sized div
- Never use `<img>` tags — always `next/image`

## Known Pitfalls

1. **h-full collapses to 0** inside a `min-h-screen` parent → mouse events never fire.
   Fix: use `min-h-screen` (or explicit px height) on the interactive container itself.

2. **pointer-events on overlay divs** — always add `pointer-events-none` to absolute
   overlay/decorative divs that sit above content, or they'll block mouse interaction.

3. **ImageTrailItem positioning** — items start `hidden` (display:none). The component
   uses `querySelectorAll('.image-trail-item')` + motion's `animate()` to reveal them.
   Do NOT add `display:block` or override visibility manually.

4. **next/image with `fill`** — parent div must have `position: relative` and explicit
   width + height (or use `relative overflow-hidden w-[Xpx] h-[Xpx]`).

5. **Tailwind v4** — no `tailwind.config.js`; configuration is in CSS via `@theme`.
   Arbitrary values still work: `bg-[#5a4a6e]`, `text-[48px]`, etc.

6. **`use client` directive** — required for any component using hooks (useState,
   useEffect, useAnimate, event handlers). Omit it for pure presentational components.

## Design Tokens (styles/figma-tokens.css)

```css
--color-primary: #5a4a6e (Souvenirs purple bg) --color-bg: #f7f7f0
  (cream — buttons, polaroid cards) --color-bg-dark: #3f3053
  --color-text: #181d27 --color-text-muted: #535862;
```

## Git Rules

- Working branch: main (direct commits approved)
- One commit per completed and reviewed section; commit message: `feat: add [name] section`
- Never auto-commit or auto-push without explicit approval
- Stage specific files only — never `git add -A` (would catch .claude/, Desktop/)

## Token Efficiency Rules

- Always read this file before starting
- Inspect only files relevant to the current task
- Never scan the full codebase unless explicitly asked for an audit
- After each session: update docs/progress.md

**Routing convention:** Each page lives at `app/[route]/page.tsx`.
Shared layout (Navbar + Footer) goes in `app/layout.tsx`.
Page components import section components from `components/sections/`.
