import { behavior } from "@testing-library/user-event/dist/cjs/event/behavior/registry.js";

describe("fill inputs", () => {
  it("Test that enters text into input", () => {
    cy.visit("http://localhost:5173/orderform");
    cy.get('[data-cy="name-input"]')
      .type("Ali Umur Kucur")
      .should("have.value", "Ali Umur Kucur");
    cy.get('[data-cy="ordernote-input"]')
      .type("Lütfen pizzada acı olmasın")
      .should("have.value", "Lütfen pizzada acı olmasın");
  });
});

describe("Select ingredients", () => {
  it("should choose more than one ingredients", () => {
    cy.visit("http://localhost:5173/orderform");
    for (let i = 0; i < 5; i++) {
      let checkboxName = `[data-cy="ingredient-checkbox${i}"]`;
      cy.get(checkboxName).click();
    }

    for (let i = 0; i < 5; i++) {
      let checkboxName = `[data-cy="ingredient-checkboxi${i}"]:checked`;
      cy.get(checkboxName).should("be.checked");
    }
  });

  describe("Fill form correctly", () => {
    it("should click order button", () => {
      cy.visit("http://localhost:5173/orderform");
      cy.get('[data-cy="name-input"]')
        .type("Ali Umur Kucur")
        .should("have.value", "Ali Umur Kucur");

      for (let i = 0; i < 5; i++) {
        let checkboxName = `[data-cy="ingredient-checkbox${i}"]`;
        cy.get(checkboxName).click();
      }

      for (let i = 0; i < 5; i++) {
        let checkboxName = `[data-cy="ingredient-checkboxi${i}"]:checked`;
        cy.get(checkboxName).should("be.checked");
      }

      cy.get('[data-cy="largesize-radio"]').click({ force: true });
      cy.get('[data-cy="pastry-select"]').select("Kalın Hamur");
      cy.get('[data-cy="order-button"]').should("not.disabled").click();

      cy.url().should("contain", "/success");
    });
  });
});
