// BarChart.tsx

import DocumentationElement from "@/components/DocumentationElement";
import PreviewWrapper from "@/components/PreviewWrapper";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { IComponent, ICode } from "@/types/components";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

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
  code: `import React, { useState, useEffect } from "react";

const MyBarChart = ({
  title = "Graphique en barres",
  data = [
    { label: "Janvier", value: 40 },
    { label: "Février", value: 60 },
    { label: "Mars", value: 80 },
    { label: "Avril", value: 100 },
  ],
  width = "100%",
  height = 300,
  barColor = "#3498db",
}) => {
  const [animatedData, setAnimatedData] = useState(
    data.map((d) => ({ ...d, animatedValue: 0 }))
  );

  useEffect(() => {
    const animation = setTimeout(() => {
      setAnimatedData(
        data.map((d) => ({ ...d, animatedValue: d.value }))
      );
    }, 500);
    return () => clearTimeout(animation);
  }, [data]);

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        background: "#fff",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h3>
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          background: "#f9f9f9",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {animatedData.map((d, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "40px",
                background: barColor,
                transition: "height 1s ease-in-out",
                borderRadius: "4px",
              }}
            ></div>
            <span style={{ fontSize: "12px", display: "block", marginTop: "5px" }}>
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBarChart;`,
};
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
        ts: myBarChartOverview.code,
      } as ICode,
    },
  ],
};

const myBarChartComponent: IComponent = {
  name: "My Bar Chart",
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
