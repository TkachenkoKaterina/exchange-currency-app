import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrencyThunk } from './thunk';

export const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrencyThunk.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(fetchBaseCurrencyThunk.rejected, (state, { payload }) => {
        if (payload.haveBaseCurrency) {
          return state;
        }
        state.baseCurrency = 'USD';
      });
  },
});
export const currencyReducer = slice.reducer;

export const { setBaseCurrency } = slice.actions;
