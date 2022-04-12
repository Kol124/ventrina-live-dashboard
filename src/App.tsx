import Router from "./routes";
import {
  Theme,
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme();

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
