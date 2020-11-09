import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import "./index.css";
import Router from "Router";
import AuthProvider from "@contexts/Auth";
import ApiProvider from "@contexts/Api";

/* eslint-disable react/jsx-max-depth */
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ApiProvider>
          <Router />
        </ApiProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
