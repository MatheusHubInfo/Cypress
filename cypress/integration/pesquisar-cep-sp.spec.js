/// reference types="cypress" />

describe("Pesquisando CEPs da UF São Paulo", () => {
    
  beforeEach(() => {
    cy.site_cep();
  });
  it("Pesquisando CEP na cidade de São Paulo", () => {
    cy.buscar_cep("06170280", "SP");
  });
  it("Pesquisando CEP na cidade de Rio de Janeiro", () => {
    cy.buscar_cep("20020050", "RJ");
  });
  it("Pesquisando CEP na cidade de Parana", () => {
    cy.buscar_cep("87750000", "PR");
  });
  it("Pesquisando CEP na cidade de Bahia", () => {
    cy.buscar_cep("40020160", "BA");
  });
});