import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from '../components/Footer';

import Main from '../pages/main';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
