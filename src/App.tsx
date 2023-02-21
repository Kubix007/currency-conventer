import { Container, Paper } from "@mui/material";
import PaneLayout from "./components/PaneLayout";
import * as Styles from "./App.styles";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Styles.Center>
          <Paper elevation={20}>
            <PaneLayout />
          </Paper>
        </Styles.Center>
      </Container>
    </div>
  );
}

export default App;
