import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import UserNavigationContainer from '../containers/UserNavigationContainer.js';
import PagesContainer from '../containers/PagesContainer.js';
import Page from './Page.js';
import HeaderContainer from '../containers/HeaderContainer.js';
import CreatePageContainer from '../containers/CreatePageContainer.js';

const App = ({ pages, history }) => {

  return (
    <main className='App'>
      <Route path='/' component={ UserNavigationContainer }></Route>
      <Route path='/pages/:title' render={ ({ match }) => {
        console.log(match);
        const page = pages.find(page => page.title.toLowerCase() === match.params.title.toLowerCase());
        return <Page page={page} />
      }}></Route>
      <Route path='/admin' component={ HeaderContainer }></Route>
      <Route path='/admin' component={ Navigation }></Route>
      <Route exact path='/admin/pages' component={ PagesContainer }></Route>
      <Route exact path='/admin/new-page' component={ CreatePageContainer }></Route>
      <Route path='/admin/pages/edit/:id' render={ ({ match }) => {
        console.log(match);
        const page = pages.find(page => page.id === parseInt(match.params.id));
        return <CreatePageContainer page={page} history={history}/>
      }}></Route>
    </main>
  );
}

export default App;
