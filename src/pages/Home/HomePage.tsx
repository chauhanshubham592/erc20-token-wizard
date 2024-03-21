import Stack from "@mui/material/Stack";
import {
  Layout,
  TokenPortfolio,
  TokenTransferInterface,
} from "../../components";

export const HomePage = () => {
  return (
    <Layout>
      <Stack
        gap={{ xs: 8, md: 8 }}
        sx={{ height: "100%", pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}
      >
        <TokenPortfolio />
        <TokenTransferInterface />
      </Stack>
    </Layout>
  );
};
