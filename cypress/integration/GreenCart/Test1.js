
///<reference types= "cypress"/>
describe('My First Test Suite', function() {


  it('My first test case', function() {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
      console.log('hello')

    })
    
    //dynamically find element
    cy.get('@productLocator').find('.product').each(($el,index,$list) => {
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews')){
        $el.find('button').click()
      }
})
//assert if logo is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
//print in the log
cy.get('.brand').then(function(logoelement){
  cy.log(logoelement.text())
}
)
//const logo=cy.get('.brand')

})
})