/// reference types="cypress"/>

// const cypress = require("cypress")

describe('Amazon Web Automation Using Cypress', function() {


it('Launch Amazon Web App', ()=>
{
    cy.visit('https://www.amazon.com/')
})

it('Search for TV', ()=>
{
    cy.get('#twotabsearchtextbox')
    .type("Samsung TV")
    cy.get('#nav-search-submit-button').click()
    cy.wait(5000)
    cy.get('[data-asin="B084QBW2SQ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
    cy.wait(15000)
})

it('Add TV to cart and proceed to checkout page with an authenticated user', ()=>
{
    cy.get('#buybox-see-all-buying-choices').click()
    cy.get('#a-autoid-2-offer-1').click()
    cy.wait(10000)
    cy.get('.a-declarative > span > .a-icon').click()
    cy.wait(5000)
    cy.get('#nav-cart').click()
    cy.get('#sc-buy-box-ptc-button').click()
    cy.get('#ap_email')
    .type("rafayqa21220@gmail.com")
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password')
    .type("015439@Abcd##")
    cy.get('#signInSubmit').click()
    cy.title().should('eq','Enter the shipping address for this order')
})


Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })


})