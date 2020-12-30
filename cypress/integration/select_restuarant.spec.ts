describe("Restaurant", () => {
  before(() => {
    cy.get("[data-test-id=restaurant]").first().click();
  });
  it("Should show a menu", () => {
    cy.findByText("Menu").should("exist");
    cy.get("[data-test-id=menu-tab]").find("[data-test-id=menu-category-item]");
  });
  context("Information", () => {
    before(() => {
      cy.findByText("Information").click();
    });
    it("Should show Food Hygiene Rating", () => {
      cy.findByText("Food hygiene rating").should("exist");
      cy.get("[data-test-id=fsa-image]");
    });
    it("Should show location", () => {
      cy.findByText("Where to find us").should("exist");
      cy.get("[data-test-id=google-map]");
    });
  });
});
