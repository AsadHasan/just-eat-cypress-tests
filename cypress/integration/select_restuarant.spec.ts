describe("Restaurant", () => {
  before(() => {
    cy.get("[data-test-id=restaurant]").first().click();
  });
  it("Should show a menu", () => {
    cy.contains("Menu");
    cy.get("[data-test-id=menu-tab]").find("[data-test-id=menu-category-item]");
  });
  context("Information", () => {
    before(() => {
      cy.contains("Information").click();
    });
    it("Should show Food Hygiene Rating", () => {
      cy.contains("Food hygiene rating");
      cy.get("[data-test-id=fsa-image]");
    });
  });
});
