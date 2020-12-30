describe("Lighthouse audit", () => {
  it("Should pass lighthouse audits", () => {
    cy.lighthouse();
    cy.pa11y();
  });
});
