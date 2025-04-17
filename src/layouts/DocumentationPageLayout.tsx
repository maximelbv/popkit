import { Navigate, useParams } from "react-router";
import PropsTable from "@/components/docs/PropsTable";
import ComponentOverview from "@/components/docs/ComponentOverview";
import DocumentationElement from "@/components/docs/DocumentationElement";
import DependenciesList from "@/components/docs/DependenciesList";
import { useComponents } from "@/hooks/useComponents";
import ComponentInstallation from "@/components/docs/ComponentInstallation";
import { DOC_PATH } from "@/constants/paths";
import { Skeleton } from "@chakra-ui/react";

const DocumentationPageLayoutSkeleton = () => {
  return (
    <div className="flex flex-col lg:gap-12 gap-8 !max-w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 lg:gap-4">
          <Skeleton height="60px" width="50%" />
          <div className="flex flex-col gap-1 max-w-[600px]">
            <Skeleton height="20px" />
            <Skeleton height="20px" width="80%" />
          </div>
        </div>
        <Skeleton height="400px" />
        <Skeleton height="400px" />
        <Skeleton height="400px" />
      </div>
    </div>
  );
};

const DocumentationPageLayout = () => {
  const { componentName } = useParams();
  const { componentsMeta, loadingMeta } = useComponents();

  if (loadingMeta) return <DocumentationPageLayoutSkeleton />;

  const componentData = componentsMeta.find(
    (comp) => comp.name.toLowerCase().replace(/\s+/g, "-") === componentName
  );

  if (!componentData) {
    return <Navigate to={`/${DOC_PATH}`} replace />;
  }

  const {
    name,
    description,
    overview,
    installation,
    props,
    dependencies,
    examples,
    info,
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
          {info && info()}
        </div>
        <ComponentOverview overview={overview} />
      </div>

      {installation && (
        <DocumentationElement title="Installation">
          <ComponentInstallation installation={installation} />
        </DocumentationElement>
      )}
      {examples?.examples && (
        <DocumentationElement title="Examples">
          {examples.examples()}
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
