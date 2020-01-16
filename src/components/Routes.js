import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/Home";
import Shipments from "../pages/Shipments";
import Shipment from "../pages/Shipment";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Shipments" component={Shipments} />
    <Route path="/Shipement" component={Shipment} />
  </Switch>
);

export default Routes;
