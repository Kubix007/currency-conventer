describe("DEFAULT CURRENCY CONVERSION TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Conversion from PLN to GBP", () => {
    const sendValue = "10";
    let receiveConversionRate = 0;
    cy.wait(2000);
    cy.get("#sendTextField").type(sendValue);
    cy.wait(2000);
    cy.get('[data-testid="receiveConversionRate"]').then(($span) => {
      // $span is the object that the previous command yielded
      receiveConversionRate = $span.text();

      cy.get("#receiveTextField").should(
        "have.value",
        (sendValue / receiveConversionRate).toPrecision(3)
      );
    });
  });

  it("Conversion from GBP to PLN", () => {
    const receiveValue = "23";
    let sendConversionRate = 0;
    cy.get("#receiveTextField").type(receiveValue);
    cy.wait(2000);
    cy.get('[data-testid="sendConversionRate"]').then(($span) => {
      // $span is the object that the previous command yielded
      sendConversionRate = $span.text();

      cy.get("#receiveTextField").should(
        "have.value",
        (receiveValue * sendConversionRate).toPrecision(2).toString()
      );
    });
  });
});

describe("CURRENCY RATE SHOULD CHANGE SUCCESSFULLY", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Send currency should be changed", () => {
    const sendValue = "EUR";
    cy.get('[data-testid="toSendButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
    cy.get('[data-testid="sendCurrencyCode"]').contains(sendValue);
  });

  it("Receive currency should be changed", () => {
    const sendValue = "ALL";
    cy.get('[data-testid="toReceiveButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
    cy.get('[data-testid="receiveCurrencyCode"]').contains(sendValue);
  });
});

describe("COUNTRY FLAG SHOULD CHANGE SUCCESSFULLY", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Send country flag should be changed", () => {
    const sendValue = "EUR";
    cy.get('[data-testid="toReceiveButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
    cy.get(
      `[data-testid="${sendValue.slice(0, 2).toLocaleLowerCase()}"]`
    ).should("be.visible");
  });

  it("Receive country flag should be changed", () => {
    const sendValue = "ALL";
    cy.get('[data-testid="toReceiveButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
    cy.get(
      `[data-testid="${sendValue.slice(0, 2).toLocaleLowerCase()}"]`
    ).should("be.visible");
  });
});

describe("DIFFERENT CURRENCY CONVERSION TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Conversion from EURO to USD", () => {
    const sendValue = "10";
    const sendAutoCompleteValue = "EUR";
    const receiveAutoCompleteValue = "USD";
    let sendConversionRate = 0;
    cy.get('[data-testid="toSendButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(
      `${sendAutoCompleteValue}{enter}`
    );
    cy.get('[data-testid="toReceiveButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(
      `${receiveAutoCompleteValue}{enter}`
    );
    cy.wait(2000);
    cy.get("#sendTextField").type(sendValue);
    cy.wait(2000);
    cy.get('[data-testid="receiveConversionRate"]').then(($span) => {
      // $span is the object that the previous command yielded
      sendConversionRate = $span.text();

      cy.get("#receiveTextField").should(
        "have.value",
        (sendValue * sendConversionRate).toPrecision(3)
      );
    });
  });

  it("Conversion from USD to EURO", () => {
    const receiveValue = "15";
    const sendAutoCompleteValue = "USD";
    const receiveAutoCompleteValue = "EUR";
    let receiveConversionRate = 0;
    cy.get('[data-testid="toSendButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(
      `${sendAutoCompleteValue}{enter}`
    );
    cy.get('[data-testid="toReceiveButton"]').click();
    cy.get('[data-testid="autocompleteTextField"]').type(
      `${receiveAutoCompleteValue}{enter}`
    );
    cy.wait(2000);
    cy.get("#sendTextField").type(receiveValue);
    cy.wait(2000);
    cy.get('[data-testid="receiveConversionRate"]').then(($span) => {
      // $span is the object that the previous command yielded
      receiveConversionRate = $span.text();

      cy.get("#receiveTextField").should(
        "have.value",
        (receiveValue * receiveConversionRate).toPrecision(3)
      );
    });
  });
});
