import { BrowserRouter, Routes, Route } from "react-router";

import { routes } from "~/routes";
import { AppRoute } from "~/routes/components/AppRoute";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AppRoute route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
