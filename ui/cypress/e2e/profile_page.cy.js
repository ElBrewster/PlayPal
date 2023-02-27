describe("profile page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Profile");
  });
  describe("When profile page render correctly", () => {
    it("Should render activity card correctly ", () => {
      cy.get(".header-nav");
      //header nav exist // we test this in other file already
      cy.get(".report-h2").contains(" Kiddo Report Card");
      //header say 'Kiddo Report Card'
      //6 paragraph tags
      cy.get(".report").find(".report-p").should("have.length", 6);
    });
    // Once we have import activities booked mark, sad path will be having response message where there's no activities
  });
});
