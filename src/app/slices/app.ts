import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AppState {
  isOpen: boolean;
}

const initialState: AppState = {
  isOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsOpen: (state: AppState) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = appSlice.actions;
export const selectIsOpen = (state: RootState) => state.app.isOpen;
export default appSlice.reducer;
