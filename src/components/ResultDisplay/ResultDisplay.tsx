import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ResultCountryImage from "../ResultCountryImage";
import { Grid, Stack } from "@mui/material";
import * as Styles from "./ResultDisplay.styles";
import ExchangeFunctions from "../ExchangeFunctions/ExchangeFunctions";

const ResultDisplay = () => {
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );
  const { currencyToSend } = useSelector(
    (state: RootState) => state.autocomplete
  );

  const currency = useSelector((state: RootState) => state.currency);

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item>
        <Stack justifyContent="center" textAlign="center">
          <ResultCountryImage countryIso={currencyToSend.countryCode} />
          <Styles.CurrencyInfo>
            1.00{" "}
            <Styles.Currency>{currencyToSend.currencyCode}</Styles.Currency>
          </Styles.CurrencyInfo>
        </Stack>
      </Grid>
      <Grid item>
        <Stack justifyContent="center" textAlign="center">
          <Styles.BlankSpace></Styles.BlankSpace>
          <Styles.CurrencyInfo>=</Styles.CurrencyInfo>
          <Styles.FeeInfo>No transfer fee</Styles.FeeInfo>
        </Stack>
      </Grid>
      <Grid item>
        <Stack justifyContent="center" textAlign="center">
          <ResultCountryImage countryIso={currencyToReceive.countryCode} />
          <Styles.CurrencyInfo>
            {ExchangeFunctions.convertSingleValue(currency)}{" "}
            <Styles.Currency> {currencyToReceive.currencyCode}</Styles.Currency>
          </Styles.CurrencyInfo>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ResultDisplay;
