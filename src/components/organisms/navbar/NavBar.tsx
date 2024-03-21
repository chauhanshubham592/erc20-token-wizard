import { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useConnectModal, ConnectButton } from "@rainbow-me/rainbowkit";
import { MobileDrawer } from "./MobileDrawer";
import { speraxLogo } from "../../../assets";
import { INavOption, getNavOptions } from "../../../utils";
import { Iconify, PrimaryButton, ThemeButton } from "../../atom";
import { useApp } from "../../../hooks";
import { IconButton, useMediaQuery } from "@mui/material";

// -------------------------------------------------------------

export const NavLabel: React.FC<INavOption> = ({
  label,
  isActive,
  icon,
  iconStyle,
}) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "baseline",
        columnGap: 0.8,
        fontSize: isActive ? 15 : 16,
        color: isActive ? "text.primary" : "text.secondary",
        fontWeight: isActive ? 600 : 400,
        cursor: "pointer",
        ...(!isActive && {
          "&:hover": {
            color: "primary.main",
            fontWeight: 500,
          },
        }),
      }}
    >
      {label}
      {icon && (
        <Box
          component={"img"}
          src={icon}
          alt={label}
          sx={{ width: 16, height: 16, ...iconStyle }}
        />
      )}
    </Typography>
  );
};

// -------------------------------------------------------------

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { pathname } = useLocation();
  const { isConnected } = useApp();
  const { openConnectModal } = useConnectModal();

  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <MobileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={{ xs: 2, md: 4 }}>
          <Box
            component="img"
            src={speraxLogo}
            alt="logo"
            sx={{ width: 32, display: { xs: "none", sm: "block" } }}
          />
          {!isSmallScreen && (
            <Stack direction="row" gap={{ xs: 2, md: 4 }}>
              {getNavOptions({ pathname }).map((nav) => {
                return <NavLabel key={nav.id} {...nav} />;
              })}
            </Stack>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" gap={{ xs: 2, md: 3 }}>
          {isConnected ? (
            <ConnectButton showBalance={false} />
          ) : (
            <PrimaryButton onClick={openConnectModal}>
              Connect Wallet
            </PrimaryButton>
          )}
          <ThemeButton />
          <IconButton onClick={toggleDrawer}>
            <Iconify icon="mingcute:menu-fill" />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
};
