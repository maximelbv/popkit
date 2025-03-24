import Logo from "@/components/docs/Logo";
import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import LightBeamContainer from "@/components/library/LightBeamContainer";
import { Categories } from "@/constants/categories";
import { IComponent } from "@/types/components";
import { Button } from "@chakra-ui/react";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "LightBeamContainer",
      },
    },
    {
      step: 2,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: `import LightBeamContainer from "@/components/LightBeamContainer";

export default function MyComponent() {
  return (
    <LightBeamContainer beamColor='red' beamRadius='20%' >
      ...
    </LightBeamContainer>
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper>
      <LightBeamContainer className="bg-elem-elem-background !h-fit !border rounded-3xl !border-border-light flex flex-col gap-3 !p-10 justify-center">
        <Logo />
        <span className="text-text-muted">Elegant UI components for React</span>
        <Button className="w-fit">See more</Button>
      </LightBeamContainer>
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <LightBeamContainer className="bg-elem-background !h-fit !border rounded-3xl border-border-default flex flex-col gap-3 !p-10 justify-center">
        <Logo />
        <span className="text-text-muted">Elegant UI components for React</span>
        <Button className="w-fit">See more</Button>
      </LightBeamContainer>
    </PreviewWrapper>
  ),
  code: `import LightBeamContainer from "@/components/LightBeamContainer";
import { Button } from "@chakra-ui/react";
import Logo from "@/components/docs/Logo";

export default function LightBeamContainerPreview() {
  return (
    <LightBeamContainer className="bg-elem-background !h-fit !border rounded-3xl border-border-default flex flex-col gap-3 !p-10 justify-center">
      <Logo />
      <span className="text-text-muted">Elegant UI components for React</span>
      <Button className="w-fit">See more</Button>
    </LightBeamContainer>
  );
}`,
  quickCopyCode: manualInstallation.steps[0].codeBlock.tsTailwind,
};

const props = [
  {
    property: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the container.",
  },
  {
    property: "beamColor",
    type: "string",
    default: '"rgba(255, 255, 255, 0.25)"',
    description: "Color of the light beam as a CSS value.",
  },
  {
    property: "beamRadius",
    type: "string",
    default: '"80%"',
    description:
      "Radius of the light beam as a CSS value (e.g., '50%', '100px').",
  },
  {
    property: "children",
    type: "React.ReactNode",
    default: "—",
    description: "Child elements to be rendered inside the container.",
  },
];

const LightBeamContainerMeta: IComponent = {
  name: "Light Beam Container",
  description:
    "A container component with a dynamic spotlight effect that follows the cursor.",
  category: Categories.ANIMATIONS,
  overview: overview,
  installation: [manualInstallation],
  props: props,
  dependencies: [],
};

export default LightBeamContainerMeta;
