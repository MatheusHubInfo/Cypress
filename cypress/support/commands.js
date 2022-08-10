/// reference types="cypress" />
import loc from './locators'

Cypress.Commands.add('site_cep', () => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    cy.get(loc.TITULO).should('contain', 'Busca CEP')
})

Cypress.Commands.add('buscar_cep', (cep, uf) => {
        cy.get(loc.ENDERECO_CEP).type(cep)
        cy.get(loc.TIPO_CEP).select('Localidade/Logradouro')
        cy.get(loc.BUSCAR).click()
        cy.get(loc.LOCALIDADE_UF).should('contain', uf)
})