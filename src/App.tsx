import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "@routes";

import { Toast } from "@components";

import { GlobalStyle, theme } from "@shared/styles";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <Toast />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
