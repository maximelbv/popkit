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
