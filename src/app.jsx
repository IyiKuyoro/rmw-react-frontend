import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
