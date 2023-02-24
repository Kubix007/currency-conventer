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
  const currencyRate = (currencyRateToSend / currencyRateToReceive).toFixed(2);

  if (targetId === "receiveTextField") {
    return (parseInt(toReceiveValue) / Number(currencyRate))
      .toFixed(2)
      .toString();
  } else {
    return (parseInt(toSendValue) * Number(currencyRate)).toFixed(2).toString();
  }
};

const convertSingleValue = ({ currencies }: SharedTypes.ICurrenciesState) => {
  const currencyCodeToSend = currencies.currencyToSend.code;
  const currencyCodeToReceive = currencies.currencyToReceive.code;
  const currencyRateToReceive = currencies.currencyToReceive.rates[0].mid;
  const currencyRateToSend = currencies.currencyToSend.rates[0].mid;

  if (currencyCodeToSend === "PLN") {
    return currencyRateToReceive.toFixed(2);
  } else if (currencyCodeToReceive === "PLN") {
    return currencyRateToSend.toFixed(2);
  } else {
    return (currencyRateToSend / currencyRateToReceive).toFixed(2);
  }
};

const ExchangeFunctions = {
  convertCurrency,
  convertSingleValue,
};

export default ExchangeFunctions;
