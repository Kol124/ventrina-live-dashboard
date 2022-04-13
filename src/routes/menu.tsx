import { MenuType } from "../interfaces";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import paths from "./paths";

const menu: MenuType[] = [
  {
    title: paths.dashboard.title,
    path: paths.dashboard.path,
    icon: <HomeOutlinedIcon />,
  },
  {
    title: paths.catalogue.title,
    path: "",
    children: paths.catalogue.children,
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    title: paths.orders.title,
    path: paths.orders.path,
    icon: <ListOutlinedIcon />,
  },
  {
    title: paths.customers.title,
    path: paths.customers.path,
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    title: paths.marketing.title,
    path: "",
    children: paths.marketing.children,
    icon: <TrackChangesOutlinedIcon />,
  },
  {
    title: paths.deliveryOptions.title,
    path: paths.deliveryOptions.path,
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    title: paths.paymentOptions.title,
    path: paths.paymentOptions.path,
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    title: paths.storeDesign.title,
    path: paths.storeDesign.path,
    icon: <BrushOutlinedIcon />,
  },
  {
    title: paths.subscription.title,
    path: paths.subscription.path,
    icon: <CreditCardOutlinedIcon />,
  },
  {
    title: paths.integrations.title,
    path: paths.integrations.path,
    icon: <LanguageOutlinedIcon />,
  },
  {
    title: paths.extensions.title,
    path: paths.extensions.path,
    icon: <GridViewOutlinedIcon />,
  },
  {
    title: paths.settings.title,
    path: paths.settings.path,
    icon: <SettingsOutlinedIcon />,
  },
  {
    title: paths.logout.title,
    path: paths.logout.path,
    icon: <LogoutOutlinedIcon />,
  },
];

export default menu;
