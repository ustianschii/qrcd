import { RouteConfig } from "~/routes/types";
import { NotFound } from "~/components/NotFound";
import { DashboardPage } from "~/features/dashboard/pages/DashboardPage";

import { paths } from "./paths";

export const routes: RouteConfig[] = [
  {
    path: paths.DashboardPage,
    component: DashboardPage,
  },
  {
    path: "*",
    component: NotFound,
    layout: null,
  },
];
