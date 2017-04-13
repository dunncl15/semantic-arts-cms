import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import PagesContainer from '../containers/PagesContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';
import CreatePageContainer from '../containers/CreatePageContainer.js';

const App = ({ pages }) => {
  return (
    <main className="App">
      <HeaderContainer />
      <Navigation />
      <Route exact path="/admin/pages" component={ PagesContainer }></Route>
      <Route exact path="/admin/new-page" component={ CreatePageContainer }></Route>
    </main>
  );
}

export default App;
