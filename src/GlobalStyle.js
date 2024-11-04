import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = styled.div `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    body {
        background-color: ${props => props.theme.BodyColor};
        font-family: sans-serif;
        transition: .4s;
    }

    ::selection {
        color: #fff;
        background-color: ${props => props.theme.PriamryColor};
    }
`
