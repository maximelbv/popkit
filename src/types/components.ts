import { ComponentType } from "react";
import { IDependency } from "./dependencies";
import { Category } from "./categories";

export type CodeFormat = "js" | "ts";
export type Status = "new" | "updated";

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
  component: IComponentBlock[];
  additional: ICodeBlock[];
}

export interface IComponent {
  name: string;
  category: Category;
  preview?: ComponentType;
  code?: ICode;
  props?: IProp[];
  dependencies?: IDependency[];
  status: Status;
}
