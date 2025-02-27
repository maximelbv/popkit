import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";

interface ICodeBlockProps {
  language: string;
  code: string;
}

const customStyles = {
  ...oneDark,
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "var(--color-elem-background)",
    color: "#c9d1d9",
  },
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "var(--color-elem-background)",
    padding: "0",
    borderRadius: "8px",
    border: "1px solid var(--color-border-default)",
  },
};

const CodeBlock = ({ language, code }: ICodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) {
        console.error("Clipboard API not suported");
        return;
      }
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Error during text copy :", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        className="!cursor-pointer !absolute !top-2 !right-2 !p-2 rounded-md hover:!bg-background"
      >
        {copied ? <FaRegCircleCheck /> : <FiCopy />}
      </button>
      <SyntaxHighlighter language={language} style={customStyles}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
