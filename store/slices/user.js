import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
