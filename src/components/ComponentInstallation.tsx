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
    <div>
      <Tabs.Root defaultValue={installation[0].mode} variant="line">
        <Tabs.List rounded="l3" className="w-fit">
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
            <Tabs.Content value={mode.mode} key={index} className="!mt-4">
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
                    <TimelineContent className="!gap-1">
                      <span className="!font-bold !leading-5">
                        {step.title}
                      </span>
                      {step.description && (
                        <span className="!text-text-muted !text-sm">
                          {step.description}
                        </span>
                      )}
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
    </div>
  );
};

export default ComponentInstallation;
