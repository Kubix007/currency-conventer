import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)`
  display: flex;
  flex-direction: row;
`;

export const CurrencyInfo = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.5em;
    font-weight: bold;
    @media screen and (max-width: 370px) {
      font-size: 1em;
    }
  }
`;

export const Currency = styled.span`
  font-size: 0.7em;
`;

export const BlankSpace = styled(Box)`
  content: "";
  height: 92px;
`;

export const FeeInfo = styled(Typography)`
  &.MuiTypography-root {
    margin-top: 10px;
    font-weight: bold;
    @media screen and (max-width: 370px) {
      font-size: 0.8em;
    }
  }
`;
