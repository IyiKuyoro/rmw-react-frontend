import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Landing from './pages/Landing';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  </BrowserRouter>
);

export default App;
