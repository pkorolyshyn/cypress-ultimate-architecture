import loginPage from '../../pages/LoginPage.js';
import eCommercePage from '../../pages/ECommercePage.js';
import cssValues from '../../fixtures/cssValues.js';
import userData from '../../fixtures/userData.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Login page', () => {
  loginPage.visit();
});

When('the user logs in with valid credentials', () => {
  loginPage.emailInput.type(Cypress.env('email'));
  loginPage.passwordInput.type(Cypress.env('password'));
  loginPage.loginBtn.click();
});

Then('the main page should be visible', () => {
  eCommercePage.header.logo.shouldBeVisible().shouldContainText('ngx-admin');
  eCommercePage.header.userPicture.shouldBeVisible();
});

When('the user enters an invalid email', () => {
  loginPage.emailInput.type(userData.invalidEmail);
  loginPage.layout.click(true); // trigger validation
});

Then('an invalid-email error message should appear', () => {
  loginPage.invalidEmailError.shouldBeVisible().shouldHaveCss('color', cssValues.alerts.errorText);
});
