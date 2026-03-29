import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-spinner'

const stories = ['all-types', 'sizes', 'on-dark-background'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Spinner / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForSelector('[data-storyloaded]', { timeout: 5_000 }).catch(() => {})
      // Wait for fonts and rendering to settle
      await page.waitForLoadState('networkidle')

      // Pause animations for consistent screenshots
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
          }
        `,
      })

      const root = page.locator('#storybook-root')
      await expect(root).toHaveScreenshot(`${story}-${theme}.png`)
    })
  }
}
