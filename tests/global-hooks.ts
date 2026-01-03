import { test } from '@playwright/test';

/**
 * Runs ONCE before all tests (per worker)
 */
test.beforeAll(async () => {
  console.log('🔥 Before ALL tests (once)');
});

/**
 * Runs BEFORE EACH test
 */
test.beforeEach(async ({ page }, testInfo) => {
  console.log(`➡️ Before test: ${testInfo.title}`);
});

/**
 * Runs AFTER EACH test
 */
test.afterEach(async ({}, testInfo) => {
  console.log(`⬅️ After test: ${testInfo.title} | Status: ${testInfo.status}`);
});

/**
 * Runs ONCE after all tests (per worker)
 */
test.afterAll(async () => {
  console.log('🧹 After ALL tests (once)');
});
