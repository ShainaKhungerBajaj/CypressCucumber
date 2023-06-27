import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Open the Ecommerce Page', ()=>
{
    cy.visit("https://automationexercise.com/")

})


When('Add Items to the Cart', ()=>
{
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.contains("Dress").click()
        cy.contains("View Product").click()
        cy.get('button[class="btn btn-default cart"]').click()
        cy.contains("Continue Shopping").click()

        cy.contains('Madame').click()
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > img').scrollIntoView()
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click()

        const numClicks = 3;                         // Number of times to click the up arrow with loop
        for (let i = 0; i < numClicks; i++) 
        {
            cy.get('input[name="quantity"]').click().type('{upArrow}')
        }


        cy.get('button[class="btn btn-default cart"]').click()
        cy.contains("View Cart").click()
        cy.contains("Proceed To Checkout").click()

        const myLink = cy.get('.modal-body > :nth-child(2) > a > u')            // a href tag code to click on login/Registration page
        myLink.invoke('attr', 'href').then(href => 
        {
                cy.visit('https://automationexercise.com/login')
        })


        const faker = require('faker');                                         // Randon Email Generation
        function getRandomEmail() 
        {
        const randomEmail = faker.internet.email();
        return randomEmail;
        }   

        const randomEmail = getRandomEmail();                                   // Usage
        

        cy.get('input[name="name"]').type('Smaira')
        cy.get('input[data-qa="signup-email"]').type(randomEmail)
        cy.get('button[data-qa="signup-button"]').click()

})

When('Login into the page by filling details', ()=>
{
    cy.get('input[value="Mrs"]').check()                            // Radio Button
        cy.get('#password').type('Test@123')
        cy.get('#days').select('4').should('have.value','4')            // Drop down list
        cy.get('#months').select('February').should('have.value','2')
        cy.get('#years').select('2005').should('have.value','2005')
        cy.get('input[id="optin"]').check()                          // Checkbox

        cy.get('[data-qa="first_name"]').type('Smaira')
        cy.get('[data-qa="last_name"]').type('Khan')
        cy.get('[data-qa="address"]').type('Down Town')
        cy.get('[data-qa="country"]').select('Singapore')
        cy.get('#state').type('Asia')
        cy.get('#city').type('East Region')
        cy.get('#zipcode').type('179098')
        cy.get('#mobile_number').type('+17854626')
        cy.contains('Create Account').click()
        cy.get('[data-qa="continue-button"]').click()
})

Then('Select the checkout Place Order and finally payment', ()=>
{
    const myLink1 = cy.get('.shop-menu > .nav > :nth-child(3) > a')            // a href tag code to click on login/Registration page
        myLink1.invoke('attr', 'href').then(href => 
        {
                cy.visit('https://automationexercise.com/view_cart')
        })

        
        cy.contains('Proceed To Checkout').click()
        cy.contains('Place Order').click()


        cy.get('input[data-qa="name-on-card"]').type('Smaira')           // Payment
        cy.get('input[data-qa="card-number"]').type('5458745')
        cy.get('input[data-qa="cvc"]').type('544')
        cy.get('input[data-qa="expiry-month"]').type('05')
        cy.get('input[data-qa="expiry-year"]').type('2028')
        cy.get('[data-qa="pay-button"]').click()

        cy.contains('Continue').click()

})
