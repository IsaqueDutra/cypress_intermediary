import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    const creantionProjetic = {
      name: `creantionProjetic-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(creantionProjetic)

    //cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${creantionProjetic.name}`)
    cy.contains(creantionProjetic.name).should('be.visible')
    cy.contains(creantionProjetic.description).should('be.visible')
  })
})
