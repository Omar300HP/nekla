import { createContext, useContext } from "react";

export const routeContext = createContext();

export function useRoute() {
  return useContext(routeContext);
}
