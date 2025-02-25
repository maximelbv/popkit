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
    <Tabs.Root defaultValue="preview" variant="line" className={`${className}`}>
      <Tabs.List rounded="l3" className="w-fit">
        <Tabs.Trigger value="preview" className="!pl-1">
          <IoEyeOutline />
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger value="code" className="!pl-1">
          <IoCodeSharp />
          Code
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview">{previewContent}</Tabs.Content>
      <Tabs.Content value="code">{codeContent}</Tabs.Content>
    </Tabs.Root>
  );
};

export default TabsLayout;
