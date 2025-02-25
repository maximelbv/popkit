import { IComponent } from "@/types/components";

export const getAllComponents = (): IComponent[] => {
  const modules = import.meta.glob("/src/content/components/**/*.tsx", {
    eager: true,
    import: "default",
  });
  return Object.values(modules) as IComponent[];
};
