import { Icon, IconifyIcon } from "@iconify/react";
import { Box, BoxProps, SxProps } from "@mui/material";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon | string;
}

export const Iconify: React.FC<Props> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};
