//  describe('Google Search', () => {

//    beforeEach(()=>{
//     cy.visit('https://google.com')
//     })

//     it('should chech search bar',()=>{
//        cy.get('#APjFqb').type('API testing step by step{Enter}')
//      })
// })

describe("News Articles Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the banner", () => {
    cy.get(".banner-style").should("be.visible");

    cy.get(".banner-heading").should("contain", "Stay Informed. Stay Ahead.");
  });

  it("should display a list of news articles", { timeout: 20000 }, () => {
    cy.get(".news-list").should("have.length", 20);
  });

  it("should display title and attr ", { timeout: 20000 }, () => {
    cy.get(".news-list").each(($el, index, $list) => {
      cy.wrap($el).find(".title").should("be.visible");
      cy.wrap($el).find(".desc").should("be.visible");
    });
  });

  it("should navigate to NY Times page when clicked", () => {
    cy.get(".news-list", { timeout: 20000 }).each(($el, index, $list) => {
      // Verify that the link has the correct href attribute
      cy.wrap($el)
        .find("a.link")
        .should("have.attr", "href")
        .and("include", "https://www.nytimes.com/");
    });
  });
});
