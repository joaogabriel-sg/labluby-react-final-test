import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes";

import { GlobalStyle, theme } from "./styles";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
