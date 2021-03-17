/// <reference types="cypress" />
import U from '~src/userscript'

describe('test extension', () => {
  it('should load extension set run attr to <html> tag', () => {
    cy.visit('https://example.cypress.io')
    cy.get('html').should('have.attr', `data-${U.id}-has-run`)
  })
  it('should change utilities page background color after extension load', () => {
    cy.visit('https://example.cypress.io/')
    // if our webextension is loaded the background color should have been changed
    cy.get('#utilities').should('have.css', 'backgroundColor', 'rgb(255, 0, 0)')
  })
})
