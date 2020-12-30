describe("Restaurants search", () => {
  it("Should show restaurants delivering within the postcode area", () => {
    cy.get("[data-test-id=restaurant]")
      .children()
      .each((restaurant) => {
        cy.wrap(restaurant).should("contain", "Delivery");
      });
  });
  it("Should be default sorted by 'Best Match'", () => {
    cy.contains("Sorted by Best match");
  });
  it("Should show popular cuisines", () => {
    cy.contains("Popular cuisines");
    cy.get("[data-test-id=cuisine-carousel]");
  });
  it("Should show all cuisines", () => {
    cy.contains("All Cuisines A-Z");
    cy.get("[data-test-id=all-cuisines-sidebar]");
  });
  it("Should allow filtering results", () => {
    cy.contains("Filters");
    cy.get("[data-test-id=refine-sidebar");
  });
});
