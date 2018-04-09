import React, { Component } from 'react';

import StyledList from '../styledComponents/styledList';
import StyledLink from '../styledComponents/styledLink';

class User extends Component {
    render () {
        return (
            <StyledList>
                <StyledLink 
                    to={{
                        pathname: `/albums/${this.props.id}`,
                        state: { 
                            id: this.key,
                            name: this.props.name
                        }
                    }}>{this.props.name}</StyledLink>
            </StyledList>
        )
    }
}

export default User;