import * as Styles from "./PaneLayout.styles";
import * as SharedStyles from "../../shared/types";
import { useState } from "react";
import CurrencyFormToSend from "../CurrencyForm";
import CurrencyFormToReceive from "../CurrencyForm";

const PaneLayout = () => {
  const [anchorElSend, setAnchorElSend] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElReceive, setAnchorElReceive] =
    useState<HTMLButtonElement | null>(null);

  return (
    <Styles.BoxContainer>
      <Styles.StackContainer>
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
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
