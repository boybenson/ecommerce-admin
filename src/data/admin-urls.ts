import {
  CurrencyBangladeshiIcon,
  InboxStackIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const AdminUrls = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Orders",
    path: "/orders",
  },
  {
    label: "Broadcast Messages",
    path: "/broadcast-messages",
  },
];

export const dashboardData = [
  {
    label: "Total Revenue",
    value: `GHC 300`,
    Icon: CurrencyBangladeshiIcon,
  },
  {
    label: "Total Customers",
    value: `180`,
    Icon: UserGroupIcon,
  },
  {
    label: "Total Products",
    value: `450`,
    Icon: InboxStackIcon,
  },
  {
    label: "Total Orders",
    value: `100`,
    Icon: ShoppingCartIcon,
  },
];
