import { IComponent } from "@/types/components";

export const getAllComponentsMeta = (): IComponent[] => {
  const modules = import.meta.glob("/src/content/components-meta/**/*.tsx", {
    eager: true,
    import: "default",
  });
  return Object.values(modules) as IComponent[];
};

export function getAllComponentsCode() {
  const componentFiles = import.meta.glob("/src/components/library/**/*.tsx", {
    as: "raw",
    eager: true,
  });
  const componentCode: Record<string, string> = {};

  for (const path in componentFiles) {
    const componentName = path.split("/").pop()?.replace(".tsx", "");
    if (componentName) {
      componentCode[componentName] = componentFiles[path] as string;
    }
  }

  return componentCode;
}
