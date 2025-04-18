import { useState } from "react";
import { Tabs } from "@chakra-ui/react";
import { IInstallationMode, Variant } from "@/types/components";
import InstallationCodeBlockRenderer from "./InstallationCodeBlock";
import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
} from "@/components/docs/chakra/timeline";
import { InstallationVariantSelector } from "./InstallationVariantSelector";
import { getAvailableVariants } from "@/utils/collection-utils";
import { useComponents } from "@/hooks/useComponents";

interface IComponentInstallationProps {
  installation: IInstallationMode[];
}

const ComponentInstallation = ({
  installation,
}: IComponentInstallationProps) => {
  const { componentsCode } = useComponents();
  const allAvailableVariants = installation.reduce((acc, mode) => {
    const modeVariants = getAvailableVariants(mode.steps);
    return [...new Set([...acc, ...modeVariants])];
  }, [] as Variant[]);
  const defaultVariant = allAvailableVariants.includes("tsTailwind")
    ? "tsTailwind"
    : allAvailableVariants.includes("ts")
    ? "ts"
    : allAvailableVariants[0] || "js";
  const [selectedVariant, setSelectedVariant] =
    useState<Variant>(defaultVariant);
  const handleVariantChange = (newVariant: Variant) => {
    setSelectedVariant(newVariant);
  };
  return (
    <div>
      <Tabs.Root defaultValue={installation[0].mode} variant="line">
        <div className="flex justify-between flex-wrap">
          <Tabs.List className="w-fit !mb-4">
            {installation.map((mode, index) => (
              <Tabs.Trigger value={mode.mode} key={index}>
                {mode.mode}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {allAvailableVariants.length > 0 && (
            <div className="!mb-4">
              <InstallationVariantSelector
                onChangeVariant={handleVariantChange}
                availableVariants={allAvailableVariants}
                defaultVariant={selectedVariant}
              />
            </div>
          )}
        </div>
        {installation.map((mode, index) => (
          <Tabs.Content value={mode.mode} key={index} className="!pt-1">
            <TimelineRoot>
              {mode.steps.map((step, stepIndex) => {
                let code: string | object = "";
                if (typeof step.codeBlock === "string") {
                  code = step.codeBlock;
                } else if (typeof step.codeBlock === "object") {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      step.codeBlock,
                      selectedVariant
                    )
                  ) {
                    const componentKey = step.codeBlock[
                      selectedVariant
                    ] as string;
                    code = componentsCode[componentKey] || componentKey;
                  } else {
                    code = step.codeBlock;
                  }
                }
                return (
                  <TimelineItem key={stepIndex}>
                    <TimelineConnector>{stepIndex + 1}</TimelineConnector>
                    <TimelineContent className="overflow-hidden">
                      <div className="flex flex-col gap-1">
                        <span className="!font-bold !leading-5">
                          {step.title}
                        </span>
                        {step.description && (
                          <span className="!text-text-muted !text-sm">
                            {step.description}
                          </span>
                        )}
                      </div>
                      {code && (
                        <InstallationCodeBlockRenderer
                          variant={selectedVariant}
                          codeBlock={code}
                        />
                      )}
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimelineRoot>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default ComponentInstallation;
