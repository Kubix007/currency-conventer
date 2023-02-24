import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "../features/currency/currencySlice";
import autocompleteSlice from "../features/autocomplete/autocompleteSlice";
import textFieldSlice from "../features/textfield/textFieldSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    autocomplete: autocompleteSlice,
    textfield: textFieldSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
