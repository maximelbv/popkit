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
      particleSize={2}
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
  miniPreview: ({ className }: { className: string }) => (
    <MiniPreviewWrapper className={`${className}`}>
      <ClickParticles
        particleCount={20}
        particleSize={2}
        scaleFrom={1}
        scaleTo={5}
        distanceMin={80}
        distanceMax={150}
        shape="square"
        duration={1}
        className="w-full h-[400px] flex items-center justify-center select-none"
      >
        <span className="text-text-muted !text-6xl !font-bold">Click me !</span>
      </ClickParticles>
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <ClickParticles
        particleCount={20}
        particleSize={2}
        scaleFrom={1}
        scaleTo={5}
        distanceMin={80}
        distanceMax={150}
        shape="square"
        duration={1}
        className="w-full h-[400px] flex items-center justify-center select-none"
      >
        <span className="text-text-muted !text-6xl !font-bold">Click me !</span>
      </ClickParticles>
    </PreviewWrapper>
  ),
  code: `import ClickParticles from "@/components/ClickParticles";

export default function ClickParticlesPreview() {
  return (
    <ClickParticles
    particleCount={20}
    particleSize={2}
    scaleFrom={1}
    scaleTo={5}
    distanceMin={80}
    distanceMax={150}
    shape="square"
    duration={1}
    className="w-full h-[400px] flex items-center justify-center select-none"
  >
    <span className="text-text-muted !text-6xl !font-bold">Click me !</span>
  </ClickParticles>
  );
}
`,
  quickCopyCode: manualInstallation.steps[1].codeBlock.tsTailwind,
};

const props = [
  {
    property: "particleCount",
    type: "number",
    default: "12",
    description: "Number of particles created on each click.",
  },
  {
    property: "particleSize",
    type: "number",
    default: "6",
    description: "Size of each particle in pixels.",
  },
  {
    property: "particleColor",
    type: "string | string[]",
    default: '"#ffffff"',
    description:
      "Color of the particles. Can be a single color or an array of colors.",
  },
  {
    property: "duration",
    type: "number",
    default: "0.6",
    description: "Duration of the particle animation in seconds.",
  },
  {
    property: "spread",
    type: "number",
    default: "360",
    description:
      "Angle spread (in degrees) over which the particles are distributed.",
  },
  {
    property: "ease",
    type: "string",
    default: '"power2.out"',
    description: "Easing function used by GSAP for particle animation.",
  },
  {
    property: "shape",
    type: "ParticleShape",
    default: '"circle"',
    description: "Shape of the particles.",
  },
  {
    property: "className",
    type: "string",
    default: "undefined",
    description: "Optional class name applied to the outer container.",
  },
  {
    property: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "Elements nested inside the ClickParticles container.",
  },
  {
    property: "particleOpacity",
    type: "number",
    default: "1",
    description: "Opacity of the particles when they appear.",
  },
  {
    property: "scaleFrom",
    type: "number",
    default: "1",
    description: "Initial scale of the particles before the animation starts.",
  },
  {
    property: "scaleTo",
    type: "number",
    default: "0.5",
    description: "Final scale of the particles at the end of the animation.",
  },
  {
    property: "distanceMin",
    type: "number",
    default: "30",
    description: "Minimum distance a particle can travel from the click point.",
  },
  {
    property: "distanceMax",
    type: "number",
    default: "70",
    description: "Maximum distance a particle can travel from the click point.",
  },
  {
    property: "zIndex",
    type: "number",
    default: "1",
    description: "CSS z-index value applied to the particles.",
  },
  {
    property: "containerStyle",
    type: "React.CSSProperties",
    default: "{}",
    description: "Inline styles applied to the outer container.",
  },
];

const ex = {
  examples: () => (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <MiniPreviewWrapper>
        <ClickParticles
          shape="confetti"
          particleCount={30}
          particleColor={["#f87171", "#60a5fa", "#34d399", "#fbbf24"]}
          particleSize={8}
          duration={2}
          distanceMin={100}
          distanceMax={200}
          scaleFrom={1}
          scaleTo={0.8}
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-6xl !font-bold">
            Confetti 🎉
          </span>
        </ClickParticles>
      </MiniPreviewWrapper>

      <MiniPreviewWrapper>
        <ClickParticles
          shape="square"
          particleCount={25}
          particleSize={12}
          duration={1.5}
          distanceMin={100}
          distanceMax={200}
          scaleFrom={1}
          scaleTo={0.2}
          particleColor={["#a0e9ff", "#7ed6df", "#74b9ff", "#dff9fb"]}
          ease="expo.out"
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-6xl !font-bold">
            Freeze ❄️
          </span>
        </ClickParticles>
      </MiniPreviewWrapper>

      <MiniPreviewWrapper>
        <ClickParticles
          particleCount={40}
          particleSize={100}
          particleColor={["#F5C6CE", "#E8AEB4", "#D98E97", "#C97883"]}
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-6xl !font-bold">
            Makeup 💅
          </span>
        </ClickParticles>
      </MiniPreviewWrapper>

      <MiniPreviewWrapper>
        <ClickParticles
          particleCount={30}
          particleSize={30}
          particleColor={["#1b3d1a", "#2e5d2a", "#3f7d3a", "#4e9d4b"]}
          distanceMin={40}
          distanceMax={100}
          shape="leaf"
          duration={0.8}
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-6xl !font-bold">Bush 🌳</span>
        </ClickParticles>
      </MiniPreviewWrapper>
    </div>
  ),
  miniExamples: () => (
    <div className="grid gap-4 grid-cols">
      <MiniPreviewWrapper>
        <ClickParticles
          shape="confetti"
          particleCount={30}
          particleColor={["#f87171", "#60a5fa", "#34d399", "#fbbf24"]}
          particleSize={8}
          duration={2}
          distanceMin={100}
          distanceMax={200}
          scaleFrom={1}
          scaleTo={0.8}
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-4xl !font-bold">
            Confetti 🎉
          </span>
        </ClickParticles>
      </MiniPreviewWrapper>

      <MiniPreviewWrapper>
        <ClickParticles
          shape="square"
          particleCount={25}
          particleSize={12}
          duration={1.5}
          distanceMin={100}
          distanceMax={200}
          scaleFrom={1}
          scaleTo={0.2}
          particleColor={["#a0e9ff", "#7ed6df", "#74b9ff", "#dff9fb"]}
          ease="expo.out"
          className="w-full h-[400px] flex items-center justify-center select-none"
        >
          <span className="text-text-muted !text-4xl !font-bold">
            Freeze ❄️
          </span>
        </ClickParticles>
      </MiniPreviewWrapper>
    </div>
  ),
};

const Meta: IComponent = {
  name: "Click Particles",
  description:
    "A customizable component that creates animated particle bursts on click, supporting multiple shapes, colors, and motion settings.",
  category: Categories.EVENT_EFFECTS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: ex,
  props: props,
  dependencies: [
    {
      name: "gsap",
      link: "https://github.com/greensock/GSAP",
    },
  ],
};

export default Meta;
