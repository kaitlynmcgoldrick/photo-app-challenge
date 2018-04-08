import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=Oleo+Script');
  background: #426fb3;
  height: 4em;
  line-height: 4em;
  
  a {
    font-family: 'Oleo Script', cursive;
    color: #fff;
    padding: 0px 20px;
    font-weight: bold;
    font-size: 30px;
  }
`;

class Header extends Component {
    render() {
        return (
            <Container>
                <a href="/">PhotoSharer</a>
            </Container>
        )
    }
}

export default Header;