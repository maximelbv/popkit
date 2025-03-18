import { Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { TbReload } from "react-icons/tb";

interface IPreviewWrapperProps {
  children: ReactNode;
  className?: string;
  reloadButton?: boolean;
}

const PreviewWrapper = ({
  children,
  className,
  reloadButton,
}: IPreviewWrapperProps) => {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      className={`${className} relative min-h-[400px] !p-4 !border !border-border-default rounded-xl flex items-center justify-center overflow-hidden`}
    >
      {reloadButton && (
        <Button
          variant="ghost"
          className="!aspect-square !rounded-lg !absolute !top-3 !right-3"
          onClick={handleReload}
        >
          <TbReload />
        </Button>
      )}
      <div key={key} className="!w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default PreviewWrapper;
