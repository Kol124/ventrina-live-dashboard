import CssBaseline from "./CssBaseline";
import { Theme } from "@mui/material/styles";

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    CssBaseline(theme)
    // Autocomplete(theme),
    // ControlLabel(theme),
    // ToggleButton(theme),
  );
}
