/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Anunciação')
        cy.get('#email').type('joaobot@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
    })

    // Exercício extra 2
    it('Exibe mensagem de erro ao submeter um email com formatação inválida', function() {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Anunciação')
        cy.get('#email').type('joaobot#hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    // Exercício extra 3
    it.only('Verificar que campo de telefone aceita somente números', function() {
        cy.get('#phone').type('Aa').should('not.have.value')  // ou usar .should('have.value', '')
    })

  })