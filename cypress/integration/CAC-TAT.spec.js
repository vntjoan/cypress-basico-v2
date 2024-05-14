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
    it('Verificar que campo de telefone aceita somente números', function() {
        cy.get('#phone').type('Aa').should('not.have.value')  // ou usar .should('have.value', '')
    })

    // Exercício extra 4
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio', function() {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Anunciação')
        cy.get('#email').type('joaobot@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('#phone-checkbox').check()
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    // Exercício extra 5
    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('João').should('have.value', 'João')
        cy.get('#lastName').type('Anunciação').should('have.value', 'Anunciação')
        cy.get('#email').type('joaobot@hotmail.com').should('have.value', 'joaobot@hotmail.com')
        cy.get('#phone').type('19998979668').should('have.value', '19998979668')
        cy.get('#open-text-area').type('Teste').should('have.value', 'Teste')

        cy.get('#firstName').clear().should('have.value', '')
        cy.get('#lastName').clear('').should('have.value', '')
        cy.get('#email').clear('').should('have.value', '')
        cy.get('#phone').clear('').should('have.value', '')
        cy.get('#open-text-area').clear('').should('have.value', '')
    })
  })