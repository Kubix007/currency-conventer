import { Box, Popover } from "@mui/material";
import CurrencyAutocomplete from "../CurrencyAutocomplete";
import * as Types from "./CurrencyPopover.types";

const CurrencyPopover = ({
  anchorEl,
  setAnchorEl,
  setCurrency,
  currency,
}: Types.IPopoverProps) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          setCurrency={setCurrency}
          currency={currency}
          handleClose={handleClose}
        />
      </Box>
    </Popover>
  );
};

export default CurrencyPopover;
