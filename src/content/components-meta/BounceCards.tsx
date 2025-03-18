import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import BounceCards from "@/components/library/BounceCards";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

const mocks = [
  "/mocks/images/mediteranean/1.jpg",
  "/mocks/images/mediteranean/2.jpg",
  "/mocks/images/mediteranean/3.jpg",
  "/mocks/images/mediteranean/4.jpg",
];

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Install the dependency",
      codeBlock: {
        pnpm: "pnpm add motion",
        npm: "npm i motion",
        yarn: "yarn add motion",
      },
    },
    {
      step: 2,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "BounceCards",
      },
    },
    {
      step: 3,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: `import BounceCards from '@/components/BounceCards'

const myImages = [...];

export default function MyComponent() {
  return (
    <BounceCards
      images={myImages}
      itemClassName="border-4 border-white"
      rotations={[10, -10]}
    />
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper reloadButton={true}>
      <BounceCards
        images={mocks}
        imgWidth="75px"
        imgHeight="75px"
        spacing={-10}
        itemClassName="!border-2 !border-white"
      />
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper reloadButton={true}>
      <BounceCards images={mocks} itemClassName="!border-4 !border-white" />
    </PreviewWrapper>
  ),
  code: `import BounceCards from '@/components/BounceCards'

const images = [
  "/mocks/images/mediteranean/1.jpg",
  "/mocks/images/mediteranean/2.jpg",
  "/mocks/images/mediteranean/3.jpg",
  "/mocks/images/mediteranean/4.jpg",
];

export default function BounceCardsPreview() {
  return <BounceCards images={mocks} itemClassName="!border-4 !border-white" />
}`,
  quickCopyCode: manualInstallation.steps[1].codeBlock.tsTailwind,
};

const props = [
  {
    property: "images",
    type: "string[]",
    default: "-",
    description: "Array of image URLs to be displayed as bouncing cards.",
  },
  {
    property: "spacing",
    type: "number",
    default: "-50",
    description: "Spacing between each card in pixels.",
  },
  {
    property: "rotations",
    type: "number[]",
    default: "[9, -5, 10, 2]",
    description:
      "Array of rotation values (in degrees) applied in a loop to the cards. The sequence repeats based on the number of values provided.",
  },
  {
    property: "imgWidth",
    type: "string",
    default: '"200px"',
    description: "Width of each card.",
  },
  {
    property: "imgHeight",
    type: "string",
    default: '"200px"',
    description: "Height of each card.",
  },
  {
    property: "className",
    type: "string",
    default: "undefined",
    description: "Optional additional CSS classes for the container.",
  },
  {
    property: "itemClassName",
    type: "string",
    default: "undefined",
    description: "Optional additional CSS classes for each card.",
  },
  {
    property: "delay",
    type: "number",
    default: "0.1",
    description: "Delay (in seconds) before each card's animation starts.",
  },
  {
    property: "animateWhenVisible",
    type: "boolean",
    default: "true",
    description:
      "Determines whether the cards should animate when they appear in the viewport.",
  },
];

// const examples = () => [];

const BounceMenuMeta: IComponent = {
  name: "Bounce Cards",
  description:
    "A component that displays a set of animated image cards with customizable spacing, rotations, and smooth spring-based transitions using Framer Motion.",
  category: Categories.ANIMATIONS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  // examples: examples,
  props: props,
  dependencies: [
    {
      name: "motion",
      link: "https://www.npmjs.com/package/framer-motion",
    },
  ],
};

export default BounceMenuMeta;
