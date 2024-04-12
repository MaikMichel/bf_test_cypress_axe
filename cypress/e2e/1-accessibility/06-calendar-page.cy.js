/// <reference types="cypress" />

describe('06-calendar-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass axe-core accessibility test', () => {
    // On Home-Page click the fourth card
    cy.get(':nth-child(4) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/calendar');

    // Inject AXE to page
    cy.injectAxe();

    // Runnig accessibility checks
    cy.checkAccessibility();
  })
})
