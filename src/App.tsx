import Router from "./routes";
// theme
import ThemeProvider from "./theme";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
