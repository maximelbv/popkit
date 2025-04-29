import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        tsTailwind: "",
      },
    },
    {
      step: 2,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        tsTailwind: ``,
      },
    },
  ],
};

const overview = {
  miniPreview: ({ className }: { className: string }) => (
    <MiniPreviewWrapper className={`${className}`}>
      <></>
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <></>
    </PreviewWrapper>
  ),
  code: ``,
  quickCopyCode: manualInstallation.steps[0].codeBlock.tsTailwind,
};

const props = [
  {
    property: "",
    type: "",
    default: "",
    description: "",
  },
];

const ex = {
  examples: () => <div className="grid gap-4 grid-cols-1 md:grid-cols-2"></div>,
  miniExamples: () => <div className="grid gap-4 grid-cols"></div>,
};

const Meta: IComponent = {
  name: "",
  description: "",
  created: "2025-03-24",
  category: Categories.NAVIGATION,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: ex,
  props: props,
  dependencies: [],
};

export default Meta;
