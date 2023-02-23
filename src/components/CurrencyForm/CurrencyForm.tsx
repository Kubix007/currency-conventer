import CurrencyPopover from "../CurrencyPopover";
import CurrencyTextField from "../CurrencyTextField";
import * as Types from "./CurrencyForm.types";

const CurrencyForm = ({
  setAnchorEl,
  anchorEl,
  name,
}: Types.ICurrencyFormProps) => {
  return (
    <>
      <CurrencyTextField name={name} setAnchorEl={setAnchorEl} />
      <CurrencyPopover
        name={name}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};

export default CurrencyForm;
