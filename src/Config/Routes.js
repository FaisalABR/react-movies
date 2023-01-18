import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Catalog from "../Pages/Catalog";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/:category/search/:keyword"
        component={withRouter(Catalog)}
      />
      <Route exact path="/:category/:id" component={withRouter(Detail)} />
      <Route exact path="/:category" component={withRouter(Catalog)} />
      <Route exact path="/" component={withRouter(Home)} />
    </Switch>
  );
};

export default Routes;
