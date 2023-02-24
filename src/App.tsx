import { Container, Paper } from "@mui/material";
import PaneLayout from "./components/PaneLayout";
import * as Styles from "./App.styles";

function App() {
  return (
    <Styles.App>
      <Container maxWidth="sm">
        <Styles.Center>
          <Paper elevation={20}>
            <PaneLayout />
          </Paper>
        </Styles.Center>
      </Container>
    </Styles.App>
  );
}

export default App;
