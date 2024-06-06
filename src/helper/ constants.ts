import { IconType } from "react-icons";
import { CiSettings } from "react-icons/ci";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";

export interface SideBarInterface {
  icon: IconType;
  title: string;
}

export const sidebarLinks: SideBarInterface[] = [
  {
    icon: IoHomeOutline,
    title: "Home",
  },
  {
    icon: CiSettings,
    title: "Activity",
  },
  {
    icon: RiCompassDiscoverLine,
    title: "Discover",
  },
  {
    icon: IoSettingsOutline,
    title: "Setting",
  },
];

interface TrendingTopics {
  title: string;
  body: string;
}

export const trendingTopics: TrendingTopics[] = [
  {
    title: "Hashtag Research",
    body: "Upgrade to pro subscription for $9/month",
  },
  {
    title: "Hashtag Research",
    body: "Upgrade to pro subscription for $9/month",
  },
];

export interface HistoryInterface {
  icon: IconType;
  title: string;
  date: string;
}

export const historyData: HistoryInterface[] = [
  {
    icon: MdEmail,
    title: "Email Sent",
    date: "July 2, 2021 8am",
  },

  {
    icon: MdEmail,
    title: "Email Opened",
    date: "July 2, 2021 8am",
  },
  {
    icon: MdEmail,
    title: "Email Sent",
    date: "July 2, 2021 8am",
  },
  {
    icon: MdEmail,
    title: "Visit website",
    date: "July 2, 2021 8am",
  },
  {
    icon: MdEmail,
    title: "Email Sent",
    date: "July 2, 2021 8am",
  },
];
