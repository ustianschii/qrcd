import { RouteConfig } from "~/routes/types";
import { NotFound } from "~/components/NotFound";
import { HomePage } from "~/features/home/pages";

import { paths } from "./paths";

export const routes: RouteConfig[] = [
  {
    path: paths.Index,
    component: HomePage,
  },
  {
    path: "*",
    component: NotFound,
    layout: null,
  },
];
