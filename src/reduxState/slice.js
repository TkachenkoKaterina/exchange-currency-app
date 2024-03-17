import { createSlice } from "@reduxjs/toolkit";
import { fetchBaseCurrencyThunk } from "./thunk";


export const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: ''
  }
  ,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBaseCurrencyThunk.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload
      })
      .addCase(fetchBaseCurrencyThunk.rejected, (state) => {
        state.baseCurrency = 'USD'
      })
  }

})
export const currencyReducer = slice.reducer
