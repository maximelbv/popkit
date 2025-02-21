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
    code,
    props,
    dependencies,
  } = componentData;

  const previewContent = (
    <div className="flex flex-col gap-16">
      {PreviewComponent && <PreviewComponent />}
      {props && (
        <div className="flex flex-col gap-4">
          <span className="!font-bold !text-3xl">Props</span>
          <PropsTable props={props} />
        </div>
      )}
      {dependencies && (
        <div className="flex flex-col gap-4">
          <span className="!font-bold !text-3xl">Dependencies</span>
          <div className="flex gap-2">
            {dependencies.map((dep) => (
              <Button
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
    <div className="!p-4 flex flex-col gap-10">
      <h1 className="!text-[72px] !font-black !leading-[.7]">{name}</h1>
      <TabsLayout previewContent={previewContent} codeContent={codeContent} />
    </div>
  );
};

export default ComponentDocumentationLayout;
