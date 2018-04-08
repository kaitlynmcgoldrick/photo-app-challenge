import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class User extends Component {
    render () {
        return (
            <Link 
                to={{
                    pathname: `/albums/${this.props.id}`,
                    state: { 
                      id: this.props.id,
                      name: this.props.name
                    }
                }}>{this.props.name}</Link>
        )
    }
}

export default User;