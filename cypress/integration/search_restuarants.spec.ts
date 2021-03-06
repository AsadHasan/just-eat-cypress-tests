describe("Restaurants search", () => {
  it("Should show restaurants delivering within the postcode area", () => {
    cy.get("[data-test-id=searchresults]")
      .find("[data-test-id=openrestaurants]")
      .find("[data-test-id=restaurant]")
      .children()
      .each((restaurant) => {
        cy.wrap(restaurant).should("contain", "Deliver");
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
  it("Should allow searching results for particular dish or restaurant", () => {
    cy.findByText("Search for a dish or restaurant");
  });
});
