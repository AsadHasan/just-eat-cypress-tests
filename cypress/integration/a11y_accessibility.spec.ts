describe("Accessibility", () => {
  before(() => {
    cy.injectAxe();
  });
  it("Should not violate critical a11y accessibility standards", () => {
    cy.checkA11y(null, { includedImpacts: ["critical"] });
  });
});
