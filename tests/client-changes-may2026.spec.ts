import { test, expect } from '@playwright/test'

// Note: Playwright's Chromium sends Accept-Language: en, so next-intl serves English even at
// unlocalized paths. All locale-sensitive assertions target explicit /en/* paths or
// check locale-neutral content (JSON-LD, structural DOM).

// ── Change 1: Parcours page — buttons only on stop 0.1 ─────────────────────

test('routes: stop 0.2 (Port-En-Drô) has NO booking button', async ({ page }) => {
  await page.goto('/en/routes')
  const content = await page.content()
  // Every "Port-En-Drô" occurrence — none should be followed by a /book link within 3000 chars
  let idx = 0
  while (true) {
    const pos = content.indexOf('Port-En-Dr', idx)
    if (pos === -1) break
    const region = content.substring(pos, pos + 3000)
    expect(region).not.toContain('href="/en/book"')
    idx = pos + 1
  }
})

test('routes: stop 0.1 (Parking du Ménec) has a booking button', async ({ page }) => {
  await page.goto('/en/routes')
  const content = await page.content()
  // Search all occurrences of "Parking du Ménec"; the visual stop (not JSON-LD) is
  // followed by a book link within 3000 chars
  let found = false
  let idx = 0
  while (true) {
    const pos = content.indexOf('Parking du Ménec', idx)
    if (pos === -1) break
    const region = content.substring(pos, pos + 3000)
    if (region.includes('href="/en/book"')) { found = true; break }
    idx = pos + 1
  }
  expect(found).toBe(true)
})

// ── Change 2: FAQ stop clarifications (tested in English) ──────────────────

test('faqs (en): a3 explains stops 0.2 and 0.3 are intermediate only', async ({ page }) => {
  await page.goto('/en/faqs')
  const content = await page.content()
  expect(content).toContain('stop n°1')
  expect(content).toContain('stop n°2')
  expect(content).toContain('reboard')
})

test('faqs (en): a10 states online booking only at departure n°1', async ({ page }) => {
  await page.goto('/en/faqs')
  const content = await page.content()
  expect(content).toContain('departure n°1')
  expect(content).toContain('stops n°2 or n°3')
})

// ── Change 3: Language correction — Arabic → Czech ─────────────────────────

test('homepage: no Arabic, has Czech in language list', async ({ page }) => {
  await page.goto('/')
  const content = await page.content()
  expect(content).not.toContain('Arabic')
  expect(content).not.toContain('arabe')
  expect(content).toMatch(/Czech|tchèque/)
})

test('faqs (en): no Arabic in FAQ hero language list', async ({ page }) => {
  await page.goto('/en/faqs')
  const content = await page.content()
  expect(content).not.toContain('Arabic')
  expect(content).toContain('Czech')
})

// ── Change 4: Navbar banner — italic + underlined brand span ───────────────

test('homepage: navbar brand span is italic and underlined', async ({ page }) => {
  await page.goto('/')
  const brandSpan = page.locator('header span.italic.underline')
  await expect(brandSpan).toBeVisible()
  await expect(brandSpan).toContainText('Petits Trains du Morbihan')
})

test('homepage: navbar banner words are not run together', async ({ page }) => {
  await page.goto('/')
  const content = await page.content()
  expect(content).not.toMatch(/Morbihan\w/)
})
