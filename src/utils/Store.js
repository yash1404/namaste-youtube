import { configureStore } from "@reduxjs/toolkit";
import  AppSlice  from "./AppSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
    chat:ChatSlice.reducer
  },
});

export default store;
