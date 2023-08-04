import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    chatMessage: (state, action) => {
      state.message.splice(25,1)
      state.message.unshift(action.payload);
    },
  },
});

export default ChatSlice