import React, { Component }from 'react';
import { Link } from 'react-router-dom';

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
                    <p>
                        <Link to="/">
                            <span role="img" aria-label="Professional-Woman">👩🏽‍💼 </span>Friends
                        </Link>
                    </p>
                </StyledTitle>
                {this.state.users.map(user => {
                    return <User key={user.id} name={user.name} id={user.id}/>
                })}
            </div>
        );
    }
}

export default Users;