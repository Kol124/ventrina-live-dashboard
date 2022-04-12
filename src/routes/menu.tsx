import { MenuType } from "../interfaces";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import paths from "./paths";

const menu: MenuType[] = [
  {
    title: paths.dashboard.title,
    path: paths.dashboard.path,
    icon: <MailIcon />,
  },
  {
    title: paths.catalogue.title,
    children: paths.catalogue.children,
    icon: <InboxIcon />,
  },
  {
    title: paths.orders.title,
    path: paths.orders.path,
    icon: <MailIcon />,
  },
  {
    title: paths.customers.title,
    path: paths.customers.path,
    icon: <InboxIcon />,
  },
  {
    title: paths.marketing.title,
    children: paths.marketing.children,
    icon: <MailIcon />,
  },
  {
    title: paths.deliveryOptions.title,
    path: paths.deliveryOptions.path,
    icon: <InboxIcon />,
  },
  {
    title: paths.paymentOptions.title,
    path: paths.paymentOptions.path,
    icon: <MailIcon />,
  },
  {
    title: paths.storeDesign.title,
    path: paths.storeDesign.path,
    icon: <MailIcon />,
  },
  {
    title: paths.subscription.title,
    path: paths.subscription.path,
    icon: <InboxIcon />,
  },
  {
    title: paths.integrations.title,
    path: paths.integrations.path,
    icon: <MailIcon />,
  },
  {
    title: paths.extensions.title,
    path: paths.extensions.path,
    icon: <InboxIcon />,
  },
  {
    title: paths.settings.title,
    path: paths.settings.path,
    icon: <MailIcon />,
  },
  {
    title: paths.logout.title,
    path: paths.logout.path,
    icon: <MailIcon />,
  },
];

export default menu;
