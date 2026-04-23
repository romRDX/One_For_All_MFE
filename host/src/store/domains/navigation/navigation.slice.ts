import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { NavigationState } from "./navigation.types";

const initialState: NavigationState = {
  page: "home",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export default navigationSlice.reducer;
