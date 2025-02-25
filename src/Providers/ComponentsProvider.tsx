import React from "react";
import { IComponent } from "@/types/components";
import { getAllComponents } from "@/utils/file-utils";
import { ComponentsContext } from "@/hooks/useComponents";

interface ComponentsProviderProps {
  children: React.ReactNode;
}

export function ComponentsProvider({ children }: ComponentsProviderProps) {
  const components: IComponent[] = getAllComponents();
  return (
    <ComponentsContext.Provider value={components}>
      {children}
    </ComponentsContext.Provider>
  );
}
