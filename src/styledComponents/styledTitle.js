import styled from 'styled-components';

const StyledTitle = styled.div`
    display: block;
    padding: 1em;
    background-color: #426fb3;
    text-align: left;
    font-size: 18px;
    box-shadow: 0 8px 8px -8px #777777
    p {
        display: inline;
        text-transform: uppercase;
    }
    .primary {
        font-weight: 700;
    }
    a:hover {
        color: #DCDCDC;
    }
`;

export default StyledTitle;