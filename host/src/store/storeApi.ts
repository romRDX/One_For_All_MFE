import { store } from ".";
import { navigationSlice } from "./domains/navigation/navigation.slice";
import { userSlice } from "./domains/user/user.slice";
import { createSliceApi } from "./shared/createSliceApi";

export const storeApi = {
  getState: store.getState,
  dispatch: store.dispatch,
  subscribe: store.subscribe,

  navigation: createSliceApi(navigationSlice.actions, store.dispatch),
  user: createSliceApi(userSlice.actions, store.dispatch),
};

export type StoreApi = typeof storeApi;
