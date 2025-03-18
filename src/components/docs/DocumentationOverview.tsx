import ComponentCard from "./ComponentCard";
import { LuBox } from "react-icons/lu";
import Divider from "./Divider";
import { useComponents } from "@/hooks/useComponents";
import { FiBook } from "react-icons/fi";

const DocumentationOverview = () => {
  const { componentsMeta, loadingMeta } = useComponents();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <span className="!font-bold !text-2xl xs:!text-3xl md:!text-4xl flex gap-2 items-center">
          <FiBook />
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
              <br /> <br />
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
        <span className="!font-bold !text-2xl xs:!text-3xl md:!text-4xl flex gap-2 items-center">
          <LuBox />
          Components Overview
        </span>
        <span className="text-text-muted !max-w-[600px]">
          Explore all available components in Popkit. You can use the quick-copy
          button or open the full documentation to learn more.
        </span>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {!loadingMeta &&
          componentsMeta.map((component) => (
            <ComponentCard component={component} key={component.name} />
          ))}
      </div>
    </div>
  );
};

export default DocumentationOverview;
