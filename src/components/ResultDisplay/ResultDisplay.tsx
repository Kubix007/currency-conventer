import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ResultCountryImage from "../ResultCountryImage";
import { Grid, Stack } from "@mui/material";
import * as Styles from "./ResultDisplay.styles";

const ResultDisplay = () => {
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );
  const { currencyToSend } = useSelector(
    (state: RootState) => state.autocomplete
  );

  return (
    <Grid container direction="column">
      <Grid item>
        <Stack direction="row" justifyContent="space-between">
          <ResultCountryImage countryIso={currencyToSend.countryCode} />
          <ResultCountryImage countryIso={currencyToReceive.countryCode} />
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row" justifyContent="space-around">
          <Styles.CurrencyInfo>
            0 {currencyToSend.currencyCode}
          </Styles.CurrencyInfo>
          <Styles.CurrencyInfo>=</Styles.CurrencyInfo>
          <Styles.CurrencyInfo>
            0 {currencyToReceive.currencyCode}
          </Styles.CurrencyInfo>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ResultDisplay;
