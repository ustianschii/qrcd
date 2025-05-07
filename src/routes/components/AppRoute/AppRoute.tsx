import { memo, PropsWithChildren, useMemo } from "react";
import defaultTo from "lodash/defaultTo";

import { RouteConfig } from "~/routes/types";
import { DefaultLayout } from "~/layouts";

interface AppRouteProps {
  route: Omit<RouteConfig, "path">;
}

const AppRoute: React.FC<AppRouteProps> = ({
  route: { component: Component, layout },
}) => {
  const Layout = useMemo(() => {
    if (layout === null) {
      return ({ children }: PropsWithChildren) => children;
    }

    return defaultTo(layout, DefaultLayout);
  }, [layout]);

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default memo(AppRoute);
