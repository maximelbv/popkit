import { Categories } from "@/constants/categories";
import { CODE_BLOCK_KEYS, DEFAULT_LANGUAGE } from "@/constants/languages";
import { Status } from "@/constants/status";
import {
  ICode,
  IComponent,
  IInstallationMode,
  Variant,
} from "@/types/components";

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

export const isICode = (obj: unknown): obj is ICode => {
  if (typeof obj !== "object" || obj === null) return false;
  const validKeys = new Set(
    CODE_BLOCK_KEYS.map((entry) => entry.codeKey as keyof ICode)
  );
  return Object.keys(obj).every((key) => validKeys.has(key as keyof ICode));
};

export const getLanguageFromKey = (key: string): string => {
  return (
    CODE_BLOCK_KEYS.find((entry) => entry.codeKey === key)?.language ||
    DEFAULT_LANGUAGE
  );
};

export const getAvailableVariants = (
  steps: IInstallationMode["steps"]
): Variant[] => {
  const variants = new Set<Variant>();

  steps.forEach((step) => {
    if (!step.codeBlock || typeof step.codeBlock === "string") return;

    if (isICode(step.codeBlock)) {
      Object.keys(step.codeBlock).forEach((key) => {
        if (CODE_BLOCK_KEYS.some(({ codeKey }) => codeKey === key)) {
          variants.add(key as Variant);
        }
      });
    } else {
      Object.values(step.codeBlock).forEach((value) => {
        if (typeof value === "object" && value !== null && isICode(value)) {
          Object.keys(value).forEach((key) => {
            if (CODE_BLOCK_KEYS.some(({ codeKey }) => codeKey === key)) {
              variants.add(key as Variant);
            }
          });
        }
      });
    }
  });

  return Array.from(variants);
};
