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
  miniPreview: () => (
    <MiniPreviewWrapper>
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

const Meta: IComponent = {
  name: "",
  description: "",
  category: Categories.NAVIGATION,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  props: props,
  dependencies: [],
};

export default Meta;
