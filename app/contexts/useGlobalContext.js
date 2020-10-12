import { createContext, useContext } from "react";

export const globalContext = createContext();

export function useGlobalContext() {
  return useContext(globalContext);
}
