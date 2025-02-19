import { DependenciesList } from "@/constants/dependencies";

export interface IDependency {
  name: string;
  link: string;
}

export type Dependency = (typeof DependenciesList)[number]["name"];
