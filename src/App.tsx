import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { getCurrency } from "./features/currency/currencySlice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { currency } = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return <div className="App">{currency.currency}</div>;
}

export default App;
