import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    addachievements: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addachievements } = achievementsSlice.actions;
export default achievementsSlice.reducer;
