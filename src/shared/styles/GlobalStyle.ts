import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    background: ${theme.colors.background};
    width: 100%;
    min-height: 100vh;
  }

  *,
  button,
  input,
  textarea,
  select {
    font-family: ${theme.fonts};
    font-size: 1rem;
    font-style: italic;
    color: ${theme.colors.text[700]};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`}
`;
