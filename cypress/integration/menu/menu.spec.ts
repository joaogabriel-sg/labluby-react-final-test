describe("Menu", () => {
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
  });

  it("should Home page when authenticate", () => {
    cy.url().should("include", "/");
  });

  it("should navigate to Account page when clicking in Account link", () => {
    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");
  });

  it("should navigate to Account page when clicking in Account link and return to Home page when clicking Home link", () => {
    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");

    cy.get(".kkcvMa > .sc-ksdxgE").should("be.visible");
    cy.get(".kkcvMa > .sc-ksdxgE").click();
    cy.url().should("include", "/");
  });

  it('should logout and navigate to Auth page when clicking in "Log Out" button', () => {
    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");
  });
});

describe("Menu mobile", () => {
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
  });

  it("should Home page when authenticate", () => {
    cy.url().should("include", "/");
  });

  it("should open mobile menu when clicking in burger menu icon", () => {
    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();
  });

  it("should open mobile menu when clicking in burger menu icon and close when clicking in close icon", () => {
    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();

    cy.get(".sc-fFeiMQ").click();
  });

  it("should navigate to Account page when clicking in Account link", () => {
    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");
  });

  it("should navigate to Account page when clicking in Account link and return to Home page when clicking Home link", () => {
    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");

    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();

    cy.get(".kkcvMa > .sc-ksdxgE").should("be.visible");
    cy.get(".kkcvMa > .sc-ksdxgE").click();
    cy.url().should("include", "/");
  });

  it('should logout and navigate to Auth page when clicking in "Log Out" button', () => {
    cy.get(".sc-dJjYzT").should("be.visible");
    cy.get(".sc-dJjYzT").click();

    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");
  });
});
