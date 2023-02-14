import { Container, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import PaneLayout from "./components/PaneLayout";
import { getCurrency } from "./features/currency/currencySlice";
import * as Styles from "./App.styles";

function App() {
  const dispatch: AppDispatch = useDispatch();
  //const { currency } = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

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
