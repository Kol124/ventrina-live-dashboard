import * as React from "react";
import menu from "../routes/menu";
// @mui
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { styled as MuiStyled } from "@mui/styles";
import MuiDrawer from "@mui/material/Drawer";
import { SvgIcon } from "@mui/material";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// Components
import NavList from "./NavList";
// asset
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ZapIcon } from "../assets/zap.svg";

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
});

const DrawerHeader = MuiStyled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 2),
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
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  width: `calc(100% - (calc(${theme.spacing(7)} + 1px)))`,
  borderBottom: `1px solid ${theme.palette.grey["200"]}`,
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
  // [theme.breakpoints.up("sm")]: {
  //   padding: theme.spacing(0, 6),
  // },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  padding: theme.spacing(4),
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
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: 60 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 17,
                fontWeight: 500,
                color: theme.palette.primary.dark,
              }}
            >
              Dashboard
            </Typography>

            <Badge badgeContent={2} color="error">
              <SvgIcon component={ZapIcon} inheritViewBox />
              <Typography
                sx={{
                  ml: 1,
                  fontSize: 15,
                  display: "inline",
                  color: theme.palette.primary.dark,
                }}
              >
                What's new
              </Typography>
            </Badge>
          </Stack>
        </Container>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          style={{
            justifyContent: open ? "space-between" : "center",
          }}
        >
          <SvgIcon
            component={Logo}
            inheritViewBox
            sx={{
              marginLeft: 1,
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
