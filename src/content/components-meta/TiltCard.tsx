import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import LightBeamContainer from "@/components/library/LightBeamContainer";
import TiltCard from "@/components/library/TiltCard";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";
import { Image } from "@chakra-ui/react";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "TiltCard",
      },
    },
    {
      step: 2,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: `import TiltCard from '@/components/TiltCard'

export default function MyComponent() {
  return (
    <TiltCard strength={30} className="w-80 h-80">
      ...
    </TiltCard>
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper>
      <TiltCard
        strength={60}
        className="w-[200px] h-[200px] !rounded-lg overflow-hidden"
      >
        <LightBeamContainer beamColor="#ffffff49" beamRadius="50%">
          <Image src="/mocks/images/album-covers/jack-u.jpg" />
        </LightBeamContainer>
      </TiltCard>
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <TiltCard
        strength={40}
        className="w-[300px] h-[300px] !rounded-lg overflow-hidden"
      >
        <LightBeamContainer beamColor="#ffffff74">
          <Image src="/mocks/images/album-covers/jack-u.jpg" />
        </LightBeamContainer>
      </TiltCard>
    </PreviewWrapper>
  ),
  code: `import TiltCard from '@/components/TiltCard'

export default function TiltcardPreview() {
  return (
    <TiltCard
      strength={40}
      className="w-[300px] h-[300px] !rounded-lg overflow-hidden"
    >
      <LightBeamContainer beamColor="#ffffff74">
        <Image src="/mocks/images/album-covers/jack-u.jpg" />
      </LightBeamContainer>
    </TiltCard>
  );
}`,
  quickCopyCode: manualInstallation.steps[0].codeBlock.tsTailwind,
};

const props = [
  {
    property: "children",
    type: "ReactNode",
    default: "required",
    description: "The content to be displayed inside the tilt card",
  },
  {
    property: "strength",
    type: "number",
    default: "25",
    description:
      "The strength of the tilt effect. Higher values create more pronounced tilt",
  },
  {
    property: "radius",
    type: "number",
    default: "300",
    description:
      "The radius of the tilt effect in pixels. Controls how far away the mouse can be while still affecting the tilt",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description: "Additional CSS class names to apply to the card",
  },
];

const examples = () => [
  <PreviewWrapper>
    <div className="!flex !gap-6 flex-wrap items-center justify-center">
      <TiltCard
        strength={50}
        className="w-[286px] h-[400px] rounded-xl overflow-hidden"
      >
        <LightBeamContainer beamColor="#ffffffa9">
          <Image src="/mocks/images/pokemon/blastoize.png" />
        </LightBeamContainer>
      </TiltCard>
      <TiltCard
        strength={50}
        className="w-[286px] h-[400px] rounded-xl overflow-hidden"
      >
        <LightBeamContainer beamColor="#ffffffa9">
          <Image src="/mocks/images/pokemon/charizard.webp" />
        </LightBeamContainer>
      </TiltCard>
      <TiltCard
        strength={50}
        className="w-[286px] h-[400px] rounded-xl overflow-hidden"
      >
        <LightBeamContainer beamColor="#ffffffa9">
          <Image src="/mocks/images/pokemon/venusaur.png" />
        </LightBeamContainer>
      </TiltCard>
    </div>
  </PreviewWrapper>,
];

const TiltCardMeta: IComponent = {
  name: "Tilt Card",
  description:
    "A component that applies a 3D tilt effect, dynamically adjusting its rotation based on cursor movement within a defined radius.",
  category: Categories.ANIMATIONS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: examples,
  props: props,
  dependencies: [],
};

export default TiltCardMeta;
