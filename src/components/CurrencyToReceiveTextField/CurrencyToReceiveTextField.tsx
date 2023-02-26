import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  setTextFieldToReceive,
  setTextFieldToSend,
} from "../../features/textfield/textFieldSlice";
import CountryIcons from "../CountryIcons";
import ExchangeFunctions from "../ExchangeFunctions/ExchangeFunctions";
import * as Types from "./CurrencyToReceiveTextField.types";

const CurrencyToReceiveTextField = ({
  setAnchorEl,
}: Types.ICurrencyTextFieldProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );

  const currencies = useSelector((state: RootState) => state.currency);
  const textField = useSelector((state: RootState) => state.textfield);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = event.target.id;
    const value = event.target.value;
    const sendValue = textField.currencyToSend;

    if (value === "") {
      dispatch(setTextFieldToSend(""));
      dispatch(setTextFieldToReceive(value));
    } else {
      dispatch(setTextFieldToReceive(value));
      dispatch(
        setTextFieldToSend(
          ExchangeFunctions.convertCurrency({
            currencies,
            toReceiveValue: value,
            toSendValue: sendValue,
            targetId,
          })
        )
      );
    }
  };

  return (
    <TextField
      label="They receive"
      id="receiveTextField"
      type="number"
      sx={{ sm: { m: 1, width: "35ch" } }}
      onChange={handleChange}
      value={textField.currencyToReceive}
      placeholder="Enter amount"
      inputProps={{ min: 0 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {currencyToReceive.currencyCode}
          </InputAdornment>
        ),
        startAdornment: (
          <Tooltip title="Click to change the currency" placement="bottom">
            <InputAdornment position="start">
              <IconButton
                onClick={handleClick}
                edge="start"
                data-testid="toReceiveButton"
              >
                <CountryIcons countryIso={currencyToReceive.countryCode} />
              </IconButton>
            </InputAdornment>
          </Tooltip>
        ),
      }}
    />
  );
};

export default CurrencyToReceiveTextField;
