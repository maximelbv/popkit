// BarChart.tsx

import DocumentationElement from "@/components/DocumentationElement";
import PreviewWrapper from "@/components/PreviewWrapper";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent, ICode } from "@/types/components";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Installation du package",
      description:
        "Installez le package via le gestionnaire de paquets de votre choix.",
      codeBlock: {
        js: "npm install my-barchart-package",
        ts: "npm install my-barchart-package",
      } as ICode,
    },
    {
      step: 2,
      title: "Importation du composant",
      description: "Copiez-collez le code suivant pour importer le composant.",
      codeBlock: {
        js: `import MyBarChart from 'my-barchart-package';`,
        ts: `import MyBarChart from 'my-barchart-package';`,
      } as ICode,
    },
  ],
};

const myBarChartOverview = {
  preview: function MyBarChartPreview() {
    const [title, setTitle] = useState("Graphique en barres");

    return (
      <div className="flex flex-col gap-4">
        <PreviewWrapper reloadButton={true}>
          <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
            <h3>{title}</h3>
            <div
              style={{ width: "100%", height: "200px", background: "#f0f0f0" }}
            >
              [Graphique en barres mocké]
            </div>
          </div>
        </PreviewWrapper>

        <DocumentationElement title="Personnaliser le titre">
          <Input
            type="text"
            placeholder="Entrez un titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DocumentationElement>
      </div>
    );
  },
  code: `const MyBarChart = ({ title = "Graphique en barres" }) => {
    return (
      <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
        <h3>{title}</h3>
        <div style={{ width: "100%", height: "200px", background: "#f0f0f0" }}>
          [Graphique en barres mocké]
        </div>
      </div>
    );
  };

export default MyBarChart;`,
};

const myBarChartComponent: IComponent = {
  name: "My Bar Chart 2",
  description:
    "Un composant de graphique en barres simple avec différents modes d'installation et personnalisation basique.",
  category: Categories.DATA_VIZ,
  status: Status.NEW,
  overview: myBarChartOverview,
  installation: [manualInstallation],
  props: [
    {
      property: "title",
      type: "string",
      default: '"Graphique en barres"',
      description: "Titre du graphique.",
    },
  ],
  dependencies: [],
  examples: () => [
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h3>Exemple de graphique</h3>
      <div style={{ width: "100%", height: "200px", background: "#f0f0f0" }}>
        [Graphique en barres mocké]
      </div>
    </div>,
  ],
};

export default myBarChartComponent;
