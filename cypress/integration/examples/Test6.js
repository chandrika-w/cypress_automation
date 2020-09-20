
///<reference types= "cypress"/>
describe('My Second Suite', function() {


  it('My Second test case', function() {
   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    //mouse hoover
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')

         


})
})