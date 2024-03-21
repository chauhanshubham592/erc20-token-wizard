import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../..";
import { Link } from "react-router-dom";

export const NoPageIllustration: React.FC = () => {
  return (
    <Stack rowGap={2}>
      <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
        Oops! No Page Found{" "}
      </Typography>

      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <PrimaryButton sx={{ minWidth: 150 }}>Go To Home</PrimaryButton>
      </Box>
    </Stack>
  );
};
