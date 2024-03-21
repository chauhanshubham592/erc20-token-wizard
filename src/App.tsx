import { Route, Routes } from "react-router-dom";
import Providers from "./Providers";
import { HomePage, NoPageFound } from "./pages";

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Providers>
  );
};

export default App;
