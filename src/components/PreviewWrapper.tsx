import { ReactNode } from "react";

interface IPreviewWrapperProps {
  children: ReactNode;
  className?: string;
}

const PreviewWrapper = ({ children, className }: IPreviewWrapperProps) => {
  return (
    <div
      className={`${className} h-[400px] !border !border-border-default rounded-xl flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default PreviewWrapper;
