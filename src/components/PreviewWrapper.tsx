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
      className={`${className} relative h-[400px] !border !border-border-default rounded-xl flex items-center justify-center`}
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
      <div key={key}>{children}</div>
    </div>
  );
};

export default PreviewWrapper;
