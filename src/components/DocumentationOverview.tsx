import { getAllComponents } from "@/utils/file-utils";
import ComponentCard from "./ComponentCard";
import { LuBox } from "react-icons/lu";
import Divider from "./Divider";
import { LogoSimple } from "./Logo";

const DocumentationOverview = () => {
  const components = getAllComponents();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <span className="!font-bold !text-4xl flex gap-2 items-center">
          <LogoSimple />
          Welcome to Popkit !
        </span>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="!font-bold !text-xl">What is this Project ?</span>
            <span className="text-text-muted">
              Popkit is a personal 'copy & paste' library where I store and
              experiment with UI components, animations, and interactivity,
              <br />
              primarily using TypeScript and Tailwind CSS.
              <br />
              <strong className="underline">
                It’s not designed as a polished, production-ready solution
              </strong>
              , but rather as a sandbox for testing ideas and refining concepts.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="!font-bold !text-xl">Can i use it ?</span>
            <span className="text-text-muted">
              Feel free to use it ! While Popkit is primarily for my own use,
              you're welcome to explore and integrate any components you find
              useful. <br />
              Just keep in mind that it's not actively maintained for stability
              or long-term support.
            </span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-1">
        <span className="!font-bold !text-4xl flex gap-2 items-center">
          <LuBox />
          Components Overview
        </span>
        <span className="text-text-muted !max-w-[600px]">
          Explore all available components in Popkit. You can use the quick-copy
          button or open the full documentation to learn more.
        </span>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {components.map((component) => (
          <ComponentCard component={component} key={component.name} />
        ))}
      </div>
    </div>
  );
};

export default DocumentationOverview;
