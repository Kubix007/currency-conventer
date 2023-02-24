import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICurrenciesState } from "../../shared/types";
import currencyService from "./currencyService";
import * as SharedTypes from "../../shared/types";

const initialState: ICurrenciesState = {
  currencies: {
    currencyToSend: {
      table: "a",
      currency: "Złotych",
      code: "PLN",
      rates: [
        {
          no: "",
          effectiveDate: "",
          mid: 1,
        },
      ],
    },
    currencyToReceive: {
      table: "a",
      currency: "Pound Sterling",
      code: "GBP",
      rates: [
        {
          no: "",
          effectiveDate: "",
          mid: 0,
        },
      ],
    },
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get currency
export const getCurrencyToSend = createAsyncThunk(
  "/currency/getCurrencyToSend",
  async (data: SharedTypes.IRequestData, thunkAPI) => {
    try {
      return await currencyService.getCurrency(data);
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

//Get currency
export const getCurrencyToReceive = createAsyncThunk(
  "/currency/getCurrencyToReceive",
  async (data: SharedTypes.IRequestData, thunkAPI) => {
    try {
      return await currencyService.getCurrency(data);
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
    resetCurrencyToSend: (state) => {
      state.currencies.currencyToSend = {
        table: "a",
        currency: "Złotych",
        code: "PLN",
        rates: [
          {
            no: "",
            effectiveDate: "",
            mid: 1,
          },
        ],
      };
    },
    resetCurrencyToReceive: (state) => {
      state.currencies.currencyToReceive = {
        table: "a",
        currency: "Złotych",
        code: "PLN",
        rates: [
          {
            no: "",
            effectiveDate: "",
            mid: 1,
          },
        ],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrencyToSend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrencyToSend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.currencies.currencyToSend = action.payload;
      })
      .addCase(getCurrencyToSend.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getCurrencyToReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrencyToReceive.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.currencies.currencyToReceive = action.payload;
      })
      .addCase(getCurrencyToReceive.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset, resetCurrencyToReceive, resetCurrencyToSend } =
  currencySlice.actions;
export default currencySlice.reducer;
