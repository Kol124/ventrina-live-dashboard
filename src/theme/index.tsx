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
      contrastText: "#fff",
    },
    secondary: {
      main: "#00C48C",
      dark: "#000032",
    },
    grey: {
      200: "#E5E5E5",
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
    },
    // Subtitle1 --> green/ secondary
    // subtitlt2 ---> 14px 0.875
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
