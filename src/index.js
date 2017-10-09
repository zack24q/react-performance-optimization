import React from 'react';
import ReactDOM from 'react-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';

import Perf from 'react-addons-perf';
window.Perf = Perf;

ReactDOM.render((
  <BrowserRouter>
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="page"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Switch location={location}>
            <Route exact path="/" component={MainPage}/>
            <Route path="/detail/:id" component={DetailPage}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
    />
  </BrowserRouter>
), document.getElementById('root'));
