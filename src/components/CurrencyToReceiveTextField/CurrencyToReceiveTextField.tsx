import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CountryIcons from "../CountryIcons";
import * as Types from "./CurrencyToReceiveTextField.types";

const CurrencyToReceiveTextField = ({
  setAnchorEl,
}: Types.ICurrencyTextFieldProps) => {
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <TextField
      label="They receive"
      id="They receive"
      sx={{ m: 1, width: "35ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {currencyToReceive.currencyCode}
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleClick} edge="start">
              <CountryIcons countryIso={currencyToReceive.countryCode} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CurrencyToReceiveTextField;
