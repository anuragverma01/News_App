import { configureStore } from "@reduxjs/toolkit";
import   getData from "../slice/data";
export const store = configureStore({
  reducer: {
    data: getData,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
