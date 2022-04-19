import { Theme } from "@mui/material/styles";

export default function Menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            background: theme.palette.primary.light,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  };
}
