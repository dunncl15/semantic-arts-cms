import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { pages } from './reducers/pagesReducer';
import AppContainer from './containers/AppContainer';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    pages,
    router: routerReducer
  }), devTools, applyMiddleware(middleware, thunk, logger));

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={AppContainer}></Route>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
