import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { speraxGrayLogo } from "../../../assets";
import Typography from "@mui/material/Typography";
import { FooterExternalLinksSection, SocialMedias } from "../..";

// --------------------------------------------------------------------

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Container maxWidth="xl">
        <Stack gap={{ xs: 3, md: 7 }} sx={{ py: { xs: 3, md: 6 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Box
                component={"img"}
                src={speraxGrayLogo}
                alt="sperax"
                sx={{ height: 32 }}
              />
              <Typography>Forum</Typography>
              <Typography>Snapshot</Typography>
            </Stack>
            <SocialMedias />
          </Stack>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <FooterExternalLinksSection />
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            rowGap={1.5}
          >
            <Typography sx={{ color: "#ABB7BD", order: { xs: 1, md: 0 } }}>
              © 2023 Sperax Inc. All rights reserved.
            </Typography>
            <Stack
              direction="row"
              alignItems={"center"}
              gap={3}
              sx={{ order: { xs: 0, md: 1 } }}
            >
              <Typography
                sx={{ fontSize: 16, fontWeight: 700, color: "#404B51" }}
              >
                Terms of Service
              </Typography>
              <Box
                sx={{
                  background: "#C8CFD3",
                  height: 6,
                  width: 6,
                  borderRadius: 100,
                }}
              />
              <Typography
                sx={{ fontSize: 16, fontWeight: 700, color: "#404B51" }}
              >
                Privacy Policy
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
