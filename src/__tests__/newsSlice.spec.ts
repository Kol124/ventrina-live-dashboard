import newsSliceReducer from "../app/slices/news";

test("Should return initial state", () => {
  expect(newsSliceReducer(undefined, { type: "unknown" })).toEqual({
    newsData: [],
  });
});
