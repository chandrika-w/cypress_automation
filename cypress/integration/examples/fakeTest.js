///<reference types= "cypress"/>
describe('My First Test Suite', function() {


    it('My first test case', function() {
  
      cy.visit('https://example.cypress.io/commands/network-requests')
      cy.server()
      cy.route({
        method: 'PUT',
        url: 'comments/*',
        status: 404,
        response: {
            error: "commnts are not found",                     
        },
        delay:1000 
      }).as('updatedComment')    
      
      cy.get('.network-put').click()
      cy.get('.network-put-comment').should('contain', 'commnts are not found')


      

      
           
 
  })
  })