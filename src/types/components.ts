import { ReactNode } from "react";
import { Dependency } from "./dependencies";
import { Category } from "./categories";

export type CodeFormat = "js" | "ts";

export interface IProp {
  property: string;
  type: string;
  default?: string;
  description: string;
}

export interface ICodeBlock {
  name: string;
  filePath: string;
}

export interface IComponentBlock {
  format: CodeFormat;
  withTailwind: boolean;
  filePath: string;
}

export interface ICode {
  code: IComponentBlock[];
  additional: ICodeBlock[];
}

export interface IComponent {
  name: string;
  category: Category;
  preview?: ReactNode;
  code?: ICode;
  props?: IProp[];
  dependencies?: Dependency[];
}
