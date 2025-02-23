import { importAllComponentsDocData } from "@/utils/file-utils";
import { IComponent } from "@/types/components";
import { useParams } from "react-router";
import TabsLayout from "./TabsLayout";
import PropsTable from "@/components/PropsTable";
import { Button } from "@chakra-ui/react";

const ComponentDocumentationLayout = () => {
  const { componentName } = useParams();
  const components = importAllComponentsDocData();

  const componentData: IComponent | undefined = components.find(
    (comp) => comp.name.toLowerCase().replace(/\s+/g, "-") === componentName
  );

  if (!componentData) {
    return <div>❌ No component found.</div>;
  }

  const {
    name,
    preview: PreviewComponent,
    props,
    dependencies,
  } = componentData;

  const previewContent = (
    <div className="flex flex-col lg:gap-16 gap-8">
      {PreviewComponent && <PreviewComponent />}
      {props && (
        <div className="flex flex-col lg:gap-4 gap-3">
          <span className="!font-bold lg:!text-3xl !text-2xl">Props</span>
          <PropsTable props={props} />
        </div>
      )}
      {dependencies && (
        <div className="flex flex-col lg:gap-4 gap-3">
          <span className="!font-bold lg:!text-3xl !text-2xl">
            Dependencies
          </span>
          <div className="flex gap-2 flex-wrap">
            {dependencies.map((dep) => (
              <Button
                key={dep.name}
                asChild
                variant="subtle"
                className="!rounded-full !px-4 !py-[1px]"
              >
                <a href={dep.link} target="blank_">
                  {dep.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const codeContent = <div></div>;

  return (
    <div className="!p-4 flex flex-col lg:gap-10 gap-4">
      <h1 className="lg:!text-[72px] !text-[46px] !font-black lg:!leading-[.7] !leading-[1]">
        {name}
      </h1>
      <TabsLayout previewContent={previewContent} codeContent={codeContent} />
    </div>
  );
};

export default ComponentDocumentationLayout;
