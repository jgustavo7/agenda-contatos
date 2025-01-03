/// <reference types="cypress" />

describe('Testes para botões deletar e editar', () => {
    beforeEach(() => {  
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar os contatos', () => {
        cy.get('.delete').click
    })
    it('Deve editar os contatos', () => {
        cy.get('.edit').click
    })
})