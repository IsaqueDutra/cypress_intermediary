
describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})

  it.skip('logout cenario feliz', (user, password, options) => {
  
    cy.login()
    cy.logout()
  
  cy.get("[data-page='sessions:new']").should('be.visible')
  })


