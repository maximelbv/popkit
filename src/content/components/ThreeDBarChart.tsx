// MyButton.tsx

import { Categories } from "@/constants/categories";
import { IComponent } from "@/types/components";

const JS_CODE = `function MyButton({ text, color }) {
  return (
    <button style={{
      backgroundColor: color,
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px"
    }}>
      {text}
    </button>
  );
}
export default MyButton;`;

const TS_CODE = `import { FC } from "react";
interface MyButtonProps {
  text: string;
  color: string;
}
const MyButton: FC<MyButtonProps> = ({ text, color }) => {
  return (
    <button style={{
      backgroundColor: color,
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px"
    }}>
      {text}
    </button>
  );
};
export default MyButton;`;

const JS_TW_CODE = `function MyButton({ text, color }) {
  return (
    <button className={\`bg-\${color}-500 text-white px-4 py-2 rounded\`}>
      {text}
    </button>
  );
}
export default MyButton;`;

const TS_TW_CODE = `import { FC } from "react";
interface MyButtonProps {
  text: string;
  color: string;
}
const MyButton: FC<MyButtonProps> = ({ text, color }) => {
  return (
    <button className={\`bg-\${color}-500 text-white px-4 py-2 rounded\`}>
      {text}
    </button>
  );
};
export default MyButton;`;

const component: IComponent = {
  name: "3D Bar chart",
  category: Categories.DATA_VIZ,
  code: {
    js: JS_CODE,
    ts: TS_CODE,
    jsTailwind: JS_TW_CODE,
    tsTailwind: TS_TW_CODE,
  },
};

export default component;
