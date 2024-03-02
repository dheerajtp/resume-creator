import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addproject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addproject } = projectSlice.actions;
export default projectSlice.reducer;
