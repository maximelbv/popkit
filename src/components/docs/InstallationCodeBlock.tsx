import { Alert, Tabs } from "@chakra-ui/react";
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
    if (!codeToShow) {
      return (
        <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>
              No code available for this installation mode and language
            </Alert.Title>
            <Alert.Description>
              Please change the language selected
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      );
    }
    return <CodeBlock code={codeToShow} />;
  }
  const entries = Object.entries(codeBlock);
  if (!entries || entries.length === 0) return null;
  const defaultTab = entries[0]?.[0] || "";
  if (!defaultTab) return null;
  return (
    <Tabs.Root defaultValue={defaultTab} variant="outline" size="sm">
      <Tabs.List className="before:!hidden">
        {entries.map(([key]) => (
          <Tabs.Trigger value={key} key={key}>
            {key}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      {entries.map(([key, value]) => {
        if (value === undefined || value === null) return null;
        return (
          <Tabs.Content className="!pt-0 !mt-0" value={key} key={key}>
            {typeof value === "string" ? (
              <CodeBlock
                highlightStyle={{
                  'pre[class*="language-"]': {
                    borderTopLeftRadius: "0px",
                  },
                }}
                code={value}
              />
            ) : isICode(value) ? (
              <VariantCodeBlock code={value} variant={variant} />
            ) : (
              <div className="p-4 text-text-muted bg-background-muted rounded">
                Format not supported
              </div>
            )}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

function VariantCodeBlock({
  code,
  variant,
}: {
  code: ICode;
  variant: Variant;
}) {
  if (!code) return null;
  const codeToShow = code[variant];
  if (!codeToShow) {
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>
            No code available for this installation mode and language
          </Alert.Title>
          <Alert.Description>
            Please change the language selected
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );
  }
  return <CodeBlock code={codeToShow} />;
}

export default InstallationCodeBlockRenderer;
