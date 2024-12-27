/// <reference types="cypress" />

describe('Testes para adição de contatos', () => {
    beforeEach(() => {  
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher formulario de contatos', () => {
        cy.get('.sc-gLDzan ckeKmo').first().click()
        cy.get('input["text"]').type('Joao Gustavo')
        cy.get('input["email"]').type('jgustavo@teste.com')
        cy.get('input["tel"]').type('11 123456789')
        cy.get('.button.adicionar').click
    })
})