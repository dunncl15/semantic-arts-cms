import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import PagesContainer from '../containers/PagesContainer.js';


class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Test</h1>
        <Navigation />
        <Route exact path="/pages" component={ PagesContainer }></Route>
      </main>
    );
  }
}

export default App;
