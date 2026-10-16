import { test, expect } from "@playwright/test";

test.describe("Portafolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://juan-bovio.xyz");
  });

  test("la página carga con título correcto", async ({ page }) => {
    await expect(page).toHaveTitle(/Bovio/i);
  });

  test("se ve el encabezado principal", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("un enlace de navegación funciona", async ({ page }) => {
    await page.getByRole("link", { name: /proyectos/i }).click();
    await expect(page).toHaveURL(/proyectos|#projects/i);
  });
});