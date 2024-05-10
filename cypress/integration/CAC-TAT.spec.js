/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Text lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Anunciação')
        cy.get('#email').type('joaobot@hotmail.com')
        cy.get('#open-text-area')
        .type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()
    })
  })