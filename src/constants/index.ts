import MainstackLogo from "@assets/images/mainstack-logo.svg";
import homeIcon from "@assets/icons/home.svg";
import analyticsIcon from "@assets/icons/analytics.svg";
import revenueIcon from "@assets/icons/revenue.svg";
import crmIcon from "@assets/icons/crm.svg";
import appsIcon from "@assets/icons/app.svg";
import Received from "@assets/icons/call_received.svg";
import Outgoing from "@assets/icons/call_made.svg";
import Close from "@assets/icons/close.svg";
import Expand from "@assets/icons/expand_more.svg";
import Download from "@assets/icons/download.svg";
import Info from "@assets/icons/info.svg";
import Notificiation from "@assets/icons/notifications.svg";
import Chat from "@assets/icons/chat.svg";
import Menu from "@assets/icons/menu.svg";

import { INavItem } from "types/nav";

export const IMAGES = { MainstackLogo };
export const ICONS = {
  homeIcon,
  analyticsIcon,
  revenueIcon,
  crmIcon,
  appsIcon,
  Received,
  Outgoing,
  Close,
  Expand,
  Download,
  Info,
  Notificiation,
  Chat,
  Menu,
};

export const NAV_LINK_DATA: INavItem[] = [
  {
    name: "Home",
    icon: homeIcon,
    uri: "/",
  },
  {
    name: "Analytics",
    icon: analyticsIcon,
    uri: "/analytics",
  },
  {
    name: "Revenue",
    icon: revenueIcon,
    uri: "/revenue",
  },
  {
    name: "CRM",
    icon: crmIcon,
    uri: "/crm",
  },
  {
    name: "Apps",
    icon: appsIcon,
    uri: "/apps",
  },
];
