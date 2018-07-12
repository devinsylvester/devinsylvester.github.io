import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import App from './components/app';
import test from './components/test';
import './../sass/style.scss';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/test" component={test} />
  </Router>
  , document.querySelector('.page-container')
);
