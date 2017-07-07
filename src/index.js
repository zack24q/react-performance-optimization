import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransitionGroup} from 'react-transition-group'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';

import Perf from 'react-addons-perf';
window.Perf = Perf;

ReactDOM.render((
  <BrowserRouter>
    <CSSTransitionGroup
      transitionName="page"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      <Route exact path="/" component={MainPage}/>
      <Route path="detail/:id" component={DetailPage}/>
    </CSSTransitionGroup>
  </BrowserRouter>
), document.getElementById('root'));
