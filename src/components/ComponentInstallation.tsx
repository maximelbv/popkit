// ComponentInstallation.tsx

import { useState } from "react";
import { Tabs } from "@chakra-ui/react";
import { IInstallationMode, Variant } from "@/types/components";
import InstallationCodeBlockRenderer from "./InstallationCodeBlock";
import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
} from "./ui/timeline";
import { InstallationVariantSelector } from "./InstallationVariantSelector";
import { getAvailableVariants } from "@/utils/collection-utils";

interface IComponentInstallationProps {
  installation: IInstallationMode[];
}

const ComponentInstallation = ({
  installation,
}: IComponentInstallationProps) => {
  const [modeVariants, setModeVariants] = useState<Record<number, Variant>>({});

  const handleVariantChange = (modeIndex: number, newVariant: Variant) => {
    setModeVariants((prev) => ({ ...prev, [modeIndex]: newVariant }));
  };

  return (
    <Tabs.Root variant="line">
      <Tabs.List>
        {installation.map((mode, index) => (
          <Tabs.Trigger value={mode.mode} key={index}>
            {mode.mode}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {installation.map((mode, index) => {
        const availableVariants = getAvailableVariants(mode.steps);
        const selectedVariant = mode.variantSelectable
          ? modeVariants[index] || availableVariants[0] || "js"
          : "js";

        return (
          <Tabs.Content value={mode.mode} key={index}>
            {mode.variantSelectable && availableVariants.length > 0 && (
              <InstallationVariantSelector
                onChangeVariant={(v) => handleVariantChange(index, v)}
                availableVariants={availableVariants}
                defaultVariant={selectedVariant}
              />
            )}
            <TimelineRoot>
              {mode.steps.map((step, stepIndex) => (
                <TimelineItem key={stepIndex}>
                  <TimelineConnector>{stepIndex + 1}</TimelineConnector>
                  <TimelineContent>
                    <div>{step.title}</div>
                    {step.description && <div>{step.description}</div>}
                    {step.codeBlock && (
                      <InstallationCodeBlockRenderer
                        codeBlock={step.codeBlock}
                        variant={selectedVariant}
                      />
                    )}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineRoot>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default ComponentInstallation;
