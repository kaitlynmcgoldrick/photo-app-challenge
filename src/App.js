import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { injectGlobal } from 'styled-components';

import Header from './components/header';
import Users from './pages/users';
import Albums from './pages/albums';
import Photos from './pages/photos';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <HashRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Users}/>
            <Route path={process.env.PUBLIC_URL + '/albums/:id'} component={Albums}/>
            <Route path={process.env.PUBLIC_URL + '/photos/:id/:albumId'} component={Photos}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Cantarell:400,700');
  body {
    padding: 0;
    margin: 0;
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
