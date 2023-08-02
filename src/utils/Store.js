import { configureStore } from "@reduxjs/toolkit";
import  AppSlice  from "./AppSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
  },
});

export default store;
