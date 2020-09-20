
///<reference types= "cypress"/>
describe('My Second Suite', function() {


  it('My Second test case', function() {
   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //Allerts
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    //window alert
    cy.on('window:alert',(str) =>
    {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //confirm allert
    cy.on('window:confirm',(str) =>
    {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //navigate windows
    //cy.get('#opentab').invoke('removeAttr','target').click()
    //cy.get('#opentab').invoke('removeAttr','target').click()
    //cy.url().should('include','rahulshettyacademy')
    //cy.go('back')

      


})
})