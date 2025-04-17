import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import BounceCards from "@/components/library/BounceCards";
import { Categories } from "@/constants/categories";
import { IComponent } from "@/types/components";

const mocks = {
  preview: [
    "/mocks/images/mediteranean/1.jpg",
    "/mocks/images/mediteranean/2.jpg",
    "/mocks/images/mediteranean/3.jpg",
    "/mocks/images/mediteranean/4.jpg",
  ],
  cards: [
    "/mocks/images/cards/clubs_7.png",
    "/mocks/images/cards/diamonds_A.png",
    "/mocks/images/cards/hearts_2.png",
    "/mocks/images/cards/hearts_Q.png",
    "/mocks/images/cards/spades_A.png",
  ],
};

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
  miniPreview: ({ className }: { className: string }) => (
    <MiniPreviewWrapper className={`${className}`} reloadButton={true}>
      <BounceCards
        images={mocks.preview}
        imgWidth="150px"
        imgHeight="150px"
        spacing={-15}
        itemClassName="!border-2 !border-white !w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px]"
      />
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper reloadButton={true}>
      <BounceCards
        images={mocks.preview}
        itemClassName="!border-4 !border-white"
      />
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

const ex = {
  examples: () => (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <MiniPreviewWrapper className="!bg-[#F0F1FA]" reloadButton={true}>
        <BounceCards
          images={mocks.cards}
          imgWidth="135px"
          imgHeight="189px"
          rotations={[-20, -10, 1, 10, 20]}
          itemClassName="shadow-md first:!mt-[20px] last:!mt-[20px] [&:nth-child(3)]:!mt-[-10px] hover:!translate-y-[-20px] transition-all"
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper reloadButton={true}>
        <BounceCards
          images={mocks.preview}
          imgWidth="300px"
          imgHeight="230px"
          // rotations={[18, -10, 20, 4]}
          spacing={-300}
          delay={0.5}
        />
      </MiniPreviewWrapper>
    </div>
  ),
  miniExamples: () => (
    <div className="grid gap-4 grid-cols-1">
      <MiniPreviewWrapper className="!bg-[#F0F1FA]" reloadButton={true}>
        <BounceCards
          images={mocks.cards}
          imgWidth="135px"
          imgHeight="189px"
          rotations={[-20, -10, 1, 10, 20]}
          className="scale-50"
          itemClassName="shadow-md first:!mt-[20px] last:!mt-[20px] [&:nth-child(3)]:!mt-[-10px] hover:!translate-y-[-20px] transition-all"
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper reloadButton={true}>
        <BounceCards
          images={mocks.preview}
          imgWidth="150px"
          imgHeight="115px"
          rotations={[18, -10, 20, 4]}
          spacing={-150}
          delay={0.5}
        />
      </MiniPreviewWrapper>
    </div>
  ),
};

const BounceMenuMeta: IComponent = {
  name: "Bounce Cards",
  description:
    "A component that displays a set of animated image cards with customizable spacing, rotations, and smooth spring-based transitions using Framer Motion.",
  category: Categories.ANIMATIONS,
  overview: overview,
  installation: [manualInstallation],
  examples: ex,
  props: props,
  dependencies: [
    {
      name: "motion",
      link: "https://www.npmjs.com/package/framer-motion",
    },
  ],
};

export default BounceMenuMeta;
