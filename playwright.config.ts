import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  outputDir: `test-results/${new Date().toISOString().replace(/[:.]/g, '-')}`,
  // outputDir: `Screenshot/${new Date().toISOString().replace(/[:.]/g, '-')}`,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  //retries: process.env.CI ? 2 : 0,
  retries:3,
  // workers: process.env.CI ? 1 : 2,
  workers: 2,

 //if dont mention reporters,it wont generate any report
  // reporter: [['html', { open: 'never' }]],//will not open HTML report automatically
  //reporter: 'html',//we have to open manually
  // reporter: [['html', { open: 'always' }]],//opens HTML report automatically
  // reporter: [['html', { open: 'on-failure'}]],//opens HTML report automatically when test fails
  // reporter: [['html', { open: 'always','outputFolder': 'html-report' }]],//Creates html-report folder and stores the latest report in that folder folder
  // reporter: 'list',
  // reporter: 'allure-playwright',
  // reporter: [['html', { open: 'always' }],['allure-playwright']],//opens HTML report automatically,
  // reporter: [['html', { open: 'always' }],['allure-playwright', { open: 'always'}]],//opens HTML report automatically
 reporter: [['allure-playwright', { open: 'always'}]],

  use: {
    headless: false,
    trace: 'on',      
    screenshot: 'only-on-failure',
    video: 'on',
    
    //to maximize browser window there is no inbuilt function in playwright, so we have to set viewport to null and add args in launchOptions
    viewport: null,
    launchOptions: {
      slowMo: 500,
      args: ['--start-maximized'],
    },


  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  globalTeardown: require.resolve('./global-teardown'),


  
});
