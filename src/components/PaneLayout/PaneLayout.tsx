import { useState } from "react";
import CurrencyFormToSend from "../CurrencyForm";
import CurrencyFormToReceive from "../CurrencyForm";
import ResultDisplay from "../ResultDisplay";
import * as Styles from "./PaneLayout.styles";

const PaneLayout = () => {
  const [anchorElSend, setAnchorElSend] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElReceive, setAnchorElReceive] =
    useState<HTMLButtonElement | null>(null);

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
