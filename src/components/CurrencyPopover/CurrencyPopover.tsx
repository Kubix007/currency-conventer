import { Box, Popover } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CurrencyAutocomplete from "../CurrencyAutocomplete";
import * as Types from "./CurrencyPopover.types";

const CurrencyPopover = ({
  anchorEl,
  setAnchorEl,
  name,
}: Types.IPopoverProps) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box p={1}>
        <CurrencyAutocomplete
          name={name}
          currency={currency}
          handleClose={handleClose}
        />
      </Box>
    </Popover>
  );
};

export default CurrencyPopover;
