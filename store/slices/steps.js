import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    step_one: false,
    step_two: false,
    step_three: false,
    step_four: false,
    step_five: false,
    step_six: false,
  },
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    addStep: (state, action) => {
      state.value[action.payload.key] = true;
    },
    gotoFirstState: (state) => {
      state.value = {
        step_one: false,
        step_two: false,
        step_three: false,
        step_four: false,
        step_five: false,
        step_six: false,
      };
    },
  },
});

export const { addStep,gotoFirstState } = stepSlice.actions;
export default stepSlice.reducer;
