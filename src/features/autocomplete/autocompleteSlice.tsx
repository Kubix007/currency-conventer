import { createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";

const initialState: SharedTypes.IAutocompleteState = {
  currencyToSend: {
    countryCode: "pl",
    countryName: "Poland",
    currencyCode: "PLN",
    currencyName: "Złotówka",
    table: "a",
  },
  currencyToReceive: {
    countryCode: "gb",
    countryName: "United Kingdom",
    currencyCode: "GBP",
    currencyName: "Pound Sterling",
    table: "a",
  },
};

export const autocompleteSlice = createSlice({
  name: "autocomplete",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setCurrencyToReceive: (state, action) => {
      state.currencyToReceive = action.payload;
    },
    setCurrencyToSend: (state, action) => {
      state.currencyToSend = action.payload;
    },
  },
});

export const { reset, setCurrencyToReceive, setCurrencyToSend } =
  autocompleteSlice.actions;
export default autocompleteSlice.reducer;
