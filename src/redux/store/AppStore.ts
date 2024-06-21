import { configureStore } from "@reduxjs/toolkit";
import   getData, { setLoading } from "../slice/data";
export const store = configureStore({
  reducer: {
    setdata: getData,
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
