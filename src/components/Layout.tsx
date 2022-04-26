import { Outlet } from "react-router-dom";
// @mui
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar, { DrawerHeader } from "./Sidebar";
// redux
import { useAppSelector } from "../app/hooks";
import { selectIsOpen } from "../app/slices/app";

export default function Layout() {
  const theme = useTheme();
  const isOpen = useAppSelector(selectIsOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "auto",
          position: "fixed",
          background: theme.palette.grey["200"],
          width: `calc(100% - (calc(${theme.spacing(8)} + 1px)))`,
          marginLeft: isOpen ? 255 : `calc(${theme.spacing(8)} + 1px)`,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
