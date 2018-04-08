import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <p>{this.props.name}</p>
        )
    }
}

export default User;