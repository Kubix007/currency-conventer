import { IconButton, InputAdornment, TextField } from "@mui/material";
import * as Styles from "./PaneLayout.styles";
import CountryIcons from "../CountryIcons/CountryIcons";
import { useState } from "react";
import CurrencyPopover from "../CurrencyPopover";

const PaneLayout = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
        <CurrencyPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
