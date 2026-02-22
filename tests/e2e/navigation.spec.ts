import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

const NAV_BUTTON_IDS = ['#nav-operacao', '#nav-agentes', '#nav-protocols', '#nav-raiox'];

const openApp = async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page.getByText('Commercial Scale Console')).toBeVisible();
  const offlineModal = page.locator('#modal-offline-earnings');
  if (await offlineModal.isVisible()) {
    await page.click('#modal-offline-earnings-close');
    await expect(offlineModal).toBeHidden();
  }
};

test.describe('Navigation QA Gate', () => {
  test('tabs navegam sem quebrar contexto', async ({ page }) => {
    await openApp({ page });

    await page.click('#nav-operacao');
    await expect(page.getByText('Sistema de Conversao em Escala')).toBeVisible();

    await page.click('#nav-agentes');
    await expect(page.getByText('Mercado de Automação')).toBeVisible();

    await page.click('#nav-protocols');
    await expect(page.getByText('Agente Flow Technical Manifesto')).toBeVisible();

    await page.click('#nav-raiox');
    await expect(page.getByText('Raio-X de Valuation')).toBeVisible();
  });

  test('modais críticos fecham via X e backdrop', async ({ page }) => {
    await openApp({ page });

    await page.click('#cta-open-store');
    await expect(page.locator('#modal-store')).toBeVisible();
    await page.click('#modal-store-close');
    await expect(page.locator('#modal-store')).toBeHidden();

    await page.click('#cta-open-tasks');
    await expect(page.locator('#modal-daily-tasks')).toBeVisible();
    await page.click('#modal-daily-tasks-backdrop', { position: { x: 8, y: 8 } });
    await expect(page.locator('#modal-daily-tasks')).toBeHidden();

    await page.click('#cta-open-leaderboard');
    await expect(page.locator('#modal-leaderboard')).toBeVisible();
    await page.click('#modal-leaderboard-close');
    await expect(page.locator('#modal-leaderboard')).toBeHidden();

    await page.click('#cta-open-mint');
    await expect(page.locator('#modal-neomint')).toBeVisible();
    await page.click('#modal-neomint-close');
    await expect(page.locator('#modal-neomint')).toBeHidden();

    await page.click('#open-withdraw-modal');
    await expect(page.locator('#modal-withdraw')).toBeVisible();
    await page.click('#modal-withdraw-backdrop', { position: { x: 8, y: 8 } });
    await expect(page.locator('#modal-withdraw')).toBeHidden();

    await page.click('#nav-agentes');
    await page.click('#agent-card-agent_support_v1');
    await expect(page.locator('#modal-agent-details')).toBeVisible();
    await page.click('#modal-agent-details-close');
    await expect(page.locator('#modal-agent-details')).toBeHidden();
  });

  test('responsividade sem overflow horizontal e com alvos tocáveis', async ({ page }) => {
    await openApp({ page });

    const bounds = await page.evaluate(() => ({
      viewport: window.innerWidth,
      bodyWidth: document.body.scrollWidth,
      documentWidth: document.documentElement.scrollWidth
    }));

    expect(bounds.bodyWidth).toBeLessThanOrEqual(bounds.viewport + 1);
    expect(bounds.documentWidth).toBeLessThanOrEqual(bounds.viewport + 1);

    for (const navId of NAV_BUTTON_IDS) {
      const locator = page.locator(navId);
      await expect(locator).toBeVisible();
      const box = await locator.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(36);
      expect(box!.width).toBeGreaterThanOrEqual(40);
    }
  });
});
