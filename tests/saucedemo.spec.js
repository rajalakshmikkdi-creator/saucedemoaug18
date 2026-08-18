import { test, chromium } from '@playwright/test';

test('SauceDemo Login', async () => {

    const browser = await chromium.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

});