import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import stepSlice from "./slices/steps";
import experienceSlice from "./slices/experience";
import projectSlice from "./slices/projects";
import achievementsSlice from "./slices/achievements";
import skillsSlice from "./slices/skills";
import profileSlice from "./slices/profile";
import collegeSlice from "./slices/college";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
  whitelist: [
    "user",
    "step",
    "experience",
    "project",
    "achievements",
    "skills",
    "profile",
    "colleges",
  ],
};

const rootReducer = combineReducers({
  user: userSlice,
  step: stepSlice,
  experience: experienceSlice,
  project: projectSlice,
  achievements: achievementsSlice,
  skills: skillsSlice,
  profile: profileSlice,
  colleges: collegeSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export default store;
export const persistor = persistStore(store);
