import { PathsType } from "../interfaces";

function getPath(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const CATALOGUE: string = "/catalogue";
const MARKETING: string = "/marketing";

const paths: PathsType = {
  dashboard: {
    title: "Dashboard",
    path: "/",
  },
  catalogue: {
    title: "Catalogue",
    children: [
      {
        title: "Item 1",
        path: getPath(CATALOGUE, "/item-1"),
      },
      {
        title: "Item 2",
        path: getPath(CATALOGUE, "/item-2"),
      },
      {
        title: "Item 3",
        path: getPath(CATALOGUE, "/item-3"),
      },
    ],
  },
  orders: {
    title: "Orders",
    path: "/orders",
  },
  customers: {
    title: "Customers",
    path: "/customers",
  },
  marketing: {
    title: "Marketing",
    children: [
      {
        title: "Discount codes",
        path: getPath(MARKETING, "discount-codes"),
      },
      {
        title: "Exit intent",
        path: getPath(MARKETING, "exit-intent"),
      },
      {
        title: "Checkout features",
        path: getPath(MARKETING, "checkout-features"),
      },
      {
        title: "Post-purchase conversion",
        path: getPath(MARKETING, "post-purchase-conversion"),
      },
      {
        title: "Cart abandonment",
        path: getPath(MARKETING, "cart-abandonment"),
      },
      {
        title: "Timer checkout",
        path: getPath(MARKETING, "timer-checkout"),
      },
      {
        title: "Sell on social",
        path: getPath(MARKETING, "sell-on-social"),
      },
      {
        title: "Special offer",
        path: getPath(MARKETING, "special-offer"),
      },
      {
        title: "Seasonal offer",
        path: getPath(MARKETING, "seasonal-offer"),
      },
    ],
  },
  deliveryOptions: {
    title: "Delivery Options",
    path: "/delivery-options",
  },
  paymentOptions: {
    title: "Payment Options",
    path: "/payment-options",
  },
  storeDesign: {
    title: "Store Design",
    path: "/store-design",
  },
  subscription: {
    title: "Subscription",
    path: "/subscription",
  },
  integrations: {
    title: "Integrations",
    path: "/integrations",
  },
  extensions: {
    title: "Extensions",
    path: "/extensions",
  },
  settings: {
    title: "Settings",
    path: "/settings",
  },
  logout: {
    title: "Log out",
    path: "logout",
  },
};

export default paths;
