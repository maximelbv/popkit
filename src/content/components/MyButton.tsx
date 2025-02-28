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
      title: "Importation du composant",
      description: "Copiez-collez le code suivant pour importer le composant.",
      codeBlock: {
        js: `import MyButton from 'my-button-package';`,
        ts: `import MyButton from 'my-button-package';`,
        jsTailwind: `import MyButton from 'my-button-package'; // avec Tailwind`,
        tsTailwind: `import MyButton from 'my-button-package'; // avec Tailwind`,
      } as ICode,
    },
    {
      step: 3,
      title: "Utilisation de base",
      description: "Exemple de code avec JSX.",
      codeBlock: {
        js: `<MyButton>Javascript</MyButton>`,
        ts: `<MyButton>Typescript</MyButton>`,
        jsTailwind: `<MyButton>Javascript + Tailwind</MyButton>`,
        tsTailwind: `<MyButton>Typescript + Tailwind</MyButton>`,
      } as ICode,
    },
    {
      step: 4,
      title: "Configuration avancée",
      description: "Personnalisation avec des props.",
      codeBlock: {
        js: `
<MyButton 
  color="primary"
  size="large"
>
  Click Me JS
</MyButton>
        `,
        ts: `
<MyButton 
  color="primary"
  size="large"
>
  Click Me TS
</MyButton>
        `,
        jsTailwind: `
      <MyButton 
        color="primary"
        size="large"
      >
        Click Me JS + TW
      </MyButton>
              `,
        tsTailwind: `
              <MyButton 
                color="primary"
                size="large"
              >
                Click Me TS + TW
              </MyButton>
                      `,
      } as ICode,
    },
    {
      step: 5,
      title: "Configuration Tailwind",
      description: "Personnalisation en utilisant Tailwind CSS.",
      codeBlock: {
        jsTailwind: `
<MyButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</MyButton>
        `,
        tsTailwind: `
<MyButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</MyButton>
        `,
      } as ICode,
    },
  ],
};

const cliInstallation = {
  mode: "cli",
  steps: [
    {
      step: 1,
      title: "Installation via CLI",
      description:
        "Utilisez l'une des commandes ci-dessous pour installer le package.",
      codeBlock: {
        npm: "npm install -g my-button-cli",
        yarn: "yarn global add my-button-cli",
        pnpm: "pnpm add -g my-button-cli",
        bun: "bun add -g my-button-cli",
      },
    },
    {
      step: 2,
      title: "Vérification de l'installation",
      description:
        "Exécutez la commande suivante pour vérifier l'installation.",
      codeBlock: "my-button-cli --version",
    },
    {
      step: 3,
      title: "Utilisation de la CLI",
      description: "Exemple d'utilisation de la CLI pour générer un composant.",
      codeBlock: `
my-button-cli generate --name=CustomButton --style=tailwind
      `,
    },
  ],
};

const scriptTagInstallation = {
  mode: "script tag",
  steps: [
    {
      step: 1,
      title: "Ajout du script",
      description: "Ajoutez ce script dans votre fichier HTML.",
      codeBlock: `
<script src="https://cdn.example.com/my-button.js"></script>
      `,
    },
    {
      step: 2,
      title: "Utilisation dans le DOM",
      description: "Ajoutez le composant dans votre fichier HTML.",
      codeBlock: `
<my-button>Click Me</my-button>
      `,
    },
  ],
};

const advancedConfiguration = {
  mode: "advanced",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Ajout d'une icône",
      description: "Ajoutez une icône à votre bouton.",
      codeBlock: {
        js: `
<MyButton>
  <Icon name="check" />
  Confirm
</MyButton>
        `,
        ts: `
<MyButton>
  <Icon name="check" />
  Confirm
</MyButton>
        `,
      } as ICode,
    },
    {
      step: 2,
      title: "Utilisation avec Redux",
      description:
        "Exemple d'utilisation du bouton dans un environnement Redux.",
      codeBlock: {
        js: `
import { useDispatch } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  return (
    <MyButton onClick={() => dispatch({ type: 'CLICK_ACTION' })}>
      Dispatch Action
    </MyButton>
  );
}
        `,
        ts: `
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const MyComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  
  return (
    <MyButton onClick={() => dispatch({ type: 'CLICK_ACTION' })}>
      Dispatch Action
    </MyButton>
  );
}
        `,
      } as ICode,
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
    return <button>
      My Button
    </button>;
  }
  `,
};

const myButtonComponent: IComponent = {
  name: "My Button",
  description:
    "Un composant bouton simple avec différents modes d'installation et configurations avancées.",
  category: Categories.BUTTONS,
  status: Status.NEW,
  overview: myButtonOverview,
  installation: [
    manualInstallation,
    cliInstallation,
    scriptTagInstallation,
    advancedConfiguration,
  ],
  props: [
    {
      property: "text",
      type: "string",
      default: '"Click me"',
      description: "Texte affiché sur le bouton.",
    },
    {
      property: "color",
      type: '"primary" | "secondary" | "danger"',
      default: '"primary"',
      description: "Définit la couleur du bouton.",
    },
    {
      property: "size",
      type: '"small" | "medium" | "large"',
      default: '"medium"',
      description: "Définit la taille du bouton.",
    },
    {
      property: "onClick",
      type: "() => void",
      description: "Callback exécuté lors du clic sur le bouton.",
    },
  ],
  dependencies: [],
};

export default myButtonComponent;
