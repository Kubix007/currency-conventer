import * as Styles from "./PaneLayout.styles";
import * as SharedStyles from "../../shared/types";
import { useState } from "react";
import CurrencyForm from "../CurrencyForm";

const PaneLayout = () => {
  const [anchorElSend, setAnchorElSend] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElReceive, setAnchorElReceive] =
    useState<HTMLButtonElement | null>(null);

  const [currencyToSend, setCurrencyToSend] =
    useState<SharedStyles.ICountryType>({
      countryCode: "pl",
      countryName: "Poland",
      currencyCode: "PLN",
      currencyName: "Złotówka",
      table: "a",
    });

  const [currencyToReceive, setCurrencyToReceive] =
    useState<SharedStyles.ICountryType>({
      countryCode: "gb",
      countryName: "United Kingdom",
      currencyCode: "GBP",
      currencyName: "Pound Sterling",
      table: "a",
    });

  return (
    <Styles.BoxContainer>
      <Styles.StackContainer>
        <CurrencyForm
          name="You send"
          currency={currencyToSend}
          setCurrency={setCurrencyToSend}
          anchorEl={anchorElSend}
          setAnchorEl={setAnchorElSend}
        />
        <CurrencyForm
          name="They receive"
          currency={currencyToReceive}
          setCurrency={setCurrencyToReceive}
          anchorEl={anchorElReceive}
          setAnchorEl={setAnchorElReceive}
        />
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
