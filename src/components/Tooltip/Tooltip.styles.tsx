import { Typography } from "@mui/material";
import styled from "styled-components";

export const Tooltip = styled(Typography)`
  &.MuiTypography-root {
    margin: 0;
    padding: 0;
    color: grey;
    font-size: 10px;
    text-align: center;
    @media screen and (max-width: 370px) {
      font-size: 8px;
    }
  }
`;
