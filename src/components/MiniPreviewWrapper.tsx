import { Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { TbReload } from "react-icons/tb";

interface IMiniPreviewWrapperProps {
  children: ReactNode;
  className?: string;
  reloadButton?: boolean;
}

const MiniPreviewWrapper = ({
  children,
  className,
  reloadButton,
}: IMiniPreviewWrapperProps) => {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      className={`${className} relative aspect-video rounded-lg flex items-center justify-center`}
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

export default MiniPreviewWrapper;
