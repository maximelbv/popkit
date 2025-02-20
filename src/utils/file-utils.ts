import { IComponent } from "@/types/components";

export const importAllComponentsDocData = (): IComponent[] => {
  const modules = import.meta.glob(
    "/src/content/components/**/documentation-data.json",
    {
      eager: true,
      import: "default",
    }
  );
  return Object.values(modules) as IComponent[];
};

export const generateComponentRoutes = () => {
  const components = importAllComponentsDocData();

  return components.map((component) => ({
    path: `/docs/components/${component.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    name: component.name,
  }));
};
