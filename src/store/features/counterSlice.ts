import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counter.actions;
export default counter.reducer;
