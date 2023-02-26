import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  setTextFieldToReceive,
  setTextFieldToSend,
} from "../../features/textfield/textFieldSlice";
import CountryIcons from "../CountryIcons";
import ExchangeFunctions from "../ExchangeFunctions/ExchangeFunctions";
import * as Types from "./CurrencyToSendTextField.types";

const CurrencyToSendTextField = ({
  setAnchorEl,
}: Types.ICurrencyTextFieldProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { currencyToSend } = useSelector(
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
    const receiveValue = textField.currencyToReceive;

    if (value === "") {
      dispatch(setTextFieldToReceive(""));
      dispatch(setTextFieldToSend(value));
    } else {
      dispatch(setTextFieldToSend(value));
      dispatch(
        setTextFieldToReceive(
          ExchangeFunctions.convertCurrency({
            currencies,
            toReceiveValue: receiveValue,
            toSendValue: value,
            targetId,
          })
        )
      );
    }
  };

  return (
    <TextField
      label="You send"
      id="sendTextField"
      type="number"
      sx={{ sm: { m: 1, width: "35ch" } }}
      onChange={handleChange}
      value={textField.currencyToSend}
      inputProps={{ min: 0 }}
      placeholder="Enter amount"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {currencyToSend.currencyCode}
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              data-testid="toSendButton"
              onClick={handleClick}
              edge="start"
            >
              <CountryIcons countryIso={currencyToSend.countryCode} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CurrencyToSendTextField;
