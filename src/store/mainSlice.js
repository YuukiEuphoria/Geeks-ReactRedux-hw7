import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    mainInfo: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { mainInfo } = mainSlice.actions;

export default mainSlice.reducer;
