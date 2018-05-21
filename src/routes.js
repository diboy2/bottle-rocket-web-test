import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ListPage from './components/list/ListPage';
import DetailPage from './components/detail/DetailPage';

export default (
  <Route path="/" component={App}>

    <IndexRoute component={ListPage} />
    <Route path="detail" component={DetailPage} />
  </Route>
);
