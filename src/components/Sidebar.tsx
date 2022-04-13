import * as React from "react";
// @mui
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { styled as MuiStyled } from "@mui/styles";
import MuiDrawer from "@mui/material/Drawer";
import { SvgIcon } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// Components
import NavList from "./NavList";
// Nav Menu
import menu from "../routes/menu";
import { ReactComponent as Logo } from "../assets/logo.svg";

const drawerWidth = 255;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const DrawerHeader = MuiStyled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  height: 60,
  boxShadow: "none",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  width: `calc(100% - (calc(${theme.spacing(7)} + 1px)))`,
  border: `1px solid ${theme.palette.grey["200"]}`,
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(() => !open);
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: theme.palette.primary.dark,
          }}
        >
          Dashboard
        </Typography>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <SvgIcon
            component={Logo}
            inheritViewBox
            sx={{
              marginLeft: 2,
              width: 90.4,
              display: open ? "block" : "none",
            }}
          />
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <NavList open={open} menu={menu} />
      </Drawer>
    </>
  );
}

export { DrawerHeader };
