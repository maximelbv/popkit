import { importAllComponentsDocData } from "@/utils/file-utils";
import { IComponent } from "@/types/components";
import { useParams } from "react-router";

const ComponentDocumentationLayout = () => {
  const { componentName } = useParams();
  const components = importAllComponentsDocData();

  const componentData: IComponent | undefined = components.find(
    (comp) => comp.name.toLowerCase().replace(/\s+/g, "-") === componentName
  );

  if (!componentData) {
    return <div>❌ Composant non trouvé.</div>;
  }

  return (
    <div>
      <h1>{componentData.name}</h1>
      <p>Catégorie: {componentData.category}</p>
    </div>
  );
};

export default ComponentDocumentationLayout;
