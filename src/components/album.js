import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Album extends Component {
    render () {
        return (
            <Link 
                to={{
                    pathname: `/photos/${this.props.albumId}`,
                    state: { 
                        albumId: this.props.albumId
                    }
                }}>{this.props.albumTitle}</Link>
        )
    }
}

export default Album;