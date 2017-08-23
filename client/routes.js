import React from 'react';

import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import Stores from './components/Stores/Stores';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/stores" component={Stores} />
  </Route>
)