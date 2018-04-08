import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './components/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({ users: [...res] }))
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
