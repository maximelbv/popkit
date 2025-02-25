import { ReactNode } from "react";

interface IDocumentationElementProps {
  title: string;
  children: ReactNode;
}

const DocumentationElement = ({
  title,
  children,
}: IDocumentationElementProps) => {
  return (
    <div className="flex flex-col lg:gap-4 gap-3">
      <span className="!font-bold lg:!text-3xl !text-2xl">{title}</span>
      {children}
    </div>
  );
};

export default DocumentationElement;
