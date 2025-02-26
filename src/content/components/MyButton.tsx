// MyButton.tsx

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
        js: "npm install my-button-package",
        ts: "npm install my-button-package",
        jsTailwind: "npm install my-button-package --with-tailwind",
        tsTailwind: "npm install my-button-package --with-tailwind",
      } as ICode,
    },
    {
      step: 2,
      title: "Configuration manuelle",
      description:
        "Copiez-collez le code suivant dans votre projet pour importer le composant.",
      codeBlock: {
        js: "import MyButton from 'my-button-package';",
        ts: "import MyButton from 'my-button-package';",
        jsTailwind:
          "import MyButton from 'my-button-package'; // avec Tailwind",
        tsTailwind:
          "import MyButton from 'my-button-package'; // avec Tailwind",
      } as ICode,
    },
  ],
};

const cliInstallation = {
  mode: "cli",
  // variantSelectable non spécifié (donc false par défaut)
  steps: [
    {
      step: 1,
      title: "Installation via CLI",
      description: "Utilisez la commande CLI pour installer le package.",
      codeBlock: {
        npm: "npm install -g my-button-cli",
        yarn: "yarn global add my-button-cli",
        pnpm: "pnpm add -g my-button-cli",
      },
    },
  ],
};

const myButtonOverview = {
  preview: function MyButtonPreview() {
    const [text, setText] = useState("Default");

    return (
      <div className="flex flex-col gap-4">
        <PreviewWrapper>
          <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
            {text}
          </div>
        </PreviewWrapper>

        <DocumentationElement title="Customize">
          <Input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </DocumentationElement>
      </div>
    );
  },
  code: `
  const MyButton = () => {
    <button>My Button</button>;
  }
  `,
};

const myButtonComponent: IComponent = {
  name: "My Button",
  description:
    "Un composant bouton simple avec différents modes d'installation.",
  category: Categories.BUTTONS,
  status: Status.NEW,
  overview: myButtonOverview,
  installation: [manualInstallation, cliInstallation],
  props: [
    {
      property: "text",
      type: "string",
      default: '"Click me"',
      description: "Texte affiché sur le bouton.",
    },
  ],
  dependencies: [],
};

export default myButtonComponent;
