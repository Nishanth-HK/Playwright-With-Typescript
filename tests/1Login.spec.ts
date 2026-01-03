import { test, expect } from '@playwright/test';//it is mandatory

import { LoginPage } from '../pages/LoginPage';//Importing LoginPage class from pages folder
import { AccountPage } from '../pages/AccountPage';//Importing AccountPage class from pages folder

import fs from 'fs';//importing fs module to read data from json file

import * as XLSX from 'xlsx';





//*****************************Example1**************************************** */

// test('Login Testcase-taking input hardcodedly', async ({ page }, testInfo) => {
// const loginPage = new LoginPage(page);
// loginPage.navigateToLoginPage();
// await loginPage.login("standard_user", "secret_sauce");
// })

//*******************************Example2************************************** */

// const users = [
//   { username: 'standard_user', password: 'secret_sauce' },
//   { username: 'locked_out_user', password: 'secret_sauce' },
// ];

// for (const user of users) {
//   test(`Login test for ${user.username}`, async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     const loginPage = new LoginPage(page);
//     loginPage.navigateToLoginPage();
//     await loginPage.login(user.username, user.password);

    
// })};

//*********************************Example3************************************ */

//Using test.describe.parallel() for parameterised execution
// ✅ Best when you want parallel execution per data set

// test.describe.parallel('Login scenarios', () => {
// const users = [
//   { username: 'standard_user', password: 'secret_sauce' },
//   { username: 'locked_out_user', password: 'secret_sauce' },
// ];

// for (const user of users) {
//   test(`Login test for ${user.username}`, async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     const loginPage = new LoginPage(page);
//     loginPage.navigateToLoginPage();
//     await loginPage.login(user.username, user.password);

    
// })};
// });

//**********************************Example4*********************************** */

//single data set in json file
//Taking data from json file for login
// ✅ Best when you want to manage test data separately
// const loginData = JSON.parse(fs.readFileSync('testdata/singleDataSet.json', 'utf-8'));//Reading data from json file


//   test(`Login test for ${loginData.username}`, async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     const loginPage = new LoginPage(page);
//     loginPage.navigateToLoginPage();
//     await loginPage.login(loginData.username, loginData.password);

    
// });

//**********************************Example5*********************************** */
//multiple data set in json file
//Taking data from json file for login
// ✅ Best when you want to manage test data separately

// const loginData2 = JSON.parse(fs.readFileSync('testdata/2LoginTestData.json', 'utf-8'));//Reading data from json file

//more than one set of data,we will go for the loop
// for (const user of loginData2) {
//   test(`Login test for ${user.username}`, async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     const loginPage = new LoginPage(page);
//     loginPage.navigateToLoginPage();
//     await loginPage.login(user.username, user.password);

    
// })};

//**********************************Example6*********************************** */

//Taking data from excel file for login-->this logic work for single and multiple data set also

const excelPath = 'testdata/data.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const loginData3:any = XLSX.utils.sheet_to_json(worksheet);

for (const user of loginData3) {
    test(`Login test for ${user.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      const loginPage = new LoginPage(page);
      loginPage.navigateToLoginPage();
      await loginPage.login(user.username, user.password);


})};

//**********************************Example6*********************************** */

