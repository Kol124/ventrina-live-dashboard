import { Theme } from "@mui/material/styles";

export default function CssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: "#B7B7B7 transparent",
          "&::-webkit-scrollbar": {
            width: 4,
            height: 6,
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 6,
            backgroundColor: theme.palette.grey["200"],
            minHeight: 24,
            minWidth: 24,
          },
          "&::-webkit-scrollbar-thumb:focus": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
}
