import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { IComponent } from "@/types/components";
import { formatStringToPath } from "@/utils/string-utils";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi";
import { NavLink } from "react-router";
import { useComponents } from "@/hooks/useComponents";

interface IComponentCardProps {
  component: IComponent;
}

const ComponentCard = ({ component }: IComponentCardProps) => {
  const { name, description, overview, examples } = component;
  const { componentsCode } = useComponents();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) {
        console.error("Clipboard API not supported");
        return;
      }
      if (!overview.quickCopyCode) {
        return;
      }

      const componentKey = overview.quickCopyCode;
      const codeToCopy = componentsCode[componentKey] || componentKey;

      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Error during text copy :", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center !border-b !border-border-default"></div>

      <div className="!mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <div className="col-span-2">
          {overview.miniPreview ? (
            overview.miniPreview({ className: "md:!aspect-auto h-full" })
          ) : (
            <div className="aspect-video bg-elem-background rounded-md">
              No preview :(
            </div>
          )}
        </div>

        {examples?.miniExamples && (
          <div className="h-full hidden md:grid">{examples.miniExamples()}</div>
        )}
      </div>

      <div className="!mt-2 !pt-0 !flex !flex-col !gap-3 !h-full !justify-between">
        <div className="flex flex-col">
          <span className="!text-3xl !font-bold">{name}</span>
          {description && (
            <span className="!text-sm !text-text-muted max-w-[600px]">
              {description}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="surface" size="xs" asChild>
            <NavLink
              to={`/${DOC_PATH}/${COMPONENTS_PATH}/${formatStringToPath(name)}`}
            >
              <HiOutlineDocument />
              View documentation
            </NavLink>
          </Button>
          {overview.quickCopyCode && (
            <Button variant="surface" size="xs" onClick={handleCopy}>
              {copied ? <FaRegCircleCheck /> : <FiCopy />}
              Copy
            </Button>
          )}
        </div>
      </div>
    </div>
    // <div className="flex flex-col !border !border-border-default rounded-2xl">
    //   <div className="!py-2 !px-4 flex justify-between items-center !border-b !border-border-default">
    //     <span className="!text-sm !text-text-muted">{category}</span>
    //   </div>

    //   {overview.miniPreview ? (
    //     <div className="!m-4">{overview.miniPreview()}</div>
    //   ) : (
    //     <div className="!m-4 aspect-video bg-elem-background rounded-md"></div>
    //   )}
    //   {examples?.miniExamples && (
    //     <div className="!px-4">{examples.miniExamples()}</div>
    //   )}

    //   <div className="!p-4 !mt-3 !pt-0 !flex !flex-col !gap-3 !h-full !justify-between">
    //     <div className="flex flex-col">
    //       <span className="!text-3xl !font-bold">{name}</span>
    //       {description && (
    //         <span className="!text-sm !text-text-muted">{description}</span>
    //       )}
    //     </div>

    //     <div className="flex gap-2">
    //       <Button variant="surface" size="xs" asChild>
    //         <NavLink
    //           to={`/${DOC_PATH}/${COMPONENTS_PATH}/${formatStringToPath(name)}`}
    //         >
    //           <HiOutlineDocument />
    //           View documentation
    //         </NavLink>
    //       </Button>
    //       {overview.quickCopyCode && (
    //         <Button variant="surface" size="xs" onClick={handleCopy}>
    //           {copied ? <FaRegCircleCheck /> : <FiCopy />}
    //           Copy
    //         </Button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ComponentCard;
