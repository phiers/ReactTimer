import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
/* eslint-disable */
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
    document.getElementById('app')); //eslint-disable-line
