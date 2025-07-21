// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pageObjects/loginPage.js";
import AutomationPage from "../pageObjects/automationPage";

Cypress.Commands.add('login', () => {
    const loginPage = new LoginPage();
    const { username, password } = Cypress.env();   
  loginPage.login(username, password);
  
});

Cypress.Commands.add('logout', () => {
  cy.url().then((url) => {
    if (url.includes('/login')) {
      cy.log('Already logged out.');
    } else if (url === 'about:blank') {
      cy.log('Cypress is on blank page. Skipping logout.');
    } else {
      const loginPage = new LoginPage();
      loginPage.logout();
    }
  });
});

Cypress.Commands.add('openAutomationBotPage', (botName) => {
    
    const automationPage = new AutomationPage();
    automationPage
    .openAutomationBotPage(botName);
    
  });
