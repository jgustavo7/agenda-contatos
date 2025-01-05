/// <reference types="cypress" />

describe('Testes para botões deletar e editar', () => {
    beforeEach(() => {  
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar os contatos', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()  
    })
})