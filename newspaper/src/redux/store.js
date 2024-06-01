import { configureStore } from "@reduxjs/toolkit";
import { storySlice } from "./storyStore";

const store = configureStore({
  reducer: {
    story: storySlice.reducer,
  },
});

export default store;
