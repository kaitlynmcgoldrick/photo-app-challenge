import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router';
import logo from './logo.svg';
import { createBrowserHistory } from 'history';

import { injectGlobal } from 'styled-components';

import Header from './components/header';
import Users from './pages/users';
import Albums from './pages/albums';
import Photos from './pages/photos';

const history = createBrowserHistory();
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/albums/:id" component={Albums}/>
            <Route path="/photos/:id/:albumId" component={Photos}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Cantarell:400,700');
  body {
    text-align: center;
    background-color: ghostwhite;
    text-transform: uppercase;
    font-family: 'Cantarell', sans-serif;
    color: #fff;
    a {
      text-decoration: none;
      color: #fff;
    }
  }`

export default App;
