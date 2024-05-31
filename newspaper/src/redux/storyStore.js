import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    imageStory: "",
    linkStory: "",
  },
  reducers: {
    setData: (state, action) => {
      state.imageStory = action.payload.imageStory;
      state.linkStory = action.payload.linkStory;
    },
  },
});

export const { setData } = storySlice.actions;

export const selectImageStory = (state) => state.story.imageStory;
export const selectLinkStory = (state) => state.story.linkStory;

export default storySlice.reducer;
