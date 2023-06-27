
@Ecommerce @regression

Feature: End to End Ecommerce Validation

    Scenario: Ecommerce products delivery
        Given Open the Ecommerce Page
        When  Add Items to the Cart
        And  Login into the page by filling details
        Then  Select the checkout Place Order and finally payment

    @smoke 

    Scenario: Invalid Login credentials for Negative Testing
        Given Open the Ecommerce Page
        When Click on login button 
        And  Fill the Invalid Email address
        And  Fill the Invalid Password
        Then Click on Login button


