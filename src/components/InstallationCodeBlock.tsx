// InstallationCodeBlock.tsx

import { Tabs } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import { isICode } from "@/utils/collection-utils";
import { ICode, InstallationCodeBlock, Variant } from "@/types/components";

interface IInstallationCodeBlockRendererProps {
  codeBlock: InstallationCodeBlock;
  variant: Variant;
}

const InstallationCodeBlockRenderer = ({
  codeBlock,
  variant,
}: IInstallationCodeBlockRendererProps) => {
  if (!codeBlock) return null;

  if (typeof codeBlock === "string") {
    return <CodeBlock code={codeBlock} />;
  }

  if (isICode(codeBlock)) {
    const codeToShow = codeBlock[variant];
    if (!codeToShow) return null;
    return <CodeBlock code={codeToShow} />;
  }

  const entries = Object.entries(codeBlock);
  if (entries.length === 0) return null;

  return (
    <Tabs.Root>
      <Tabs.List>
        {entries.map(([key]) => (
          <Tabs.Trigger value={key} key={key}>
            {key}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {entries.map(([key, value]) => (
        <Tabs.Content value={key} key={key}>
          {typeof value === "string" ? (
            <CodeBlock code={value} />
          ) : isICode(value) ? (
            <NestedICode code={value} variant={variant} />
          ) : (
            <div>Format non géré</div>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

function NestedICode({ code, variant }: { code: ICode; variant: Variant }) {
  const codeToShow = code[variant];
  if (!codeToShow) return null;
  return <CodeBlock code={codeToShow} />;
}

export default InstallationCodeBlockRenderer;
