import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./slices/app";
import newsReducer from "./slices/news";

export const store = configureStore({
  reducer: {
    app: appReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
