import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  data: {},
};

export const dataSlice = createSlice({
  name: "setdata",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
        console.log("Action Playload !!!! from DATA", action.payload);
    },
  },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;