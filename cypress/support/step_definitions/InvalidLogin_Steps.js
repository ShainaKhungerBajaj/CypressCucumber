///<reference types="Cypress" />
/// <reference types="cypress-xpath" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When ('Click on Signup/login button', () => {

const myLink = cy.get('.modal-body > :nth-child(2) > a > u')            // a href tag code to click on login/Registration page
    myLink.invoke('attr', 'href').then(href => 
    {
            cy.visit('https://automationexercise.com/login')
    })

})

When ('Fill the Invalid Email address', () => {

    cy.xpath('//input[@data-qa="login-email"]').type('bocave9429@carpetra.com')

})

When ('Fill the Invalid Password', () => {

    cy.xpath('//input[@placeholder="Password"]').type('abc@1234')

})

Then ('Click on Login button' , () => {

    cy.xpath('//button[@data-qa="login-button"]').click()


})