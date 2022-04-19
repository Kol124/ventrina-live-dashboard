import * as React from "react";
// @mui
import { CssBaseline } from "@mui/material";
import ComponentOverrides from "./overrides";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

const FONT_PRIMARY: string = "Noto Sans HK, sans-serif";
const FONT_SECONDARY: string = "Source Sans Pro, sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#21B8F9",
      dark: "#103B66",
      light: "#f7f7f7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#103B66",
      dark: "#000032",
      light: "#E9F8FE",
      contrastText: "#00C48C",
    },
    error: {
      main: "#F33451",
    },
    grey: {
      200: "#f8f9fb",
      500: "#6C7C8C",
      600: "#666666",
      900: "#233B53",
    },
  },
  typography: {
    fontFamily: FONT_PRIMARY,
    h3: {
      fontFamily: FONT_SECONDARY,
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: FONT_SECONDARY,
      fontWeight: 500,
      fontSize: "1.063rem",
    },
    subtitle2: {
      fontWeight: 400,
    },
    overline: {
      fontSize: 11,
    },
  },
});

theme.components = ComponentOverrides(theme);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
