import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import stepSlice from "./slices/steps";

const store = configureStore({
  reducer: {
    user: userSlice,
    step: stepSlice,
  },
});

export default store;
