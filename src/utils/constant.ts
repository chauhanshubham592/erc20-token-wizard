import {
  discordLogo,
  githubLogo,
  linkCircleLogo,
  telegramLogo,
  twitterLogo,
} from "../assets";

interface TokenDetails {
  [key: number]: {
    decimals: number;
    label: string;
  };
}

export const THEME_LOCAL_STORAGE_KEY = "theme-mode";

export const TOKEN_PRICE_PRECISION = 4;

export const NATIVE_TOKEN_DETAILS: TokenDetails = {
  1: {
    decimals: 18,
    label: "ETH",
  },

  5: {
    decimals: 18,
    label: "ETH",
  },
  97: {
    decimals: 18,
    label: "BNB",
  },
  11155111: {
    decimals: 18,
    label: "ETH",
  },
};

export const SOCIAL_MEDIAS = [
  {
    id: "discord",
    icon: discordLogo,
  },
  {
    id: "twitter",
    icon: twitterLogo,
  },
  {
    id: "telegram",
    icon: telegramLogo,
  },
  {
    id: "github",
    icon: githubLogo,
  },
  {
    id: "circleLink",
    icon: linkCircleLogo,
  },
];
