import CurrencyPopover from "../CurrencyPopover";
import CurrencyTextField from "../CurrencyTextField";
import * as Types from "./CurrencyForm.types";

const CurrencyForm = ({
  currency,
  setCurrency,
  setAnchorEl,
  anchorEl,
  name,
}: Types.ICurrencyFormProps) => {
  return (
    <>
      <CurrencyTextField
        name={name}
        currency={currency}
        setAnchorEl={setAnchorEl}
      />
      <CurrencyPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        currency={currency}
        setCurrency={setCurrency}
      />
    </>
  );
};

export default CurrencyForm;
