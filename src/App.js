import React, {Component} from 'react';
import './App.css';

import {Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';

import {TransitionGroup, CSSTransition} from "react-transition-group";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Page 1</Link>
          <Link to='/Page2'>Page 2</Link>
        </nav>
        <Route render={({location})=>(
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={2000}>
              <Switch location={location}>
                <Route exact path='/' component={Page1}/>
                <Route path='/Page2' component={Page2}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
      </div>
    );
  }
}

export default App;
