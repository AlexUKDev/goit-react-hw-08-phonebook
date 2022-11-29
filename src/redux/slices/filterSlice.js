import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { updateFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
