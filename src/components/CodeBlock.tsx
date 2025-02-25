import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ICodeBlockProps {
  language: string;
  code: string;
}

const customStyles = {
  ...oneDark,
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "#18181B",
    color: "#c9d1d9",
  },
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "#18181B",
    padding: "0",
    borderRadius: "8px",
  },
};

const CodeBlock = ({ language, code }: ICodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={customStyles}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
