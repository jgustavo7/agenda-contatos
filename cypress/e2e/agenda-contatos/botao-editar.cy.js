/// <reference types="cypress" />

describe('Testes para botões deletar e editar', () => {
    beforeEach(() => {  
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar os contatos', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Dailane Rodrigues')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('dailane@teste.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('11 123456789')
        cy.get('.alterar').click()
    })
})