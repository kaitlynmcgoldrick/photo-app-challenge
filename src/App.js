import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

import Users from './pages/users';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Users}/>
        </Switch>
      </div>
    );
  }
}

export default App;
