import { ReactNode } from "react";

interface ICustomizationWrapperProps {
  children?: ReactNode;
}

const CustomizationWrapper = ({ children }: ICustomizationWrapperProps) => {
  return <div>{children}</div>;
};

export default CustomizationWrapper;
