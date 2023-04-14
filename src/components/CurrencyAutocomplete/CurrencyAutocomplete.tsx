import { Autocomplete, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { currencies } from "../../data/currencies";
import {
  setCurrencyToReceive,
  setCurrencyToSend,
} from "../../features/autocomplete/autocompleteSlice";
import {
  getCurrencyToReceive,
  getCurrencyToSend,
  resetCurrencyToReceive,
  resetCurrencyToSend,
} from "../../features/currency/currencySlice";
import {
  setTextFieldToReceive,
  setTextFieldToSend,
} from "../../features/textfield/textFieldSlice";
import * as Types from "./CurrencyAutocomplete.types";
import * as Styles from "./CurrencyAutocomplete.styles";
import * as SharedTypes from "../../shared/types";

const CountryAutocomplete = ({
  currency,
  handleClose,
  name,
}: Types.ICurrencyAutocompleteProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (newValue: SharedTypes.ICountryType | null) => {
    if (name === "You send") {
      dispatch(setCurrencyToSend(newValue)); //We are changing state for autocomplete state
      if (newValue?.currencyCode !== "PLN") {
        // If the currency is not from Poland, send request to api
        dispatch(
          getCurrencyToSend({
            table: newValue!.table,
            code: newValue!.currencyCode,
          }) //We are changing state for repsonse from API
        );
      } else {
        dispatch(resetCurrencyToSend()); //If the currency is from Poland, set default value
      }
      dispatch(setTextFieldToSend(""));
      dispatch(setTextFieldToReceive("")); //Clear TextField when a country changes
    } else {
      dispatch(setCurrencyToReceive(newValue)); //We are changing state for autocomplete state
      if (newValue?.currencyCode !== "PLN") {
        // If the currency is not from Poland, send request to api
        dispatch(
          getCurrencyToReceive({
            table: newValue!.table,
            code: newValue!.currencyCode,
          }) //We are changing state for repsonse from API
        );
      } else {
        dispatch(resetCurrencyToReceive()); //If the currency is from Poland, set default value
      }
      dispatch(setTextFieldToSend(""));
      dispatch(setTextFieldToReceive("")); //Clear TextField when a country changes
    }
    handleClose();
  };

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={currencies}
      autoHighlight
      disableClearable
      isOptionEqualToValue={(option, value) =>
        option.currencyCode === value.currencyCode
      }
      value={currency}
      onChange={(
        event: React.SyntheticEvent,
        newValue: SharedTypes.ICountryType | null
      ) => {
        handleChange(newValue);
      }}
      getOptionLabel={(option) => option.currencyCode}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Styles.FlagImage
            loading="lazy"
            src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
            alt={option.currencyCode}
          />
          {option.currencyName} ({option.currencyCode})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a currency"
          data-testid="autocompleteTextField"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default CountryAutocomplete;
