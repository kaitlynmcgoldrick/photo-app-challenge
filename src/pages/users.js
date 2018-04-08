import React, { Component }from 'react';

import User from '../components/user';
import StyledTitle from '../styledComponents/styledTitle';

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
            <div>
                <StyledTitle>
                    <hi>Friends</hi>
                </StyledTitle>
                {this.state.users.map(user => {
                    return <User key={user.id} name={user.name} id={user.id}/>
                })}
            </div>
        );
    }
}

export default Users;