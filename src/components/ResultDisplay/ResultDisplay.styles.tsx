import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)`
  display: flex;
  flex-direction: row;
`;

export const CurrencyInfo = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.5em;
  }
`;
