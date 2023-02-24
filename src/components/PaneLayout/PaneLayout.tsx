import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getCurrencyToReceive } from "../../features/currency/currencySlice";
import CurrencyFormToSend from "../CurrencyForm";
import CurrencyFormToReceive from "../CurrencyForm";
import ResultDisplay from "../ResultDisplay";
import * as Styles from "./PaneLayout.styles";

const PaneLayout = () => {
  const dispatch: AppDispatch = useDispatch();
  const { currencyToReceive } = useSelector(
    (state: RootState) => state.autocomplete
  );
  const [anchorElSend, setAnchorElSend] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElReceive, setAnchorElReceive] =
    useState<HTMLButtonElement | null>(null);

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
        <CurrencyFormToSend
          name="You send"
          anchorEl={anchorElSend}
          setAnchorEl={setAnchorElSend}
        />
        <CurrencyFormToReceive
          name="They receive"
          anchorEl={anchorElReceive}
          setAnchorEl={setAnchorElReceive}
        />
        <ResultDisplay />
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
