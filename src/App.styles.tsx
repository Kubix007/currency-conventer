import { Stack } from "@mui/material";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

export const Center = styled(Stack)`
  height: 100vh;
  justify-content: center;
`;

export const App = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
`;
