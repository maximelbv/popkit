import { Navigate, useParams } from "react-router";
import PropsTable from "@/components/docs/PropsTable";
import ComponentOverview from "@/components/docs/ComponentOverview";
import DocumentationElement from "@/components/docs/DocumentationElement";
import DependenciesList from "@/components/docs/DependenciesList";
import { useComponents } from "@/hooks/useComponents";
import ComponentInstallation from "@/components/docs/ComponentInstallation";
import { DOC_PATH } from "@/constants/paths";

const DocumentationPageLayout = () => {
  const { componentName } = useParams();
  const components = useComponents();
  const componentData = components.find(
    (comp) => comp.name.toLowerCase().replace(/\s+/g, "-") === componentName
  );

  if (!componentData) return <Navigate to={`/${DOC_PATH}`} replace />;

  const {
    name,
    description,
    overview,
    installation,
    props,
    dependencies,
    examples,
  } = componentData;

  return (
    <div className="flex flex-col lg:gap-12 gap-8 !max-w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="lg:!text-[72px] !text-[46px] !font-black lg:!leading-[.7] !leading-[1]">
            {name}
          </h1>
          {description && (
            <p className="text-text-muted !max-w-[600px]">{description}</p>
          )}
        </div>
        <ComponentOverview overview={overview} />
      </div>

      {installation && (
        <DocumentationElement title="Installation">
          <ComponentInstallation installation={installation} />
        </DocumentationElement>
      )}
      {examples && (
        <DocumentationElement title="Examples">
          {examples().map((example, index) => (
            <div key={index}>{example}</div>
          ))}
        </DocumentationElement>
      )}
      {props && (
        <DocumentationElement title="Props">
          <PropsTable props={props} />
        </DocumentationElement>
      )}
      {dependencies && dependencies.length > 0 && (
        <DocumentationElement title="Dependencies">
          <DependenciesList dependencies={dependencies} />
        </DocumentationElement>
      )}
    </div>
  );
};

export default DocumentationPageLayout;
