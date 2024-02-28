import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    step_one: false,
    step_two: false,
    step_three: false,
    step_four: false,
  },
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    addStep: (state, action) => {
      state.value[action.payload.key] = true;
    },
  },
});

export const { addStep } = stepSlice.actions;
export default stepSlice.reducer;
