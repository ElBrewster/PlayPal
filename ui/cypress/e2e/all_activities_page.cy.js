describe("all activities page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/activities");
  });
  describe("When all activities page render correctly", () => {
    it("Should render all activity card ", () => {
      cy.get("#root > main > section > div.activity-container")
        .find(".activity-card")
        .should("have.length", 10);
    });
    it("Should render activity card correctly ", () => {});
    it("When user click activities card, it should have the correct URL", () => {});
  });
  describe("When API return an error", () => {
    it("Should show error message", () => {});
  });
});
