import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addexperience: (state, action) => {
      state.value = action.payload;
    },
    updateDetails: (state, action) => {
      const existingData = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (existingData) {
        const updatedDataArray = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...item, data: action.payload.newData }
            : item
        );
        state.value = updatedDataArray;
      }
    },
  },
});

export const { addexperience, updateDetails } = experienceSlice.actions;
export default experienceSlice.reducer;
