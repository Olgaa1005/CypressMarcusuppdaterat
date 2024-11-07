describe('Simulera UserInput mot textfält', () => {
  /*
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
    */

  beforeEach(() => {
    cy.visit("index.html")
  })

  it ("mata in namn och ålder i form", () => {
    //Skriva in värden
    //cy.wait(1000)
    cy.get("#name").type("Marcus")
    //cy.wait(1000)
    cy.get("#age").type(35)
    //cy.wait(1000)

    //Klicka på button
    cy.get("#btnName").click()
    //cy.wait(1000)

    cy.get("#nameOutput").should("contains.text", "Marcus är 35 år gammal")
    cy.get("h1").should("contains.text", "My First Page")
  })

  it("Medieinstitutet som namn", () => {
    cy.get("#name").type("Medieinstitutet")
    cy.get("#btnName").click()
    cy.get("h1").should("contains.text", "Second Page")
  })

  it("Kontroll av Count", () => {
    //Första klicket
    cy.get("#btnCount").click()
    cy.get("#counterOutput").should("contains.text", "1")

    for (let i = 0;i < 10; i++) cy.get("#btnCount").click()

      cy.get("#counterOutput").should("contains.text", "11")
  })
})