import styled from "styled-components";

export const FlagImage = styled.img`
  border: 2px solid black;
  width: 150px;
  height: 90px;
  object-fit: cover;
  @media screen and (max-width: 565px) {
    width: 75px;
    height: 45px;
  }
  @media screen and (max-width: 370px) {
    width: 60px;
    height: 36px;
  }
`;
