import { useState } from "react";
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
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error during text copy :", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          background: "none",
          border: "1px solid var(--color-border-default)",
          borderRadius: "4px",
          padding: "0.25rem 0.5rem",
          cursor: "pointer",
          color: "#c9d1d9",
        }}
      >
        {copied ? "Copié !" : "Copier"}
      </button>
      <SyntaxHighlighter language={language} style={customStyles}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
