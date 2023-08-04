import { configureStore } from "@reduxjs/toolkit";
import  AppSlice  from "./AppSlice";
import ChatSlice from "./ChatSlice";
import CacheSlice from "./CacheSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
    chat:ChatSlice.reducer,
    cache:CacheSlice.reducer,
  },
});

export default store;
