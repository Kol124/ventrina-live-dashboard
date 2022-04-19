import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AppState {
  isOpen: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  isOpen: false,
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsOpen: (state: AppState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setIsLoading: (state: AppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsOpen, setIsLoading } = appSlice.actions;
export const selectIsOpen = (state: RootState) => state.app.isOpen;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export default appSlice.reducer;
