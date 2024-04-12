/// <reference types="cypress" />

describe('01-login-page', () => {

  it('should pass axe-core accessibility test', () => {
    // Go to baseURL
    cy.visit('/')

    // Inject AXE to page
    cy.injectAxe();

    // Runnig accessibility checks
    cy.checkAccessibility();
  })
})
