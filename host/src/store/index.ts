import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./domains/navigation/navigation.slice";
import userReducer from "./domains/user/user.slice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    user: userReducer,
  },
});

// tipos (importante depois)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
