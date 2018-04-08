import React, { Component } from 'react';

class Photo extends Component {
    render () {
        return (
            <div>
                <img src={this.props.url} alt={this.props.photoTitle}/>
            </div>
        )
    }
}

export default Photo;