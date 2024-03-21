import Stack from "@mui/material/Stack";
import { Layout, NoPageIllustration } from "../../components";

export const NoPageFound: React.FC = () => {
  return (
    <Layout>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ minHeight: "50vh" }}
      >
        <NoPageIllustration />
      </Stack>
    </Layout>
  );
};

export default NoPageFound;
