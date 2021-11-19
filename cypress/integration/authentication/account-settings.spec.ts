describe("Change account details successfully", () => {
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

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");
  });

  it("should save account settings even without changes", () => {
    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");
  });

  it("should save the new name", () => {
    cy.get(":nth-child(1) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("João Gabriel Silva Gomes");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");

    cy.get(":nth-child(1) > .sc-ilfuhL > .sc-uojGG").should(
      "have.value",
      "João Gabriel Silva Gomes"
    );
  });

  it("should save the new e-mail", () => {
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel@email.com");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");

    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG").should(
      "have.value",
      "joaogabriel@email.com"
    );
  });

  it("should save the new e-mail, logout and login successfully", () => {
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel@email.com");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"]').type("joaogabriel@email.com");
    cy.get('[for="password"]').type("jgsg1234");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");
  });

  it("should allow password visibility", () => {
    cy.get(".sc-eGPXGI").click();
  });

  it("should enable and disable password visibility", () => {
    cy.get(".sc-eGPXGI").click();
    cy.get(".sc-eGPXGI").click();
  });

  it("should save the new password", () => {
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel12345");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");

    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG").should(
      "have.value",
      "joaogabriel12345"
    );
  });

  it("should save the new password, logout and login successfully", () => {
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel12345");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"]').type("jgsg@email.com");
    cy.get('[for="password"]').type("joaogabriel12345");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");
  });

  it("should save new e-mail and password, logout and login successfully", () => {
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel@email.com");
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("joaogabriel12345");

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/");

    cy.get(".sc-hBUSln").click();
    cy.url().should("include", "/auth");

    cy.get('[for="email"]').type("joaogabriel@email.com");
    cy.get('[for="password"]').type("joaogabriel12345");
    cy.get(".sc-furwcr").click();
    cy.url().should("include", "/");
  });
});

describe("Change account details unsuccessfully", () => {
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

    cy.get(".sc-ksdxgE").click();
    cy.url().should("include", "/account");
  });

  afterEach(() => {
    cy.url().should("include", "/account");
  });

  it("should show all field errors when clicking save button when all fields are empty", () => {
    cy.get(":nth-child(1) > .sc-ilfuhL > .sc-uojGG").clear();
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG").clear();
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG").clear();

    cy.get(".sc-xiLah").click();
    cy.url().should("include", "/account");

    cy.get(":nth-child(1) > .sc-bilyIR").should("be.visible");
    cy.get(":nth-child(2) > .sc-bilyIR").should("be.visible");
    cy.get(":nth-child(3) > .sc-bilyIR").should("be.visible");
  });

  it("should show an error when the name has been focused, erased and then blurred", () => {
    cy.get(":nth-child(1) > .sc-ilfuhL > .sc-uojGG").focus().clear().blur();
    cy.get(":nth-child(1) > .sc-bilyIR").should("be.visible");
  });

  it("should show an error when the e-mail has been focused, erased and then blurred", () => {
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG").focus().clear().blur();
    cy.get(":nth-child(2) > .sc-bilyIR").should("be.visible");
  });

  it("should show an error when the e-mail has been focused, wrote an invalid e-mail and then blurred", () => {
    cy.get(":nth-child(2) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("!jgs20)__@email..com!-.br.")
      .blur();
    cy.get(":nth-child(2) > .sc-bilyIR").should("be.visible");
  });

  it("should show an error when the password has been focused, erased and then blurred", () => {
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG").focus().clear().blur();
    cy.get(":nth-child(3) > .sc-bilyIR").should("be.visible");
  });

  it("should show an error when the password has been focused, wrote an invalid password and then blurred", () => {
    cy.get(":nth-child(3) > .sc-ilfuhL > .sc-uojGG")
      .focus()
      .clear()
      .type("jgsg")
      .blur();
    cy.get(":nth-child(3) > .sc-bilyIR").should("be.visible");
  });
});
