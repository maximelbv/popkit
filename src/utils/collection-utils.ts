import { IComponent } from "@/types/components";

export const groupComponentsByCategory = (components: IComponent[]) => {
  const groupedCategories: Record<string, string[]> = {};

  components.forEach((component) => {
    const category = component.category || "Other";
    if (!groupedCategories[category]) {
      groupedCategories[category] = [];
    }
    groupedCategories[category].push(component.name);
  });

  return groupedCategories;
};
