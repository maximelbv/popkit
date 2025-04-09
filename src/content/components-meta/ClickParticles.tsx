import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import { ClickParticles } from "@/components/library/ClickParticles";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Install the dependency",
      codeBlock: {
        pnpm: "pnpm add gsap",
        npm: "npm i gsap",
        yarn: "yarn add gsap",
      },
    },
    {
      step: 2,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "ClickParticles",
      },
    },
    {
      step: 3,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: `import ClickParticles from "@/components/ClickParticles";

export default function MyComponent() {
  return (
    <ClickParticles
      particleCount={20}
      particleSize={12}
      shape="square"
      duration={0.8}
    >
      ...
    </ClickParticles>
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper>
      <ClickParticles
        particleCount={20}
        particleSize={12}
        shape="square"
        duration={0.8}
        className="w-full h-[400px] flex items-center justify-center select-none"
      >
        <span className="text-text-muted !text-6xl !font-bold">Click me !</span>
      </ClickParticles>
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <ClickParticles
        particleCount={25}
        particleSize={4}
        particleColor="#70ABFF"
        scaleFrom={1}
        scaleTo={5}
        distanceMin={200}
        distanceMax={200}
        shape="circle"
        duration={1}
        className="w-full h-[400px] flex items-center justify-center select-none"
      >
        <span className="text-text-muted !text-6xl !font-bold">Click me !</span>
      </ClickParticles>
    </PreviewWrapper>
  ),
  code: ``,
  quickCopyCode: manualInstallation.steps[1].codeBlock.tsTailwind,
};

const props = [
  {
    property: "particleCount",
    type: "number",
    default: "12",
    description: "The number of particles emitted on each click.",
  },
  {
    property: "particleSize",
    type: "number",
    default: "6",
    description: "The size (in pixels) of each particle.",
  },
  {
    property: "particleColor",
    type: "string",
    default: "#ffffff",
    description: "The color of the particles (CSS color string).",
  },
  {
    property: "duration",
    type: "number",
    default: "0.6",
    description: "The duration of the particle animation (in seconds).",
  },
  {
    property: "spread",
    type: "number",
    default: "360",
    description: "The angular spread of the particles (in degrees).",
  },
  {
    property: "ease",
    type: "string",
    default: '"power2.out"',
    description:
      "The easing function used for particle animation (GSAP easing).",
  },
  {
    property: "shape",
    type: '"circle" | "square"',
    default: '"circle"',
    description: "The shape of the particles.",
  },
  {
    property: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS class for the container element.",
  },
  {
    property: "children",
    type: "React.ReactNode",
    default: "undefined",
    description:
      "Optional children to be rendered inside the clickable container.",
  },
];

const examples = () => [];

const Meta: IComponent = {
  name: "Click Particles",
  description: "",
  category: Categories.EVENT_EFFECTS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: examples,
  props: props,
  dependencies: [],
};

export default Meta;
