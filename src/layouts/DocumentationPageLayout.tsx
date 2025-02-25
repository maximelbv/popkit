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

  const { name, code, props, dependencies } = componentData;

  return (
    <div className="!p-4 flex flex-col lg:gap-10 gap-4">
      <h1 className="lg:!text-[72px] !text-[46px] !font-black lg:!leading-[.7] !leading-[1]">
        {name}
      </h1>
      <ComponentOverview code={code} />
      {props && (
        <DocumentationElement title="Props">
          <PropsTable props={props} />
        </DocumentationElement>
      )}
      {dependencies && (
        <DocumentationElement title="Dependencies">
          <DependenciesList dependencies={dependencies} />
        </DocumentationElement>
      )}
    </div>
  );
};

export default DocumentationPageLayout;
