import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    githubUrl: "",
    linkedInUrl: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addprofile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addprofile } = profileSlice.actions;
export default profileSlice.reducer;
