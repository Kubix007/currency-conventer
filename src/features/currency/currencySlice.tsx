import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICurrencyState } from "../../shared/types";
import currencyService from "./currencyService";

const initialState: ICurrencyState = {
  currency: {
    table: "",
    currency: "",
    code: "",
    rates: [
      {
        no: "",
        effectiveDate: "",
        mid: 0,
      },
    ],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get currency
export const getCurrency = createAsyncThunk(
  "/currency/getOne",
  async (_, thunkAPI) => {
    try {
      return await currencyService.getCurrency();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.currency = action.payload;
      })
      .addCase(getCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = currencySlice.actions;
export default currencySlice.reducer;
