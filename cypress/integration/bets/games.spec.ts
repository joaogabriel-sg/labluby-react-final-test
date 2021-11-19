describe("Games", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/auth");

    cy.get(".sc-pVTFL").click();
    cy.url().should("include", "/auth/registration");

    cy.get('[for="name"]').type("João Gabriel");
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("jgsg1234");

    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");

    cy.get(".sc-kfPuZi")
      .should("be.visible")
      .should("include.text", "No games");

    cy.get(".sc-dFtzxp").click();
    cy.url().should("include", "/new-bet");
  });

  it("should cart be empty and cart total 0 when rendering for the first time", () => {
    cy.get(".sc-clIzBv").should("be.visible");
    cy.get(".sc-jeraig").should("include", /0,00/i);
  });

  it("should select a game and the title switches automatically", () => {
    cy.get(".sc-gWXbKe").should("include", /lotofácil/i);

    cy.get(":nth-child(2) > .sc-iUKqMP").click();
    cy.get(".sc-gWXbKe").should("include", /mega-sena/i);

    cy.get(":nth-child(1) > .sc-iUKqMP").click();
    cy.get(".sc-gWXbKe").should("include", /lotofácil/i);

    cy.get(":nth-child(3) > .sc-iUKqMP").click();
    cy.get(".sc-gWXbKe").should("include", /quina/i);
  });

  it('should not add an empty game to cart when clicking the "add to cart" button and showing an error message', () => {
    cy.get(".HgVEh").click();
    cy.get(".go2534082608").should("be.visible");
  });

  it("should create a valid Lotofácil game", () => {
    cy.get(":nth-child(1) > .sc-iUKqMP").click();
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".HgVEh").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
  });

  it("should create a valid Mega-Sena game", () => {
    cy.get(":nth-child(2) > .sc-iUKqMP").click();
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".HgVEh").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
  });

  it("should create a valid Quina game", () => {
    cy.get(":nth-child(3) > .sc-iUKqMP").click();
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".HgVEh").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
  });

  it('should not save cart when clicking "save" button and showing an error message', () => {
    cy.get(".sc-nVkyK").click();
    cy.get(".go2534082608").should("be.visible");
  });

  it("should create a valid game with 5 Lotofácil, 6 Mega-Sena and 3 Quina", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(":nth-child(1) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 6; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 3; i++) {
      cy.get(":nth-child(3) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    cy.get(".sc-nVkyK").click();
    cy.get(".go318386747").should("be.visible");
    cy.url().should("include", "/");
  });

  it("should create a valid game with 5 Lotofácil, 6 Mega-Sena and 3 Quina and select Lotofácil and Quina in the filters", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(":nth-child(1) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 6; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 3; i++) {
      cy.get(":nth-child(3) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    cy.get(".sc-nVkyK").click();
    cy.get(".go318386747").should("be.visible");
    cy.url().should("include", "/");

    cy.get(".jrELzm").click();
    cy.get(".DRSnf").click();
  });

  it("should create a valid game with 5 Lotofácil, 6 Mega-Sena and 3 Quina and select Lotofácil and Quina in the filters, uncheck Lotofácil and select Mega-Sena", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(":nth-child(1) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 6; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 3; i++) {
      cy.get(":nth-child(3) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    cy.get(".sc-nVkyK").click();
    cy.get(".go318386747").should("be.visible");
    cy.url().should("include", "/");

    cy.get(".jrELzm").click();
    cy.get(".DRSnf").click();

    cy.get(".sc-giYglK > :nth-child(1)").should("be.visible");
    cy.get(".sc-giYglK > :nth-child(1) > .sc-ikJyIC").should(
      "include.text",
      "Lotofácil"
    );

    cy.get(".sc-giYglK > :nth-child(6)").should("be.visible");
    cy.get(".sc-giYglK > :nth-child(6) > .sc-ikJyIC").should(
      "include.text",
      "Quina"
    );

    cy.get(".fEAvkH").click();
    cy.get(".iCKTjF").click();

    cy.get(".sc-giYglK > :nth-child(1)").should("be.visible");
    cy.get(".sc-giYglK > :nth-child(1) > .sc-ikJyIC").should(
      "include.text",
      "Mega-Sena"
    );

    cy.get(".sc-giYglK > :nth-child(7)").should("be.visible");
    cy.get(".sc-giYglK > :nth-child(7) > .sc-ikJyIC").should(
      "include.text",
      "Quina"
    );
  });
});

describe("Games in mobile device", () => {
  beforeEach(() => {
    cy.viewport(375, 812);

    cy.visit("/");
    cy.url().should("include", "/auth");

    cy.get(".sc-pVTFL").click();
    cy.url().should("include", "/auth/registration");

    cy.get('[for="name"]').type("João Gabriel");
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("jgsg1234");

    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");

    cy.get(".sc-kfPuZi")
      .should("be.visible")
      .should("include.text", "No games");

    cy.get(".sc-dFtzxp").click();
    cy.url().should("include", "/new-bet");
  });

  it("should open cart clicking in cart icon button", () => {
    cy.get(".sc-ehCJOs").should("be.visible");
    cy.get(".sc-gGCDDS").should("be.visible");

    cy.get(".sc-ehCJOs").click();
    cy.get(".sc-lbhJGD").should("be.visible");
  });

  it("should open the cart clicking the cart icon button and close the cart clicking the close icon button", () => {
    cy.get(".sc-ehCJOs").should("be.visible");
    cy.get(".sc-gGCDDS").should("be.visible");
    cy.get(".sc-ehCJOs").click();

    cy.get(".sc-gSQFLo").should("be.visible");

    cy.get(".sc-lcepkR").should("be.visible");
    cy.get(".sc-ehCJOs").click();

    cy.get(".sc-gSQFLo").should("not.be.visible");
  });
});
