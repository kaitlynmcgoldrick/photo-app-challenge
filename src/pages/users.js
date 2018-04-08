import React, { Component }from 'react';

import User from '../components/user';

class Users extends Component {
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
            this.state.users.map(user => {
                return <User key={user.id} name={user.name} id={user.id}/>
            })
        );
    }
}

export default Users;