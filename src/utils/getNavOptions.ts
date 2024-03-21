import { downArrowLogo, externalLinkLogo } from "../assets";

export interface INavOption {
  id: string;
  label: string;
  link?: string;
  isActive?: boolean;
  isExternal?: boolean;
  isDropDown?: boolean;
  icon?: string;
  iconStyle?: { height: number; width: number };
  subLinks?: { id: string; link: string; label: string }[];
}

interface NavOptionPayload {
  pathname: string;
}

export const getNavOptions = ({ pathname }: NavOptionPayload): INavOption[] => [
  {
    id: "home",
    label: "Home",
    link: "/",
    isActive: pathname === "/",
  },
  {
    id: "demeter",
    label: "Demeter",
    icon: externalLinkLogo,
    link: "https://www.google.com/",
    isExternal: true,
  },
  {
    id: "guage",
    label: "Guage",
    link: "/guage",
    isActive: pathname === "/guage",
  },
  {
    id: "stake",
    label: "Stake",
    link: "/stake",
    isActive: pathname === "/stake",
  },
  {
    id: "buyback",
    label: "Buyback",
    link: "/buyback",
    isActive: pathname === "/buyback",
  },
  {
    id: "swap",
    label: "Swap",
    link: "/swap",
    isActive: pathname === "/swap",
  },
  {
    id: "more",
    label: "More",
    icon: downArrowLogo,
    isDropDown: true,
    iconStyle: {
      width: 10,
      height: 10,
    },
    isActive:
      pathname === "/link1" || pathname === "/link2" || pathname === "/link3",
    subLinks: [
      {
        id: "link1",
        link: "/link1",
        label: "Link 1",
      },
      {
        id: "link2",
        link: "/link2",
        label: "Link 2",
      },
      {
        id: "link3",
        link: "/link3",
        label: "Link 3",
      },
    ],
  },
];
