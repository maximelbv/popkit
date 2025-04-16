import ComponentCard from "./ComponentCard";
import { LuBox } from "react-icons/lu";
import { useComponents } from "@/hooks/useComponents";

const DocumentationOverview = () => {
  const { componentsMeta, loadingMeta } = useComponents();

  return (
    <div className="flex flex-col gap-6">
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

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {!loadingMeta &&
          componentsMeta.map((component) => (
            <ComponentCard component={component} key={component.name} />
          ))}
      </div>
    </div>
  );
};

export default DocumentationOverview;
