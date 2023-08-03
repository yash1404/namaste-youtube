import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    isToggle: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
  },
});

export default AppSlice;
