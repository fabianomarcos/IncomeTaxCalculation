import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import EmployeeForm from '../pages/EmployeeForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/form-employee" component={EmployeeForm} />
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
