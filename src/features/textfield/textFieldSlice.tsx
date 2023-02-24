import { createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";

const initialState: SharedTypes.ITextFieldState = {
  currencyToSend: "",
  currencyToReceive: "",
};

export const textFieldSlice = createSlice({
  name: "textfield",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setTextFieldToReceive: (state, action) => {
      state.currencyToReceive = action.payload;
    },
    setTextFieldToSend: (state, action) => {
      state.currencyToSend = action.payload;
    },
  },
});

export const { reset, setTextFieldToReceive, setTextFieldToSend } =
  textFieldSlice.actions;
export default textFieldSlice.reducer;
