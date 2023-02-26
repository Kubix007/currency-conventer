import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

const setup = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

test("Default country flag (PL) should be rendered", () => {
  setup();
  const countryFlag = screen.getByTestId("pl");
  expect(countryFlag).toBeInTheDocument();
});

test("Default country flag (GB) should be rendered", () => {
  setup();
  const countryFlag = screen.getByTestId("gb");
  expect(countryFlag).toBeInTheDocument();
});

test("Currency inputs should be rendered", () => {
  setup();
  const currencyInputs = screen.getAllByPlaceholderText("Enter amount");
  expect(currencyInputs).toHaveLength(2);
});

test("Default currency rate should be rendered", () => {
  setup();
  const currencyInputs = screen.getByTestId("sendCurrencyRate");
  expect(currencyInputs).toHaveTextContent("1.00");
});
