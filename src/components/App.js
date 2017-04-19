import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import UserNavigationContainer from '../containers/UserNavigationContainer.js';
import PagesContainer from '../containers/PagesContainer.js';
import Page from './Page.js';
import Header from './Header.js';
import CreatePageContainer from '../containers/CreatePageContainer.js';

const App = ({ pages, history, location }) => {
  return (
    <main className='App'>
      <Route path='/' render={ ({ location }) => {
        return !location.pathname.includes('/admin') ? <UserNavigationContainer /> : null;
      }}/>
      <Route path='/:title' render={ ({ match }) => {
        const page = pages.find(page => page.title.toLowerCase() === match.params.title.toLowerCase());
        return !page || !page.published ? <h1 className='notfound'>{'<Page Not Found>'}</h1> : <Page page={page} />;
      }} />
      <Route path='/admin' component={ Header } />
      <section className='main-content'>
        <Route path='/admin' component={ Navigation } />
        <Route exact path='/admin/pages' component={ PagesContainer } />
        <Route exact path='/admin/new-page' component={ CreatePageContainer } />
      </section>
      <Route path='/admin/pages/edit/:id' render={ ({ match }) => {
        const page = pages.find(page => page.id === parseInt(match.params.id, 10));
        return <CreatePageContainer page={page} history={history} />
      }} />
    </main>
  );
}

export default App;
