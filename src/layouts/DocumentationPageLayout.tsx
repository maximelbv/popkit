import { useParams } from "react-router";
import PropsTable from "@/components/PropsTable";
import ComponentOverview from "@/components/ComponentOverview";
import DocumentationElement from "@/components/DocumentationElement";
import DependenciesList from "@/components/DependenciesList";
import { useComponents } from "@/hooks/useComponents";

const DocumentationPageLayout = () => {
  const { componentName } = useParams();
  const components = useComponents();
  const componentData = components.find(
    (comp) => comp.name.toLowerCase().replace(/\s+/g, "-") === componentName
  );

  if (!componentData) return <div>❌ No component found.</div>;

  const { name, description, overview, installation, props, dependencies } =
    componentData;

  return (
    <div className="!p-4 flex flex-col lg:gap-6 gap-4">
      <div>
        <h1 className="lg:!text-[72px] !text-[46px] !font-black lg:!leading-[.7] !leading-[1]">
          {name}
        </h1>
        {description && (
          <p className="text-text-muted md:!mt-4 !mt-2 !max-w-[600px]">
            {description}
          </p>
        )}
      </div>
      <ComponentOverview overview={overview} />
      {installation && (
        <DocumentationElement title="Installation">
          <></>
        </DocumentationElement>
      )}
      {props && (
        <DocumentationElement title="Props">
          <PropsTable props={props} />
        </DocumentationElement>
      )}
      <DocumentationElement title="Examples ?">
        <></>
      </DocumentationElement>
      {dependencies && (
        <DocumentationElement title="Dependencies">
          <DependenciesList dependencies={dependencies} />
        </DocumentationElement>
      )}
    </div>
  );
};

export default DocumentationPageLayout;
