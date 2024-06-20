import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CourseState {
  data: any;
}

const initialState: CourseState = {
  data: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
        console.log("Action Playload !!!! from DATA", action.payload);
    },
  },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
