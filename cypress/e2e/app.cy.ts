describe('template spec', () => {
  it('should by default navigate to pt-BR version', () => {
    cy.visit('/')
    cy.url().should("include", "pt-BR")

    cy.get('button').contains("Carregar novo fato!")
  })

  it("should load new fact in portuguese", () => {
    cy.visit("/");

    cy.url().should("include", "pt-BR")

    cy.get('[data-cy="fact"]').should('not.exist');

    cy.get("button").click();

    cy.get('[data-cy="fact"]').should('be.visible');
  })

  it("should change language", () => {
    cy.visit("/");

    cy.url().should("include", "pt-BR")

    cy.get("a").click();

    cy.url().should("include", "en-US")
  })

  it("should load new fact in english", () => {
    cy.visit("/en-US");
    
    cy.get('[data-cy="fact"]').should('not.exist');

    cy.get("button").click();

    cy.get('[data-cy="fact"]').should('be.visible');
  })
})