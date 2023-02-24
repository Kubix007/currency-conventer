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
    <Grid container direction="column">
      <Grid item>
        <Stack direction="row" justifyContent="space-around">
          <ResultCountryImage countryIso={currencyToSend.countryCode} />
          <ResultCountryImage countryIso={currencyToReceive.countryCode} />
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row" justifyContent="space-evenly">
          <Styles.CurrencyInfo>
            1.00 {currencyToSend.currencyCode}
          </Styles.CurrencyInfo>
          <Styles.CurrencyInfo>=</Styles.CurrencyInfo>
          <Styles.CurrencyInfo>
            {ExchangeFunctions.convertSingleValue(currency)}{" "}
            {currencyToReceive.currencyCode}
          </Styles.CurrencyInfo>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ResultDisplay;
