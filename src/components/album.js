import React, { Component } from 'react';

import StyledList from '../styledComponents/styledList';
import StyledLink from '../styledComponents/styledLink';

class Album extends Component {
    render () {
        return (
            <StyledList>
                <StyledLink 
                    to={{
                        pathname: `/photos/${this.props.id}/${this.props.albumId}`,
                        state: { 
                            id: this.props.id,
                            albumId: this.props.albumId,
                            albumTitle: this.props.albumTitle
                        }
                    }}>{this.props.albumTitle}</StyledLink>
            </StyledList>
        )
    }
}

export default Album;