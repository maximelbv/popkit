import { Tabs } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoCodeSharp, IoEyeOutline } from "react-icons/io5";

interface ITabsLayoutProps {
  previewContent: ReactNode;
  codeContent: ReactNode;
  className?: string;
}

const TabsLayout = ({
  previewContent,
  codeContent,
  className,
}: ITabsLayoutProps) => {
  return (
    <Tabs.Root
      defaultValue="preview"
      variant="plain"
      className={`${className}`}
    >
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="preview">
          <IoEyeOutline />
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger value="code">
          <IoCodeSharp />
          Code
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="preview">{previewContent}</Tabs.Content>
      <Tabs.Content value="code">{codeContent}</Tabs.Content>
    </Tabs.Root>
  );
};

export default TabsLayout;
