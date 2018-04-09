import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
    display: inline-grid;
    margin: 15px 15px 0px;
    background-color: #fff;
    box-shadow: 0 8px 8px -8px #777777
    width: 150px;
    p {
        font-size: 15px;
        color: #000;
        padding: 10px;
        height: 50px;

    }
`;
class Photo extends Component {
    render () {
        return (
            <StyledPhoto>
                <img src={this.props.url} alt={this.props.photoTitle}/>
                <div>
                    {this.props.photoTitle.length > 17 ? 
                    <p>{this.props.photoTitle.slice(0,17)}...</p> :
                    <p>{this.props.photoTitle}</p>}
                </div>
            </StyledPhoto>

        )
    }
}

export default Photo;