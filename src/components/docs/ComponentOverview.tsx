// ComponentOverview.tsx

import React from "react";
import { IOverview } from "@/types/components";
import { Tabs } from "@chakra-ui/react";
import { IoEyeOutline, IoCodeSharp } from "react-icons/io5";
import CodeBlock from "./CodeBlock";

interface ComponentOverviewProps {
  overview: IOverview;
}

const ComponentOverview: React.FC<ComponentOverviewProps> = ({ overview }) => {
  const { preview, code } = overview;

  return (
    <Tabs.Root defaultValue="preview" variant="line">
      <Tabs.List rounded="l3" className="w-fit">
        <Tabs.Trigger value="preview" className="!pl-1 flex items-center gap-1">
          <IoEyeOutline />
          <span>Preview</span>
        </Tabs.Trigger>
        {code && (
          <Tabs.Trigger value="code" className="!pl-2 flex items-center gap-1">
            <IoCodeSharp />
            <span>Code</span>
          </Tabs.Trigger>
        )}
      </Tabs.List>
      <Tabs.Content value="preview">{preview()}</Tabs.Content>
      {code && (
        <Tabs.Content value="code">
          <CodeBlock language="tsx" code={code} />
        </Tabs.Content>
      )}
    </Tabs.Root>
  );
};

export default ComponentOverview;
