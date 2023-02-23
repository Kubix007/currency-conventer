import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CountryIcons from "../CountryIcons";
import * as Types from "./CurrencyTextField.types";

const CurrencyTextField = ({
  setAnchorEl,
  name,
}: Types.ICurrencyTextFieldProps) => {
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );
  const { currencyToSend } = useSelector(
    (state: RootState) => state.autocomplete
  );
  let currency = null;

  if (name === "You send") {
    currency = currencyToSend;
  } else {
    currency = currencyToReceive;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <TextField
      label={name}
      id={name}
      sx={{ m: 1, width: "35ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {currency.currencyCode}
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleClick} edge="start">
              <CountryIcons countryIso={currency.countryCode} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CurrencyTextField;
