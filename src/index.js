import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import "./assets/scss/material-kit-pro-react.scss";

// pages for this product
import { initializeGA } from "./constants/utils";
import hist from "./history";
import indexRoutes from "./routes";

initializeGA();
ReactGA.timing({
  category: "JS Libraries",
  variable: "load",
  value: 20, // in milliseconds
  label: "CDN libs"
});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
