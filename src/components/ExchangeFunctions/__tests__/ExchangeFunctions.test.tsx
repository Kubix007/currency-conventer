import ExchangeFunctions from "../ExchangeFunctions";
import * as SharedTypes from "../../../shared/types";

const testData: SharedTypes.ICurrenciesState = {
  currencies: {
    currencyToSend: {
      table: "a",
      currency: "Złotówka",
      code: "PLN",
      rates: [
        {
          no: "039/A/NBP/2023",
          effectiveDate: "2023-02-24",
          mid: 1,
        },
      ],
    },
    currencyToReceive: {
      table: "b",
      currency: "funt szterling",
      code: "GBP",
      rates: [
        {
          no: "039/B/NBP/2023",
          effectiveDate: "2023-02-24",
          mid: 5,
        },
      ],
    },
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

test("Check if currency rate works properly", () => {
  expect(ExchangeFunctions.convertSingleValue(testData)).toBe("5.00");
});

test("Check if currency conversion works properly", () => {
  expect(
    ExchangeFunctions.convertCurrency({
      currencies: testData,
      toSendValue: "",
      toReceiveValue: "3",
      targetId: "receiveTextField",
    })
  ).toBe("15.00");
  expect(
    ExchangeFunctions.convertCurrency({
      currencies: testData,
      toSendValue: "",
      toReceiveValue: "4",
      targetId: "receiveTextField",
    })
  ).toBe("20.00");
  expect(
    ExchangeFunctions.convertCurrency({
      currencies: testData,
      toSendValue: "5",
      toReceiveValue: "",
      targetId: "sendTextField",
    })
  ).toBe("1.00");
});
