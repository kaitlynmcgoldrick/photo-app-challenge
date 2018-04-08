import React from 'react';

import User from './user';

const Users = ({ users }) => {
    return (
        users.map(user => {
            return <User key={user.id} name={user.name}/>
        })
    );
}

export default Users;