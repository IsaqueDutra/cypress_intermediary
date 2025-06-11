describe('teste de login', () => {
  beforeEach(() => {
       cy.login()
  })

  it('logout cenario feliz', () => {
  cy.logout()
  cy.get("[data-page='sessions:new']").should('be.visible')
  })

  it.skip('logout', () => {

  
  })
})

