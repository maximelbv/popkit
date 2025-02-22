import { IComponent } from "@/types/components";
import Preview from "./Preview";

export const documentationData: IComponent = {
  name: "Graphic Heat Map",
  category: "Data Vizualization",
  preview: Preview,
  props: [
    {
      property: "text",
      type: "string",
      default: '"Hello World"',
      description: "The text to be displayed inside the component.",
    },
    {
      property: "speed",
      type: "number",
      default: "1",
      description: "The animation speed multiplier.",
    },
  ],
  dependencies: [
    {
      name: "three",
      link: "https://github.com/mrdoob/three.js",
    },
    {
      name: "gsap",
      link: "https://github.com/greensock/GSAP",
    },
  ],
  code: {
    component: [
      {
        format: "js",
        withTailwind: false,
        filePath: "/code/TestComponent.js",
      },
      {
        format: "ts",
        withTailwind: true,
        filePath: "/code/TestComponent.tailwind.tsx",
      },
    ],
    additional: [
      {
        name: "Installation",
        filePath: "/code/install-test-component.sh",
      },
    ],
  },
};
