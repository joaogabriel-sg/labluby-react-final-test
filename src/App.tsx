import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./styles";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World!</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
