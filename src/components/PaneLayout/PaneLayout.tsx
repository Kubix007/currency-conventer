import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getCurrencyToReceive } from "../../features/currency/currencySlice";
import CurrencyForm from "../CurrencyForm";
import ResultDisplay from "../ResultDisplay";
import * as Styles from "./PaneLayout.styles";

const PaneLayout = () => {
  const dispatch: AppDispatch = useDispatch();
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );

  useEffect(() => {
    dispatch(
      getCurrencyToReceive({
        table: currencyToReceive.table,
        code: currencyToReceive.currencyCode,
      }) //We are changing state for repsonse from API
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.BoxContainer>
      <Styles.StackContainer spacing={5}>
        <CurrencyForm />
        <ResultDisplay />
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
