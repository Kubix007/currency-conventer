import { Autocomplete, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { currencies } from "../../data/currencies";
import {
  setCurrencyToReceive,
  setCurrencyToSend,
} from "../../features/autocomplete/autocompleteSlice";
import * as Types from "./CurrencyAutocomplete.types";

const CountryAutocomplete = ({
  currency,
  handleClose,
  name,
}: Types.ICurrencyAutocompleteProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={currencies}
      autoHighlight
      disableClearable
      value={currency}
      onChange={(event: any, newValue: string | null) => {
        if (name === "You send") {
          dispatch(setCurrencyToSend(newValue));
        } else {
          dispatch(setCurrencyToReceive(newValue));
        }
        handleClose();
      }}
      getOptionLabel={(option) => option.currencyCode}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="30"
            src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.currencyName} ({option.currencyCode})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a currency"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountryAutocomplete;
