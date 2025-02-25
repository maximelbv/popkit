import { createContext, useContext } from "react";
import { IComponent } from "@/types/components";

export const ComponentsContext = createContext<IComponent[]>([]);

export function useComponents() {
  return useContext(ComponentsContext);
}
