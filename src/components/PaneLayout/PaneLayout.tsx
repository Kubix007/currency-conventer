import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getCurrencyToReceive } from "../../features/currency/currencySlice";
import CurrencyForm from "../CurrencyForm";
import ResultDisplay from "../ResultDisplay";
import ErrorLayout from "../ErrorLayout";
import { toast } from "react-toastify";
import * as Styles from "./PaneLayout.styles";

const PaneLayout = () => {
  const dispatch: AppDispatch = useDispatch();

  const { isError, isSuccess, message, isLoading } = useSelector(
    (state: RootState) => state.currency
  );

  useEffect(() => {
    dispatch(
      getCurrencyToReceive({
        table: "a",
        code: "gbp",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError && !isSuccess && message && !isLoading) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    return <ErrorLayout />;
  }

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
