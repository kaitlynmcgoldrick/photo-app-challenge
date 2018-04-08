import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.img`
    margin: 15px 15px 0px;
    box-shadow: 0 8px 8px -8px #777777
`;
class Photo extends Component {
    render () {
        return (
            <StyledPhoto src={this.props.url} alt={this.props.photoTitle}/>
        )
    }
}

export default Photo;