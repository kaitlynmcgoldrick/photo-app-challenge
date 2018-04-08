import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

import Users from './pages/users';
import Albums from './pages/albums';
import Photos from './pages/photos';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path="/albums/:id" component={Albums}/>
          <Route path="/photos/:albumId" component={Photos}/>
        </Switch>
      </div>
    );
  }
}

export default App;
