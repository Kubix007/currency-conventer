import { Button, Typography } from "@mui/material";
import * as Styles from "./ErrorLayout.styles";

const ErrorLayout = () => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Styles.BoxContainer>
      <Styles.StackContainer spacing={5}>
        <Typography variant="h2">Ooops!</Typography>
        <Styles.ErrorInfo>Something went wrong :/</Styles.ErrorInfo>
        <Styles.ErrorImage
          src="https://www.svgrepo.com/show/434052/dissapointed-face.svg"
          alt="ErrorImage"
        />
        <Button onClick={handleClick} variant="contained" size="large">
          Refresh Page
        </Button>
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default ErrorLayout;
