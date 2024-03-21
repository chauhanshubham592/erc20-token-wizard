import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { copyLogo, downArrowLogo, externalLinkLogo } from "../../../assets";
import { ReactElement } from "react";

interface FooterLinksWithLabelProps {
  primaryLogo: string;
  primaryText: string;
  shouldShowDropDown?: boolean;
  component?: ReactElement;
}

export const FooterLinksWithLabel: React.FC<FooterLinksWithLabelProps> = ({
  primaryLogo,
  primaryText,
  shouldShowDropDown,
  component,
}) => {
  return (
    <Stack gap={3}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Box
          component={"img"}
          src={primaryLogo}
          alt="..."
          sx={{ height: 24, width: 24 }}
        />
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#404B51" }}>
          {primaryText}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1.5}>
          {shouldShowDropDown && (
            <Box
              component={"img"}
              src={downArrowLogo}
              alt="..."
              sx={{ height: 16, width: 16 }}
            />
          )}

          <Box
            component={"img"}
            src={copyLogo}
            alt="..."
            sx={{ height: 16, width: 16 }}
          />
          <Box
            component={"img"}
            src={externalLinkLogo}
            alt="..."
            sx={{ height: 16, width: 16 }}
          />
        </Stack>
      </Stack>
      {component}
    </Stack>
  );
};
