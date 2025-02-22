import { GroupedComponent } from "@/components/Sidebar";
import { IComponent } from "@/types/components";

export const groupComponentsByCategory = (
  components: IComponent[]
): Record<string, GroupedComponent[]> => {
  const groupedCategories: Record<string, GroupedComponent[]> = {};

  components.forEach((component) => {
    const category = component.category || "Other";
    if (!groupedCategories[category]) {
      groupedCategories[category] = [];
    }
    groupedCategories[category].push({
      name: component.name,
      status: component.status,
    });
  });

  return groupedCategories;
};
