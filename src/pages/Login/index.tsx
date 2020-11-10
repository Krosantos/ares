import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Title>MinervA</Title>
      <Tabs />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-family: "megrim";
  font-size: 10rem;
  margin-bottom: 3rem;
  text-shadow: 0.325rem 0.325rem ${({ theme }) => theme.gold};
`;

const LOGIN_PAGE = "LOGIN_PAGE";

export { LOGIN_PAGE };
export default LoginPage;
