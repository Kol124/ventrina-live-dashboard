import { Outlet } from "react-router-dom";
// @mui
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar, { DrawerHeader } from "./Sidebar";

export default function Layout() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background: theme.palette.grey["200"],
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
