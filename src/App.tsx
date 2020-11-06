import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "@theme";
import "./index.css";

/* eslint-disable react/jsx-max-depth */
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>MinervA</Title>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-family: "megrim";
  font-size: 10rem;
`;

export default App;
