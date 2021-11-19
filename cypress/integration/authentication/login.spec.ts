describe("Log in with a valid user", () => {
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

    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");
  });

  it("should log in the user", () => {
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("jgsg1234");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");
  });
});

describe("Do not login as an invalid user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/auth");
  });

  it("should show all field errors when clicking login button when all fields are empty", () => {
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"] > .sc-jrQzAO').should("be.visible");
    cy.get('[for="password"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when the e-mail is empty or invalid, has been focused and then blurred", () => {
    cy.get("#email").focus().blur();
    cy.get('[for="email"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when the e-mail is empty", () => {
    cy.get('[for="password"]').type("jgsg1234");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when e-mail is invalid", () => {
    cy.get('[for="email"]').type("jg!__99sg@email..com.+");
    cy.get('[for="password"]').type("jgsg1234");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when the password is empty or invalid, has been focused and then blurred", () => {
    cy.get("#password").focus().blur();
    cy.get('[for="password"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when the password is empty", () => {
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get('[for="password"] > .sc-jrQzAO').should("be.visible");
  });

  it("should show an error when the password is invalid", () => {
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("jgsg");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get('[for="password"] > .sc-jrQzAO').should("be.visible");
  });

  it("should not login with invalid credentials", () => {
    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("jgsg1234");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/auth");

    cy.get(".sc-furwcr").should("be.visible");
  });
});
