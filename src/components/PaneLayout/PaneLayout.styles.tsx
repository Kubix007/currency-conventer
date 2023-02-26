import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const BoxContainer = styled(Box)`
  padding: 30px;
  margin: 10px;
  min-height: 355px;
  @media screen and (max-width: 330px) {
    min-height: 255px;
  }
`;

export const StackContainer = styled(Stack)`
  align-items: center;
  height: 100%;
`;
