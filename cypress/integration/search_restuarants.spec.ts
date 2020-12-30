describe("Restaurants search", () => {
  it("Should show restaurants delivering within the postcode area", () => {
    cy.get("[data-test-id=restaurant]")
      .children()
      .each((restaurant) => {
        cy.wrap(restaurant).should("contain", "Delivery");
      });
  });
  it("Should be default sorted by 'Best Match'", () => {
    cy.findByText("Sorted by Best match").should("exist");
  });
  it("Should show popular cuisines", () => {
    cy.get(".c-contentTitle ").findByText("Popular cuisines").should("exist");
    cy.get("[data-test-id=cuisine-carousel]");
  });
  it("Should show all cuisines", () => {
    cy.findByText("All Cuisines A-Z").should("exist");
    cy.get("[data-test-id=all-cuisines-sidebar]");
  });
  it("Should allow filtering results", () => {
    cy.get(".c-contentTitle-text").contains("Filters");
    cy.get("[data-test-id=refine-sidebar");
  });
});
