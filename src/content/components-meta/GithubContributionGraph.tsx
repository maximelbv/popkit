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
      description: `By default, the component comes preconfigured with a public API endpoint hosted by the original author.

This is useful for testing and quick integration, but not recommended for production.

To ensure full reliability and control, you should self-host the API by cloning the repository and deploying it on your own infrastructure:`,
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
        "Place the GithubContributionGraph component into your `/components` folder.",
      codeBlock: {
        tsTailwind: "GithubContributionGraph",
      },
    },
    {
      step: 3,
      title: "Import and Customize",
      description: `Use the component anywhere in your app. Pass your GitHub username as a prop.`,
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
  miniPreview: ({ className }: { className: string }) => (
    <MiniPreviewWrapper className={`${className}`}>
      <GithubContributionGraph username="torvalds" columns={30} />
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <GithubContributionGraph username="torvalds" />
    </PreviewWrapper>
  ),
  code: `import GithubContributionGraph from "@/components/GithubContributionGraph";

export default function GithubContributionGraphPreview() {
  return <GithubContributionGraph username={"torvalds"} />;
}`,
  quickCopyCode: manualInstallation.steps[1].codeBlock.tsTailwind,
};

const props = [
  {
    property: "username",
    type: "string",
    default: "required",
    description: "GitHub username to fetch contributions for.",
  },
  {
    property: "apiBaseUrl",
    type: "string",
    default: `"https://github-contributions-api.jogruber.de"`,
    description: "Base URL of the contributions API.",
  },
  {
    property: "rows",
    type: "number",
    default: "7",
    description:
      "Number of rows (days) per column in the graph. Usually 7 for a full week view.",
  },
  {
    property: "columns",
    type: "number",
    default: "52",
    description: "Number of columns to display.",
  },
  {
    property: "tileStyles",
    type: "CSSProperties",
    default: "{}",
    description: "Custom styles applied to each contribution tile.",
  },
  {
    property: "gridStyles",
    type: "CSSProperties",
    default: "{}",
    description: "Custom styles applied to the entire grid container.",
  },
  {
    property: "theme",
    type: `Theme`,
    default: `"green"`,
    description: "Color theme for the contribution tiles.",
  },
  {
    property: "enableTooltip",
    type: "boolean",
    default: "true",
    description: "Whether to enable custom tooltips on hover.",
  },
  {
    property: "displayName",
    type: "boolean",
    default: "false",
    description: "Whether to enable the username.",
  },
];

const ex = {
  examples: () => (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          columns={7}
          theme="purple"
          tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
          gridStyles={{ gap: "1px" }}
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={4}
          columns={12}
          theme="red"
          tileStyles={{ borderRadius: "20px", width: "20px", height: "20px" }}
          displayName={true}
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={1}
          columns={7}
          theme="orange"
          tileStyles={{ borderRadius: "3px", width: "30px", height: "80px" }}
          displayName={true}
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={20}
          columns={20}
          theme="blue"
          tileStyles={{ borderRadius: "3px", width: "7px", height: "7px" }}
          enableTooltip={false}
        />
      </MiniPreviewWrapper>
    </div>
  ),
  miniExamples: () => (
    <div className="grid gap-4 grid-cols">
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          columns={7}
          theme="purple"
          tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
          gridStyles={{ gap: "1px" }}
        />
      </MiniPreviewWrapper>
      <MiniPreviewWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={4}
          columns={12}
          theme="red"
          tileStyles={{ borderRadius: "20px", width: "20px", height: "20px" }}
          displayName={true}
        />
      </MiniPreviewWrapper>
    </div>
  ),
};

const Meta: IComponent = {
  name: "Github Contribution Graph",
  description:
    "A flexible GitHub contribution graph component for React, Powered by a lightweight external API from Jonathan Gruber.",
  created: "2025-04-28",
  category: Categories.DATA_VIZ,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: ex,
  props: props,
  dependencies: [
    {
      name: "Jonathan Gruber Github Contribution Api",
      link: "https://github.com/grubersjoe/github-contributions-api",
    },
  ],
};

export default Meta;
