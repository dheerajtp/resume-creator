import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addskills: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addskills } = skillsSlice.actions;
export default skillsSlice.reducer;
