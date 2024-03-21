import { useContext } from "react";
import { AppContext } from "../contexts";

export const useApp = () => {
  const appContext = useContext(AppContext);
  return appContext;
};
