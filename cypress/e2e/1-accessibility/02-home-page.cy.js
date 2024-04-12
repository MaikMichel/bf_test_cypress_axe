/// <reference types="cypress" />

describe('02-home-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass axe-core accessibility test', () => {
    // Inject AXE to page
    cy.injectAxe();

    // Runnig accessibility checks
    cy.checkAccessibility();
  })
})
