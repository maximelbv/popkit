import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import ShowcaseMenu from "@/components/library/ShowcaseMenu";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

const mocks = {
  mock1: [
    {
      link: "#",
      text: "Datastream",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "404 Labs", image: "https://picsum.photos/1700" },
    {
      link: "#",
      text: "Aperture UI",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "Blackbox",
      image: "https://picsum.photos/1500",
    },
  ],
  mock2: [
    {
      link: "#",
      text: "ピンク スカイの宮殿",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "アストラル力学",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "ブレイズド", image: "https://picsum.photos/1700" },
    {
      link: "#",
      text: "リフトの神殿",
      image: "https://picsum.photos/1500",
    },
  ],
  mock3: [
    {
      link: "#",
      text: "Hover Me !",
    },
  ],
  mock4: [
    {
      link: "#",
      text: "First",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "Second",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "Third", image: "https://picsum.photos/1700" },
  ],
  mock5: [
    {
      link: "#",
      text: "Without",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "The",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "Background", image: "https://picsum.photos/1700" },
    { link: "#", text: "Animation", image: "https://picsum.photos/1710" },
  ],
};

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "ShowcaseMenu",
      },
    },
    {
      step: 2,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const myItems = [...];

export default function MyComponent() {
  return (
    <ShowcaseMenu
      items={myItems}
      size="xl"
      bgColor="blue"
      transitionDuration={700}
    />
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper>
      <ShowcaseMenu
        textAlignment="center"
        items={mocks.mock1}
        size="xs"
        bgColor="#18181b"
        displaySeparators={false}
        itemClassName="!p-1 !font-semibold"
      />
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <ShowcaseMenu
        items={mocks.mock1}
        size="sm"
        className="max-w-[800px] !m-auto"
        bgColor="#050608"
      />
    </PreviewWrapper>
  ),
  code: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const previewItems = [
  { link: "#", text: "Datastream", image: "https://picsum.photos/1600" },
  { link: "#", text: "404 Labs", image: "https://picsum.photos/1800" },
  { link: "#", text: "Aperture UI", image: "https://picsum.photos/1700" },
  { link: "#", text: "Blackbox", image: "https://picsum.photos/1500" },
];

export default function ShowcaseMenuPreview() {
  return <ShowcaseMenu items={previewItems} size="sm" />
}`,
  quickCopyCode: manualInstallation.steps[0].codeBlock.tsTailwind,
};

const props = [
  {
    property: "items",
    type: "ItemData[]",
    default: "[]",
    description: "Array of the items that will be displayed in the menu",
  },
  {
    property: "textAlignment",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Alignment of the text in the menu items",
  },
  {
    property: "textColor",
    type: "string",
    default: "'white'",
    description: "Color of the text in the menu items",
  },
  {
    property: "bgColor",
    type: "string",
    default: "'black'",
    description:
      "Background color of the menu (Also defines the text color on items hover)",
  },
  {
    property: "displayImages",
    type: "boolean",
    default: "true",
    description: "Enable / disable image display on hover",
  },
  {
    property: "displaySeparators",
    type: "boolean",
    default: "true",
    description: "Enable / disable separators between menu items",
  },
  {
    property: "backgroundAnimation",
    type: "boolean",
    default: "true",
    description: "Enable / disable background animation on hover",
  },
  {
    property: "transitionDuration",
    type: "number",
    default: "500",
    description: "Duration of the hover transition in milliseconds",
  },
  {
    property: "transitionEasing",
    type: "Easing",
    default: "'cubic-bezier(0.19,1,0.22,1)'",
    description: "Easing function for the hover transition",
  },
  {
    property: "size",
    type: "MenuSize",
    default: "'md'",
    description: "Size preset for the menu items",
  },
  {
    property: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS class for the menu container",
  },
  {
    property: "itemClassName",
    type: "string",
    default: "undefined",
    description: "Additional CSS class for individual menu items",
  },
];

const examples = () => [
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    <MiniPreviewWrapper className="!bg-[#F26850]">
      <ShowcaseMenu
        items={mocks.mock3}
        size="md"
        textAlignment="center"
        textColor="#F6EBE2"
        bgColor="#F26850"
        className="max-w-[80%] !m-auto"
        itemClassName="!rounded-md"
        displaySeparators={false}
        displayImages={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!border !border-border-default">
      <ShowcaseMenu
        items={mocks.mock5}
        size="xxs"
        className="max-w-[80%] !m-auto"
        bgColor="#18181b"
        backgroundAnimation={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!bg-[#45853B]">
      <ShowcaseMenu
        items={mocks.mock2}
        size="sm"
        textAlignment="center"
        textColor="#BADD7F"
        bgColor="#45853B"
        className="!font-darumadrop max-w-[80%] !m-auto"
        displaySeparators={false}
        displayImages={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!bg-[#F0F1FA]">
      <ShowcaseMenu
        textColor="blue"
        bgColor="#F0F1FA"
        items={mocks.mock4}
        size="xxs"
        className="max-w-[90%] !m-auto !font-jetbrains"
        itemClassName="!p-0 !leading-[1.1] !text-[75px]"
      />
    </MiniPreviewWrapper>
  </div>,
];

const ShowcaseMenuMeta: IComponent = {
  name: "Showcase Menu",
  description:
    "A customizable navigation menu with interactive hover effects and optional image previews, featuring adjustable styles and animations.",
  category: Categories.MENUS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: examples,
  props: props,
  dependencies: [],
};

export default ShowcaseMenuMeta;
