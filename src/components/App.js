import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import UserNavigation from './UserNavigation';
import PagesContainer from '../containers/PagesContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';
import CreatePageContainer from '../containers/CreatePageContainer.js';

const App = ({ pages, history }) => {

  return (
    <main className='App'>
      <Route exact path='/' component={ UserNavigation }></Route>
      <Route path='/admin' component={ HeaderContainer }></Route>
      <Route path='/admin' component={ Navigation }></Route>
      <Route exact path='/admin/pages' component={ PagesContainer }></Route>
      <Route exact path='/admin/new-page' component={ CreatePageContainer }></Route>
      <Route path='/admin/pages/edit/:title' render={ ({ match }) => {
        const page = pages.find(page => page.title === match.params.title);
        return <CreatePageContainer page={page} history={history}/>
      }}></Route>
    </main>
  );
}

export default App;
