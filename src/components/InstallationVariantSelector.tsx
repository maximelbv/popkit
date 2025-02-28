import { Variant } from "@/types/components";
import { useState } from "react";

interface IInstallationVariantSelectorProps {
  onChangeVariant: (variant: Variant) => void;
  availableVariants: Variant[];
  defaultVariant?: Variant;
}

export const InstallationVariantSelector = ({
  onChangeVariant,
  availableVariants,
  defaultVariant,
}: IInstallationVariantSelectorProps) => {
  const initialVariant =
    defaultVariant && availableVariants.includes(defaultVariant)
      ? defaultVariant
      : availableVariants[0];

  const [localVariant, setLocalVariant] = useState<Variant>(initialVariant);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as Variant;
    setLocalVariant(val);
    onChangeVariant(val);
  };

  return (
    <select value={localVariant} onChange={handleChange}>
      {availableVariants.map((variant) => (
        <option key={variant} value={variant}>
          {variant.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
