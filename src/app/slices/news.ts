import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ParseNewsData } from "../../utils";
import { fetchData } from "../../api/index";
import { NewsType } from "../../interfaces";
import { setIsLoading } from "./app";
import { RootState } from "../store";

interface NewsState {
  newsData: NewsType[];
}

const initialState: NewsState = {
  newsData: [],
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setIsLoading(true));

    try {
      const res = await fetchData();
      dispatch(setIsLoading(false));
      return res;
    } catch (err) {
      dispatch(setIsLoading(false));
      return rejectWithValue(err);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      const res = ParseNewsData(action.payload);
      state.newsData = res;
    });
  },
});

export default newsSlice.reducer;
export const selectNewsData = (state: RootState) => state.news.newsData;
