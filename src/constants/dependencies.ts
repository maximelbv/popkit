import { IDependency } from "@/types/dependencies";

export const DependenciesList: IDependency[] = [
  {
    name: "three",
    link: "https://github.com/mrdoob/three.js",
  },
  {
    name: "gsap",
    link: "https://github.com/greensock/GSAP",
  },
] as const;
