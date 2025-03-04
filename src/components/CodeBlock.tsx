import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";

interface ICodeBlockProps {
  language?: string;
  code: string;
  className?: string;
  highlightStyle?: React.ComponentProps<typeof SyntaxHighlighter>["style"];
}

const CodeBlock = ({
  language = "ts",
  code,
  className,
  highlightStyle = {},
}: ICodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const customStyles = {
    ...oneDark,
    ...highlightStyle,
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      ...highlightStyle['code[class*="language-"]'],
      background: "var(--color-elem-background)",
      color: "#c9d1d9",
    },
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      ...highlightStyle['pre[class*="language-"]'],
      background: "var(--color-elem-background)",
      borderRadius: "8px",
      margin: "0",
      border: "1px solid var(--color-border-default)",
      maxHeight: "415px",
    },
  };

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
    <div style={{ position: "relative" }} className={`${className}`}>
      <button
        onClick={handleCopy}
        className={`!cursor-pointer !absolute !top-2 !right-2 !p-2 rounded-md hover:!bg-background !bg-elem-background`}
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
