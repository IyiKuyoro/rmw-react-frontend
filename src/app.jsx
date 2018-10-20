import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Landing from 'Pages/Landing';
import Header from 'Compounds/Header';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
