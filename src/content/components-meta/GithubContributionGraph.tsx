import MiniPreviewWrapper from "@/components/docs/MiniPreviewWrapper";
import PreviewWrapper from "@/components/docs/PreviewWrapper";
import GithubContributionGraph from "@/components/library/GithubContributionGraph";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent } from "@/types/components";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Deploy the GitHub Contributions API",
      description:
        "Clone and deploy the server from https://github.com/grubersjoe/github-contributions-api to your own hosting (Vercel, Render, etc.).",
      codeBlock: {
        tsTailwind: `git clone https://github.com/grubersjoe/github-contributions-api.git
cd github-contributions-api
npm install
npm run start`,
      },
    },
    {
      step: 2,
      title: "Copy the component to your project",
      description:
        "Place the GithubContributionGraph component into your /components folder.",
      codeBlock: {
        tsTailwind: "",
      },
    },
    {
      step: 3,
      title: "Import and Customize",
      description:
        "Use the component anywhere in your app. Pass your GitHub username and your API base URL as props.",
      codeBlock: {
        tsTailwind: `import GithubContributionGraph from '@/components/GithubContributionGraph';
  
<GithubContributionGraph 
  username="your-github-username" 
  apiBaseUrl="https://your-api-url.com" 
/>`,
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
      <GithubContributionGraph username="maximelbv" />
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
  name: "Github Contribution Graph",
  description: "",
  created: "2025-04-28",
  category: Categories.DATA_VIZ,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: ex,
  props: props,
  dependencies: [],
};

export default Meta;
