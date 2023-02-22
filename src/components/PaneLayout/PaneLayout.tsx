import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import CurrencyForm from "../CurrencyForm";
import * as Styles from "./PaneLayout.styles";
import CountryIcons from "../CountryIcons/CountryIcons";
import { useState } from "react";
import CountrySelect from "../CurrencyAutocomplete/CurrencyAutocomplete";

const PaneLayout = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Styles.BoxContainer>
      <Styles.StackContainer>
        <TextField
          label="Enter Amount"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">GBP</InputAdornment>,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleClick} edge="start">
                  <CountryIcons />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
            <CountrySelect />
          </Box>
        </Popover>
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
