import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Shipments from '../pages/Shipments';
import ShipmentDetails from '../pages/ShipmentDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Shipments" component={Shipments} />
    <Route path="/ShipmentDetails" component={ShipmentDetails} />
  </Switch>
);

export default Routes;
