import { useState } from "react";
import { CurrencyPopoverToReceive } from "../CurrencyPopover";
import { CurrencyPopoverToSend } from "../CurrencyPopover";
import CurrencyToReceiveTextField from "../CurrencyToReceiveTextField";
import CurrencyToSendTextField from "../CurrencyToSendTextField";

const CurrencyForm = () => {
  const [anchorElSend, setAnchorElSend] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElReceive, setAnchorElReceive] =
    useState<HTMLButtonElement | null>(null);
  return (
    <>
      <CurrencyToSendTextField setAnchorEl={setAnchorElSend} />
      <CurrencyToReceiveTextField setAnchorEl={setAnchorElReceive} />
      <CurrencyPopoverToSend
        name="You send"
        anchorEl={anchorElSend}
        setAnchorEl={setAnchorElSend}
      />
      <CurrencyPopoverToReceive
        name="They Receive"
        anchorEl={anchorElReceive}
        setAnchorEl={setAnchorElReceive}
      />
    </>
  );
};

export default CurrencyForm;
