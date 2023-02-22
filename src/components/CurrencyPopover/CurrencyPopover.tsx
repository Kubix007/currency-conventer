import { Box, Popover } from "@mui/material";
import CurrencyAutocomplete from "../CurrencyAutocomplete";
import * as Types from "./CurrencyPopover.types";

const CurrencyPopover = ({ anchorEl, setAnchorEl }: Types.IPopoverProps) => {
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
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Box p={2}>
        <CurrencyAutocomplete />
      </Box>
    </Popover>
  );
};

export default CurrencyPopover;
