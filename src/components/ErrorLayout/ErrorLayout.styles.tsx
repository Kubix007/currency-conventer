import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const BoxContainer = styled(Box)`
  padding: 30px;
  margin: 10px;
  min-height: 355px;
`;

export const StackContainer = styled(Stack)`
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const ErrorInfo = styled(Typography)`
  &.MuiTypography-root {
    font-size: 2em;
  }
`;

export const ErrorImage = styled.img`
  width: 50%;
`;
