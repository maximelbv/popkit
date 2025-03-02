import { getAllComponents } from "@/utils/file-utils";
import ComponentCard from "./ComponentCard";
import { LuBox } from "react-icons/lu";

const DocumentationOverview = () => {
  const components = getAllComponents();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="!text-2xl xs:!text-3xl md:!text-5xl !font-black !leading-[1] sm:!leading-[0.8] flex items-start sm:items-center gap-2">
          <LuBox />
          Components Overview
        </h1>
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
