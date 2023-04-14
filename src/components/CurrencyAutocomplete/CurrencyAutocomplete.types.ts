import * as SharedTypes from "../../shared/types";

export interface ICurrencyAutocompleteProps {
  currency: SharedTypes.ICountryType;
  handleClose: () => void;
  name: string;
}
