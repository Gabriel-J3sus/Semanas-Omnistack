import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
    }

    body, input, button, textarea {
        font: 400 18px 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }
`;
