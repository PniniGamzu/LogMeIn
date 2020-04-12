import { Switch, Redirect } from "react-router-dom";
import React from "react";
import { Route } from "../components/common/route";

const HeroesPage = React.lazy(() => import("./heroes"));

export const ROUTE_PATHS = {
  MAIN_PAGE: "/heroes",
};

const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.MAIN_PAGE}>
      <HeroesPage />
    </Route>
    <Route path="/">
      <Redirect to={ROUTE_PATHS.MAIN_PAGE} />
    </Route>
  </Switch>
);

export default Routes;
