import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Landing from './pages/Landing';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
  </BrowserRouter>
);

export default App;
