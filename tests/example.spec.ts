import { test, expect } from '@playwright/test';
import './global-hooks';

test.beforeEach(async ({ page }) => {
  console.log('Before Test');
});

test.afterEach(async ({}, testInfo) => {
  console.log('After Test');
  
  console.log('title:', testInfo.title);
  console.log('Status:', testInfo.status);
  console.log('expectedStatus:', testInfo.expectedStatus);
  console.log('retry:', testInfo.retry);
  


});


test('has title', async ({ page }, testInfo) => {
  //

const userName = page.locator('#username');
      const signIn = page.locator("#signInBtn");
      const cardTitles =  page.locator(".card-body a");
      page.on('request',request=> console.log(request.url()));
      page.on('response',response=> console.log(response.url(), response.status()));
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      //css 
     await userName.fill("rahulshetty");
     await page.locator("[type='password']").fill("learning");
     await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(1).textContent());
   const allTitles = await cardTitles.allTextContents();

  //
  await page.goto('https://playwright.dev/');
  let screenshotPath = `${testInfo.title}-${Date.now()}.png`;
  console.log("screenshotPath:", screenshotPath);
  await page.screenshot({path: `screenshots/${screenshotPath}.png`,fullPage: false,});

 
  // await page.screenshot({ path: 'screenshot.png', fullPage: true });
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  // await expect(page).toHaveTitle(/Playwrht/);
  await page.waitForTimeout(10000);
  // await page.waitForTimeout(10000);
  // await page.waitForTimeout(10000);
  

  
  
  console.log("test completed");
  test.info().attach('Log', { body: 'test completed', contentType: 'text/plain' });

  console.log("test completed");
  console.log(testInfo.title);

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
