import appReducer, { AppState, setIsOpen } from "../app/slices/app";

describe("app reducer", () => {
  const initialState: AppState = {
    isOpen: false,
  };

  it("Should return initial state", () => {
    expect(appReducer(undefined, { type: "unknown" })).toEqual({
      isOpen: false,
    });
  });

  it("should change open state", () => {
    const state = appReducer(initialState, setIsOpen());
    expect(state.isOpen).toEqual(true);
  });
});
