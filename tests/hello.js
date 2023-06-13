import { expect, test } from "@playwright/test"

test(`home page has rick roll button with Do not click me! text`, async ({ page }) => {
  await page.goto(`/`)
  const button = await page.$(`text=Do not click me!`)
  expect(button).toBeTruthy()
})
