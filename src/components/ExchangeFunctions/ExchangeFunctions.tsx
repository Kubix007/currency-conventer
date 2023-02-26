import * as SharedTypes from "../../shared/types";

const convertCurrency = ({
  currencies,
  toReceiveValue,
  toSendValue,
  targetId,
}: SharedTypes.ExchangeFunctionParameters) => {
  const currencyRateToReceive =
    currencies.currencies.currencyToReceive.rates[0].mid;
  const currencyRateToSend = currencies.currencies.currencyToSend.rates[0].mid;
  const currencyRate = (currencyRateToSend / currencyRateToReceive).toPrecision(
    3
  );

  if (targetId === "receiveTextField") {
    return (Number(toReceiveValue) / Number(currencyRate))
      .toPrecision(3)
      .toString();
  } else {
    return (Number(toSendValue) * Number(currencyRate))
      .toPrecision(3)
      .toString();
  }
};

const convertSingleValue = ({ currencies }: SharedTypes.ICurrenciesState) => {
  const currencyCodeToSend = currencies.currencyToSend.code;
  const currencyCodeToReceive = currencies.currencyToReceive.code;
  const currencyRateToReceive = currencies.currencyToReceive.rates[0].mid;
  const currencyRateToSend = currencies.currencyToSend.rates[0].mid;

  if (currencyCodeToSend === "PLN") {
    return currencyRateToReceive.toPrecision(3);
  } else if (currencyCodeToReceive === "PLN") {
    return currencyRateToSend.toPrecision(3);
  } else {
    return (currencyRateToSend / currencyRateToReceive).toPrecision(3);
  }
};

const ExchangeFunctions = {
  convertCurrency,
  convertSingleValue,
};

export default ExchangeFunctions;
