# Next Session Instructions — UI Polish & Animation Pass

## Git State (as of session close)

Last committed: `04981ff` — "docs: update CLAUDE.md with full project brain"
Previous: `45160a3` — "feat: complete homepage sections" (all 12 sections)

**Uncommitted changes:**
- `app/globals.css` — modified (full animation CSS written, not yet committed)
- `docs/next-session.md` — this file (new, not committed)

Commit both at the start of tomorrow's session before doing anything else:
```bash
git add app/globals.css docs/next-session.md
git commit -m "chore: add animation CSS foundation and next-session plan"
```

---

## Known Visual Bugs / Things That Felt Off

1. **Reviews layout is broken-looking** — currently static `columns-3` masonry.
   Cards are different heights and the layout feels uneven. Full rebuild needed (Task 1).

2. **FAQ two-column layout is wrong** — uses `flex flex-wrap` with a hardcoded
   `w-[623px]` left panel. On anything under ~1300px wide the columns collapse
   awkwardly. The accordion also allows multiple items open simultaneously which
   feels janky. Full fix needed (Task 2).

3. **RoutesTimeline has no visible vertical line** — the connecting thread between
   stops is just tiny `w-[3px]` divs that disappear visually. The `.timeline-line`
   CSS class in globals.css will fix this but isn't applied yet (Task 3).

4. **Zero hover effects anywhere** — all buttons, cards, links, and icons are static.
   The CSS is written but no component has the classes applied yet (Tasks 5–6).

5. **Navbar has no scroll shadow** — it's a static server component embedded inside
   Hero.tsx. It needs to be extracted and made a client component to get the
   blur+shadow on scroll (Task 4).

6. **All sections have inconsistent padding** — most use `px-8` (32px fixed) instead
   of the intended `px-[5%]` responsive padding (Task 5).

7. **No scroll-in animations anywhere** — the `ScrollReveal` component doesn't exist
   yet. Everything pops in instantly (Task 7).

8. **StopNumber component in RoutesTimeline always renders stop 1 as "active"** —
   `active={i === 0}` is hardcoded. This is intentional for now (static display)
   but worth revisiting if the timeline becomes interactive.

---

## Context

All 12 homepage sections are built and committed. `app/globals.css` already contains
the full animation/hover CSS system (scroll-reveal, btn-primary/secondary, card-hover,
social-icon, footer-link, nav-link, reviews infinite scroll, FAQ accordion,
timeline-line). Nothing is visually different yet because the CSS classes are defined
but not applied to any component files.

**Your job: wire the CSS to the components.**

---

## Task List (in priority order)

### 1. Rebuild Reviews.tsx — infinite-scroll columns

File: `components/sections/Reviews.tsx`

Replace the static `columns-3` masonry with 3 CSS infinite-scroll columns:

- 3 columns on desktop → 2 on tablet → 1 on mobile
- Each column is a vertically scrolling track using `reviews-track-down` or
  `reviews-track-up` (already defined in globals.css)
- Duplicate the card list inside each track so the loop is seamless (content + clone)
- Add `reviews-container` class to the wrapper so hover-pause works
- Add `mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)`
  to the container for top/bottom fade
- Each column should have a different `animation-duration` (e.g. 28s, 22s, 32s)
  so they feel organic; set via inline style (only exception to no-inline-style rule)
- Apply `card-hover` class to each review card

### 2. Fix FAQ.tsx — layout + accordion

File: `components/sections/FAQ.tsx`

Current issues: `flex flex-wrap` layout with hardcoded 623px left column, `max-h`
accordion instead of CSS grid trick, multiple items can be open simultaneously.

Fix:
- Layout: CSS grid `grid-cols-[35%_1fr]` on desktop, single col on mobile
- Left column: section label + heading + subtext + CTA button (sticky optional)
- Right column: list of FAQ items separated by `<hr>` (border-[rgba(0,0,0,0.1)])
- Accordion: replace `max-h` with `.faq-answer-wrap` / `.faq-answer-wrap.open` classes
  (already in globals.css — uses `grid-template-rows: 0fr → 1fr`)
