describe("Mega-Sena game", () => {
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

    cy.get(".sc-dFtzxp").click();
    cy.url().should("include", "/new-bet");

    cy.get(":nth-child(2) > .sc-iUKqMP").click();
    cy.get(".sc-gWXbKe").should("include", /for mega-sena/i);
  });

  it("should make a valid Mega-Sena game by entering it in the cart", () => {
    cy.get(":nth-child(2) > .sc-iUKqMP").click();
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".HgVEh").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
    cy.get(":nth-child(1) > .sc-eLwHnm > .sc-ZOtfp > .sc-jOxtWs").should(
      "include",
      /mega-sena/
    );
  });

  it("should clear a Mega-Sena game", () => {
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".sc-AjmGg > :nth-child(2)").click();
  });

  it("should delete a Mega-Sena game in the cart and the cart makes it empty", () => {
    cy.get(":nth-child(2) > .sc-iUKqMP").click();
    cy.get(".sc-AjmGg > :nth-child(1)").click();
    cy.get(".HgVEh").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
    cy.get(":nth-child(1) > .sc-eLwHnm > .sc-ZOtfp > .sc-jOxtWs").should(
      "include",
      /mega-sena/
    );

    cy.get(".sc-TBWPX").click();

    cy.get(".sc-clIzBv").should("be.visible");
  });

  it("should delete only one of the two Mega-Sena games from the cart and the cart should contain the remaining game", () => {
    for (let i = 0; i < 2; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    for (let i = 0; i < 2; i++) {
      cy.get(`.sc-Galmp > :nth-child(${i + 1})`).should("be.visible");
      cy.get(
        `:nth-child(${i + 1}) > .sc-eLwHnm > .sc-ZOtfp > .sc-jOxtWs`
      ).should("include", /mega-sena/);
    }

    cy.get(":nth-child(1) > .sc-dvQaRk > .sc-TBWPX").click();

    cy.get(".sc-Galmp > :nth-child(1)").should("be.visible");
  });

  it('should show error message when clicking "add to cart" button without selected numbers', () => {
    cy.get(".HgVEh").click();
    cy.get(".go2534082608").should("be.visible");
  });

  it('should show error message when clicking "save" button without games in cart', () => {
    cy.get(".sc-clIzBv").should("be.visible");
    cy.get(".sc-nVkyK").click();
    cy.url().should("include", "/new-bet");
    cy.get(".go318386747").should("be.visible");
  });

  it("should create 10 Mega-Sena games and save to cart", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    cy.get(".sc-nVkyK").click();
    cy.url().should("include", "/");

    cy.get(".go318386747").should("be.visible");

    cy.get(".sc-iwjdpV").contains(/mega-sena/i);
  });

  it("should create 10 Mega-Sena games, save to cart and filter only Mega-Sena games", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(":nth-child(2) > .sc-iUKqMP").click();
      cy.get(".sc-AjmGg > :nth-child(1)").click();
      cy.get(".HgVEh").click();
    }

    cy.get(".sc-nVkyK").click();
    cy.url().should("include", "/");

    cy.get(".go318386747").should("be.visible");

    cy.get(".sc-iwjdpV").contains(/mega-sena/i);

    cy.get(".sc-cxpSdN").click();

    for (let i = 0; i < 10; i++) {
      cy.get(`:nth-child(${i + 1}) > .sc-ikJyIC`).should(
        "include",
        /mega-sena/i
      );
    }
  });
});
