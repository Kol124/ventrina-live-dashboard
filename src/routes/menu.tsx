import paths from "./paths";
// @mui
import SvgIcon from "@mui/material/SvgIcon";
// assets
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as ListIcon } from "../assets/list.svg";
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { ReactComponent as TruckIcon } from "../assets/truck.svg";
import { ReactComponent as TargetIcon } from "../assets/target.svg";
import { ReactComponent as DollarIcon } from "../assets/dollar.svg";
import { ReactComponent as BrushIcon } from "../assets/brush.svg";
import { ReactComponent as CreditIcon } from "../assets/credit-card.svg";
import { ReactComponent as IntegrationsIcon } from "../assets/cog-planet.svg";
import { ReactComponent as ExtensionsIcon } from "../assets/extensions.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { ReactComponent as LogOutIcon } from "../assets/log-out.svg";
import { ReactComponent as SupportIcon } from "../assets/support.svg";
import { ReactComponent as ShareIcon } from "../assets/share.svg";
import { ReactComponent as ViewIcon } from "../assets/view.svg";
// interface
import { MenuType } from "../interfaces";

const menu: MenuType[] = [
  {
    title: paths.dashboard.title,
    path: paths.dashboard.path,
    icon: <SvgIcon component={HomeIcon} inheritViewBox />,
  },
  {
    title: paths.catalogue.title,
    path: "",
    children: paths.catalogue.children,
    icon: <SvgIcon component={CartIcon} inheritViewBox />,
  },
  {
    title: paths.orders.title,
    path: paths.orders.path,
    icon: <SvgIcon component={ListIcon} inheritViewBox />,
  },
  {
    title: paths.customers.title,
    path: paths.customers.path,
    icon: <SvgIcon component={UserIcon} inheritViewBox />,
  },
  {
    title: paths.marketing.title,
    path: "",
    children: paths.marketing.children,
    icon: (
      <SvgIcon component={TargetIcon} inheritViewBox htmlColor="transparent" />
    ),
  },
  {
    title: paths.deliveryOptions.title,
    path: paths.deliveryOptions.path,
    icon: <SvgIcon component={TruckIcon} inheritViewBox />,
  },
  {
    title: paths.paymentOptions.title,
    path: paths.paymentOptions.path,
    icon: <SvgIcon component={DollarIcon} inheritViewBox />,
  },
  {
    title: paths.storeDesign.title,
    path: paths.storeDesign.path,
    icon: <SvgIcon component={BrushIcon} inheritViewBox />,
  },
  {
    title: paths.subscription.title,
    path: paths.subscription.path,
    icon: <SvgIcon component={CreditIcon} inheritViewBox />,
  },
  {
    title: paths.integrations.title,
    path: paths.integrations.path,
    icon: <SvgIcon component={IntegrationsIcon} inheritViewBox />,
  },
  {
    title: paths.extensions.title,
    path: paths.extensions.path,
    icon: <SvgIcon component={ExtensionsIcon} inheritViewBox />,
  },
  {
    title: paths.settings.title,
    path: paths.settings.path,
    icon: <SvgIcon component={SettingsIcon} inheritViewBox />,
  },
  {
    title: paths.logout.title,
    path: paths.logout.path,
    icon: <SvgIcon component={LogOutIcon} inheritViewBox />,
  },
];

const footerMenu: MenuType[] = [
  {
    title: paths.customerSupport.title,
    path: paths.customerSupport.path,
    icon: <SvgIcon component={SupportIcon} inheritViewBox />,
  },
  {
    title: paths.share.title,
    path: paths.share.path,
    icon: <SvgIcon component={ShareIcon} inheritViewBox />,
  },
  {
    title: paths.view.title,
    path: paths.view.path,
    icon: <SvgIcon component={ViewIcon} inheritViewBox />,
  },
];

export { menu as default, footerMenu };
