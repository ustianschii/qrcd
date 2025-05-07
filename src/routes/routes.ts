import { RouteConfig } from "~/routes/types";
import { NotFound } from "~/components/NotFound";
import Dashboard from "~/features/home/pages/Dashboard/Dashboard";

import { paths } from "./paths";

export const routes: RouteConfig[] = [
  {
    path: paths.Dashboard,
    component: Dashboard,
  },
  {
    path: "*",
    component: NotFound,
    layout: null,
  },
];
