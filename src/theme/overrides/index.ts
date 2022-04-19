import CssBaseline from "./CssBaseline";
import Select from "./Select";
import Menu from "./Menu";
import { Theme } from "@mui/material/styles";

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    CssBaseline(theme),
    Select(theme),
    Menu(theme)
    // ToggleButton(theme)
  );
}
