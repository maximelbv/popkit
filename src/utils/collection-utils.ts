import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

export interface GroupedComponent {
  name: string;
  status?: (typeof Status)[keyof typeof Status];
}

export const groupComponentsByCategory = (
  components: IComponent[]
): Record<string, GroupedComponent[]> => {
  const validCategories = Object.values(Categories);
  const groupedCategories: Record<string, GroupedComponent[]> = {};

  components.forEach((component) => {
    const category = validCategories.includes(component.category)
      ? component.category
      : "Other";
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
