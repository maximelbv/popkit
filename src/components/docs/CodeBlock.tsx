import { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface ICodeBlockProps {
  language?: string;
  code: string;
  className?: string;
  highlightStyle?: React.ComponentProps<typeof SyntaxHighlighter>["style"];
}

const CodeBlock = ({
  language = "tsx",
  code,
  className,
  highlightStyle = {},
}: ICodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hasVerticalOverflow, setHasVerticalOverflow] = useState(false);
  const codeBlockRef = useRef<HTMLDivElement>(null);

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
      maxHeight: expanded ? "800px" : "400px",
      overflowX: expanded ? "auto" : hasVerticalOverflow ? "auto" : "auto",
      overflowY: expanded ? "auto" : "hidden",
    },
  } as Record<string, React.CSSProperties>;

  useEffect(() => {
    const checkOverflow = () => {
      if (codeBlockRef.current) {
        const preElement = codeBlockRef.current.querySelector("pre");
        if (preElement) {
          const scrollHeight = preElement.scrollHeight;
          const clientHeight = preElement.clientHeight;
          setHasVerticalOverflow(scrollHeight > clientHeight);
        }
      }
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    if (codeBlockRef.current) {
      resizeObserver.observe(codeBlockRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [code]);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) return;
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Error during text copy:", error);
    }
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      ref={codeBlockRef}
      style={{ position: "relative" }}
      className={`!max-w-full !z-10 ${className}`}
    >
      {hasVerticalOverflow && !expanded && (
        <div
          className="!w-full !h-[30%] !absolute !bottom-0 !left-0 !rounded-md !z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5, 6, 8, 1) 0%, rgba(5, 6, 8, 0) 100%)",
          }}
        ></div>
      )}
      <Button
        variant="ghost"
        onClick={handleCopy}
        className="!cursor-pointer !absolute !top-2 !right-2 !p-2 !rounded-md hover:!bg-background !bg-elem-background"
      >
        {copied ? <FaRegCircleCheck /> : <FiCopy />}
      </Button>

      {hasVerticalOverflow && (
        <Button
          variant="ghost"
          onClick={handleExpand}
          className="!cursor-pointer !absolute !bottom-2 !left-1/2 -translate-x-1/2 !p-2 !rounded-md hover:!bg-background !bg-elem-background"
        >
          {expanded ? <MdExpandLess /> : <MdExpandMore />}
          {expanded ? "Collapse" : "Expand"}
        </Button>
      )}

      <SyntaxHighlighter
        language={language}
        style={customStyles}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
