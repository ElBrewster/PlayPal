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
    it("Should render activity card correctly ", () => {
      cy.intercept(
        {
          method: "GET",
          url: "https://kidsactivities.herokuapp.com/api/v1/activities/",
        },
        { fixture: "activities" }
      );

      cy.get(".activity-container").find(".activity-card").should("be.visible");
      cy.get(".activity-name").should("contain", "paper cutting");

      //have title
      //have img and icons
      //img link is correct
    });
    it("When user click activities card, it should have the correct URL", () => {});
  });
});
