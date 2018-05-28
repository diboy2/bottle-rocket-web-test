import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import RestaurantsPage from './components/restaurants/RestaurantsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RestaurantsPage} />
  </Route>
);
