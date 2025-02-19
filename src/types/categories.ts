import { CategoriesList } from "@/constants/categories";

export interface ICategory {
  name: string;
}

export type Category = (typeof CategoriesList)[number]["name"];
