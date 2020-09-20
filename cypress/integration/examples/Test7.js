
///<reference types= "cypress"/>
describe('My Second Suite', function() {


  it('My Second test case', function() {
   
   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    
    cy.get('#opentab').then(function(e1){
      const url=e1.prop('href')
      cy.log(url)
      //cy.visit(url)
    })
         


})
})