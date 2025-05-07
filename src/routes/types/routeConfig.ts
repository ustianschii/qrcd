import { Nullable } from "~/types";

export interface RouteConfig {
  path: string;
  component: React.ElementType;
  layout?: Nullable<React.ElementType>;
}
