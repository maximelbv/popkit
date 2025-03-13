import { ComponentsContext, useComponents } from "@/hooks/useComponents";

const ComponentsProvider = ({ children }: { children: React.ReactNode }) => {
  const components = useComponents();

  return (
    <ComponentsContext.Provider value={components}>
      {children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsProvider;
