import { Switch, createListCollection } from "@chakra-ui/react";
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValueText,
} from "@/components/docs/chakra/select";
import { Variant } from "@/types/components";
import { useState, useEffect } from "react";
import { RiTailwindCssFill } from "react-icons/ri";

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

  const languageOptions = Array.from(
    new Set(
      availableVariants.map((v) =>
        v.includes("Tailwind") ? v.replace("Tailwind", "") : v
      )
    )
  ) as ("js" | "ts")[];

  const hasTailwindVariants = languageOptions.some((lang) => {
    return (
      availableVariants.includes(lang as Variant) &&
      availableVariants.includes(`${lang}Tailwind` as Variant)
    );
  });

  const initialLanguage = initialVariant.replace("Tailwind", "") as "js" | "ts";
  const initialHasTailwind = initialVariant.includes("Tailwind");

  const [language, setLanguage] = useState<"js" | "ts">(initialLanguage);
  const [hasTailwind, setHasTailwind] = useState<boolean>(initialHasTailwind);

  const languageCollection = createListCollection({
    items: languageOptions.map((lang) => ({
      label: lang.toUpperCase(),
      value: lang,
    })),
  });

  const combineToVariant = (
    lang: "js" | "ts",
    useTailwind: boolean
  ): Variant => {
    return useTailwind ? (`${lang}Tailwind` as Variant) : (lang as Variant);
  };

  useEffect(() => {
    const newVariant = combineToVariant(language, hasTailwind);
    if (availableVariants.includes(newVariant)) {
      onChangeVariant(newVariant);
    }
  }, [language, hasTailwind, onChangeVariant, availableVariants]);

  const handleLanguageChange = (details: { value: string[] }) => {
    const newLanguage = details.value[0] as "js" | "ts";
    setLanguage(newLanguage);
  };

  const handleTailwindChange = () => {
    setHasTailwind((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      {hasTailwindVariants && (
        <div className="flex items-center justify-center gap-2">
          <Switch.Root
            checked={hasTailwind}
            id="tailwind-toggle"
            onCheckedChange={handleTailwindChange}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label className="flex items-center justify-center gap-2">
              <RiTailwindCssFill className="fill-[#00BCFF]" /> Tailwind
            </Switch.Label>
          </Switch.Root>
        </div>
      )}
      <div className="flex items-center justify-center">
        <SelectRoot
          collection={languageCollection}
          value={[language]}
          onValueChange={handleLanguageChange}
          width={20}
        >
          <SelectTrigger>
            <SelectValueText placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languageCollection.items.map((lang) => (
              <SelectItem item={lang} key={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </div>
    </div>
  );
};
