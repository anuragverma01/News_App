import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "setdata",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
      console.log("Action Playload !!!! from DATA", action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { getData,setLoading,setError } = dataSlice.actions;
export default dataSlice.reducer;
