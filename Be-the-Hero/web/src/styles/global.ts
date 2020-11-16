import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5;
        color: #737380;
    }

    body, input, button, textarea {
        font: 400 18px 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }
`;
