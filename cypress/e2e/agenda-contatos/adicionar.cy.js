/// <reference types="cypress" />

describe('Testes para formulario de contatos', () => {
    beforeEach(() => {  
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher formulario de contatos', () => {
        cy.get('input[type="text"]').type('Joao Gustavo')
        cy.get('input[type="email"]').type('jgustavo@teste.com')
        cy.get('input[type="tel"]').type('11 123456789')
        cy.get('.adicionar').click()
    })
})