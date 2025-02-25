import { IDependency } from "./dependencies";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";

export interface IProp {
  property: string;
  type: string;
  default?: string;
  description: string;
}

export interface ICode {
  js: string;
  ts: string;
  jsTailwind: string;
  tsTailwind: string;
}

export interface IComponent {
  name: string;
  category: (typeof Categories)[keyof typeof Categories];
  status?: (typeof Status)[keyof typeof Status];
  code: ICode;
  // installation?: ...;
  props?: IProp[];
  dependencies?: IDependency[];
}
