import 'babel-polyfill'; //object.assign
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import bulma from '../node_modules/bulma/css/bulma.css';
import './styles/styles.css';

const store = configureStore();

render(
    <Provider store = {store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
