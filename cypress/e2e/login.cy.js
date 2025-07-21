import LoginPage from "cypress/pageObjects/loginPage.js";

describe('Login Functionality Tests', () => {
  const loginPage = new LoginPage();
  const USER_NAME = Cypress.env("USER_NAME");
  const USER_PASSWORD = Cypress.env("USER_PASSWORD");

  beforeEach(() => {
    loginPage.visit();
  });

  //  Login with valid credentials
  it('should login successfully with valid credentials', () => {
    loginPage
      .typeUsername(USER_NAME)
      .typePassword(USER_PASSWORD)
      .clickLogin();

    cy.url({ timeout: 15000 }).should('include', '/#/home');
  });

  after(() => {
    loginPage.logout();
  });
});