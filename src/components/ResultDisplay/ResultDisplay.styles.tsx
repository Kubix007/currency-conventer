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
    @media screen and (max-width: 400px) {
      font-size: 1em;
    }
    @media screen and (max-width: 330px) {
      font-size: 0.8em;
    }
  }
`;

export const Currency = styled.span`
  font-size: 0.7em;
`;

export const ConversionRateValue = styled.span``;

export const BlankSpace = styled(Box)`
  content: "";
  height: 92px;
  @media screen and (max-width: 565px) {
    height: 50px;
  }
  @media screen and (max-width: 400px) {
    height: 48px;
  }
  @media screen and (max-width: 330px) {
    height: 23px;
  }
`;

export const FeeInfo = styled(Typography)`
  &.MuiTypography-root {
    margin-top: 10px;
    font-weight: bold;
    @media screen and (max-width: 400px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 330px) {
      font-size: 0.6em;
    }
  }
`;
