import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CountryIcons from "../CountryIcons";
import * as Types from "./CurrencyToSendTextField.types";

const CurrencyToSendTextField = ({
  setAnchorEl,
}: Types.ICurrencyTextFieldProps) => {
  const { currencyToSend } = useSelector(
    (state: RootState) => state.autocomplete
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <TextField
      label="You send"
      id="You send"
      sx={{ m: 1, width: "35ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {currencyToSend.currencyCode}
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleClick} edge="start">
              <CountryIcons countryIso={currencyToSend.countryCode} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CurrencyToSendTextField;