- Wrap answer text in `.faq-answer-inner` div (overflow: hidden)
- Single-open: store `openIndex: number | null` in useState, only one item open at a time
- Icon: show `+` when closed, `×` when open (CSS rotation or swap)
- Keyboard: `onKeyDown` handler for Enter/Space on the trigger button
- Apply `btn-primary` class to the CTA button

### 3. Fix RoutesTimeline.tsx — vertical line + dots

File: `components/sections/RoutesTimeline.tsx`

- Wrap the stops list in a `relative` positioned container
- Add `<div className="timeline-line" aria-hidden="true" />` as the first child of that
  wrapper (the CSS in globals.css positions it at `left: 50%` with gradient fade)
- Style the connector dots: `w-3 h-3 rounded-full bg-[#5a4a6e] border-2 border-white ring-1 ring-[#5a4a6e]`
- On mobile (`max-w-768px`), the `.timeline-line` CSS already shifts to `left: 16px`
  — make sure the mobile layout stacks content to the right of that line
- Apply `btn-primary` to "Book your tour" button, `btn-secondary` to "See Pricing"

### 4. Extract Navbar + scroll shadow

Files: `components/sections/Hero.tsx` → new `components/layout/Navbar.tsx`

- Extract the navbar JSX from Hero.tsx into its own `"use client"` component
- Add passive scroll listener in `useEffect`:
  ```ts
  const onScroll = () => setScrolled(window.scrollY > 10)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
  ```
- Apply `navbar-scrolled` class when `scrolled === true` (already in globals.css:
  `box-shadow + backdrop-filter: blur(8px)`)
- Apply `nav-link` class to all nav anchor links (underline slide effect)
- Import Navbar in `app/layout.tsx` so it persists across pages

### 5. Container audit — all sections

For every section file, the pattern should be:

```tsx
// Full-bleed background (color/image) on the <section> tag
// Content constrained inside:
<div className="max-w-[1280px] mx-auto px-[5%] w-full">
  {/* ... */}
</div>
```

Sections that currently use `px-8` (wrong) and need fixing:
- Footer.tsx
- Features.tsx
- PracticalInfo.tsx
- Prices.tsx
- OurLocation.tsx
- RoutesTimeline.tsx
- Locations.tsx
- GroupBookingCTA.tsx

Hero.tsx and Souvenirs.tsx have their own layout — check but be careful not to
break the diagonal split or the ImageTrail container height.

### 6. Apply hover classes — all sections

Go through every section and add the appropriate CSS class:

| Element | Class to add |
|---|---|
| Purple filled buttons | `btn-primary` |
| Outlined / secondary buttons | `btn-secondary` |
| Nav links in Navbar | `nav-link` |
| Footer column links | `footer-link` |
| Review cards | `card-hover` |
| Location cards in Locations.tsx | `card-hover` |
| Feature cards in Features.tsx | `card-hover` |
| Social icon links in Footer | `social-icon` |

### 7. Create ScrollReveal component

New file: `components/ui/ScrollReveal.tsx` (`"use client"`)

```tsx
"use client";
import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right"; // default: "up"
  delay?: number; // ms, default 0
};

export default function ScrollReveal({ children, className, direction = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        direction === "left" && "from-left",
        direction === "right" && "from-right",
        className
      )}
    >
      {children}
    </div>
  );
}
```

Apply `<ScrollReveal>` wrappers to section headings and cards across:
- Features cards (stagger: 0, 70, 140, 210ms)
- PracticalInfo cards (stagger 70ms)
- Prices cards (left/right direction)
- OurLocation feature items (stagger 70ms)
- RoutesTimeline stops (alternating from-left / from-right)
- FAQ items (stagger 50ms)

---

## Verification after each task

After each task run:

```bash
npx tsc --noEmit
```

Zero errors before moving to the next task.

---

## What NOT to change

- `components/fancy/image/image-trail.tsx` — do not touch
- `lib/utils.ts` — do not touch
- `styles/figma-tokens.css` — do not touch
- `app/globals.css` — do not touch (CSS is already written)
- `app/page.tsx` — section order is final

---

## When done

Update `docs/progress.md` with what was completed, then ask for commit approval.
