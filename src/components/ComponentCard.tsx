import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { IComponent } from "@/types/components";
import { formatStringToPath } from "@/utils/string-utils";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi";
import { NavLink } from "react-router";

interface IComponentCardProps {
  component: IComponent;
}

const ComponentCard = ({ component }: IComponentCardProps) => {
  const { name, description, category, overview } = component;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) {
        console.error("Clipboard API not suported");
        return;
      }
      if (!overview.quickCopyCode) {
        return;
      }
      await navigator.clipboard.writeText(overview.quickCopyCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Error during text copy :", error);
    }
  };

  return (
    <div className="flex flex-col !border !border-border-default rounded-2xl">
      <div className="!py-2 !px-4 flex justify-between items-center !border-b !border-border-default">
        <span className="!text-sm !text-text-muted">{category}</span>
      </div>

      {overview.miniPreview ? (
        <div className="!m-3">{overview.miniPreview()}</div>
      ) : (
        <div className="!m-3 aspect-video bg-elem-background rounded-md"></div>
      )}

      <div className="!p-3 !flex !flex-col !gap-2 !h-full !justify-between">
        <div className="flex flex-col">
          <span className="!text-lg !font-bold">{name}</span>
          {description && (
            <span className="!text-sm !text-text-muted">{description}</span>
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
  );
};

export default ComponentCard;
