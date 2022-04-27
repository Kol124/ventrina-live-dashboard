import { FC, ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// slices
import appReducer from "./app/slices/app";
import newsReducer from "./app/slices/news";
// theme
import ThemeProvider from "./theme";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

interface WrapperProps {
  children?: React.ReactNode;
}

function render(
  ui: ReactElement,
  {
    store = configureStore({
      reducer: {
        app: appReducer,
        news: newsReducer,
      },
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC = ({ children }: WrapperProps) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
