import { configureStore } from "@reduxjs/toolkit";
import  AppSlice  from "./AppSlice";
import CacheSlice from "./CacheSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
    cache:CacheSlice.reducer,
  },
});

export default store;
