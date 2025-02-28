import { IDependency } from "./dependencies";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { JSX } from "react";

export type InstallationCodeBlock =
  | string
  | ICode
  | { [key: string]: string | ICode };

export type Variant = "js" | "ts" | "jsTailwind" | "tsTailwind";

export interface IProp {
  property: string;
  type: string;
  default?: string;
  description: string;
}

export interface ICode {
  js?: string;
  ts?: string;
  jsTailwind?: string;
  tsTailwind?: string;
}

export interface IInstallationStep {
  title: string;
  description?: string;
  codeBlock?: InstallationCodeBlock;
}

export interface IInstallationMode {
  mode: string;
  steps: IInstallationStep[];
  variantSelectable?: boolean;
}

export interface IOverview {
  preview: () => JSX.Element;
  code?: string;
}

export interface IComponent {
  name: string;
  description?: string;
  category: (typeof Categories)[keyof typeof Categories];
  status?: (typeof Status)[keyof typeof Status];
  overview: IOverview;
  installation?: IInstallationMode[];
  props?: IProp[];
  dependencies?: IDependency[];
}
