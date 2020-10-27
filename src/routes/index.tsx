import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Employee from '../pages/Employee';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/form-employee" component={Employee} />
    <Route path="/form-employee/:id" component={Employee} />
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
