describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it("besöker 2st hemsidor", () => {
    cy.visit("index.html")
    cy.get("h1").should("contains.text", "My First Page")

    cy.visit("secondPage.html")
    cy.get("h1").should("contains.text", "Second Page")
  })
})