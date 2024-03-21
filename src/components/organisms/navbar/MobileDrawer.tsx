import React from "react";
import Drawer from "@mui/material/Drawer";
import { getNavOptions } from "../../../utils";
import { NavLabel } from "./NavBar";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import { speraxLogo } from "../../../assets";
import IconButton from "@mui/material/IconButton";
import { Iconify } from "../..";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const MobileDrawer: React.FC<Props> = ({ isOpen, toggleDrawer }) => {
  const { pathname } = useLocation();

  const handleCloseDrawer = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    e?.stopPropagation();
    toggleDrawer();
  };

  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ p: 2, pb: 1 }}
        >
          <Box component="img" src={speraxLogo} alt="logo" sx={{ width: 32 }} />
          <IconButton onClick={handleCloseDrawer}>
            <Iconify
              icon="fluent-emoji-high-contrast:cross-mark"
              sx={{ fontSize: 16 }}
            />
          </IconButton>
        </Stack>
        <List>
          {getNavOptions({ pathname }).map((nav) => {
            return (
              <ListItem key={nav.id} disablePadding>
                <ListItemButton onClick={handleCloseDrawer}>
                  <NavLabel {...nav} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
