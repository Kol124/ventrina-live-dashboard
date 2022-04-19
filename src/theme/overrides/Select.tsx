//
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDown,
      },
    },
  };
}
