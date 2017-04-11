import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import PagesContainer from '../containers/PagesContainer.js';
import CreatePageContainer from '../containers/CreatePageContainer.js';


class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Test</h1>
        <Navigation />
        <Route exact path="/pages" component={ PagesContainer }></Route>
        <Route exact path="/new-page" component={ CreatePageContainer }></Route>
      </main>
    );
  }
}

export default App;
