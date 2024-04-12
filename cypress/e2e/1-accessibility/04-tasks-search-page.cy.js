/// <reference types="cypress" />

describe('04-tasks-search-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass axe-core accessibility test', () => {
    // On Home-Page click the second card
    cy.get(':nth-child(2) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/tasks-search');

    // Inject AXE to page
    cy.injectAxe();

    // Runnig accessibility checks
    cy.checkAccessibility();
  })
})
