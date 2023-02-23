import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "../features/currency/currencySlice";
import autocompleteSlice from "../features/autocomplete/autocompleteSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    autocomplete: autocompleteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
