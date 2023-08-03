import { createSlice } from "@reduxjs/toolkit";

const CacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    cacheSearchData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default CacheSlice;
