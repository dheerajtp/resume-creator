import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const collegesSlice = createSlice({
  name: "colleges",
  initialState,
  reducers: {
    addcolleges: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addcolleges } = collegesSlice.actions;
export default collegesSlice.reducer;
