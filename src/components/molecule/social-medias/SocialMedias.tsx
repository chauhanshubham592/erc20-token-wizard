import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SOCIAL_MEDIAS } from "../../../utils";
import IconButton from "@mui/material/IconButton";

export const SocialMedias: React.FC = () => {
  return (
    <Stack direction="row" gap={1}>
      {SOCIAL_MEDIAS.map((item) => {
        return (
          <IconButton key={item.id}>
            <Box
              key={item.id}
              component="img"
              src={item.icon}
              sx={{ cursor: "pointer" }}
            />
          </IconButton>
        );
      })}
    </Stack>
  );
};
