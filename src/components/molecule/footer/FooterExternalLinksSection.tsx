import React from "react";
import {
  bridgeLogo,
  chameleonLogo,
  mLogo,
  rightArrowLogo,
  spaArbitrumLogo,
  swapLogo,
  usdArbitrumLogo,
  veSpaLogo,
  wspaLogo,
} from "../../../assets";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FooterLinksWithLabel } from "./FooterLinksWithLabel";

// --------------------------------------------------------------------

const ExternalLogos = () => {
  return (
    <Stack direction="row" gap={2}>
      <Box
        component={"img"}
        src={mLogo}
        alt="..."
        sx={{ height: 24, width: 24 }}
      />
      <Box
        component={"img"}
        src={chameleonLogo}
        alt="..."
        sx={{ height: 24, width: 24 }}
      />
    </Stack>
  );
};

// --------------------------------------------------------------------

const ExternalLabels = () => {
  return (
    <Stack direction="column" gap={1}>
      <Stack direction="row" alignItems="center" gap={2}>
        <Box
          component={"img"}
          src={swapLogo}
          alt="..."
          sx={{ height: 24, width: 24 }}
        />
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography sx={{ color: "#404B51", fontSize: 13, fontWeight: 700 }}>
            SPA
          </Typography>
          <Box
            component={"img"}
            src={rightArrowLogo}
            alt="..."
            sx={{ height: 16, width: 16 }}
          />
          <Typography sx={{ color: "#404B51", fontSize: 13, fontWeight: 700 }}>
            wSPA
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" gap={2}>
        <Box
          component={"img"}
          src={bridgeLogo}
          alt="..."
          sx={{ height: 24, width: 24 }}
        />
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography sx={{ color: "#404B51", fontSize: 13, fontWeight: 700 }}>
            Sperax- Arbitrum Bridge
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

// --------------------------------------------------------------------

const FOOTER_EXTERNAL_LINKS = [
  {
    id: "1",
    label: "USDs Arbitrum",
    logo: usdArbitrumLogo,
    component: <ExternalLogos />,
  },
  {
    id: "2",
    label: "SPA Arbitrum",
    logo: spaArbitrumLogo,
    shouldShowDropDown: true,
    component: <ExternalLogos />,
  },
  {
    id: "3",
    label: "veSPA Arbitrum",
    logo: veSpaLogo,
    shouldShowDropDown: true,
  },
  {
    id: "4",
    label: "wSPA Ethereum",
    logo: wspaLogo,
    component: <ExternalLabels />,
  },
];

// --------------------------------------------------------------------

export const FooterExternalLinksSection: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      {FOOTER_EXTERNAL_LINKS.map((item) => {
        return (
          <FooterLinksWithLabel
            key={item.id}
            primaryLogo={item.logo}
            primaryText={item.label}
            shouldShowDropDown={item.shouldShowDropDown}
            component={item?.component}
          />
        );
      })}
    </Stack>
  );
};
