import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Form from "./Form";

type Tab = "login" | "signup";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("login");

  const setLogin = useCallback(() => setActiveTab("login"), []);
  const setSignUp = useCallback(() => setActiveTab("signup"), []);

  return (
    <Container>
      <Form activeTab={activeTab} />
      <Buttons>
        <Button disabled={activeTab === "login"} onClick={setLogin} type="button">
          I have an account
        </Button>
        <Divisor>|</Divisor>
        <Button disabled={activeTab === "signup"} onClick={setSignUp} type="button">
          Create an account
        </Button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div``;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Divisor = styled.div`
  margin: 0rem 0.5rem;
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-family: "Rubik";
  text-decoration: underline;
  color: ${({ theme }) => theme.glow};
  background-color: ${({ theme }) => theme.dusk};
  :focus,
  :hover {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.gold};
  }
  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.gold};
    color: ${({ theme }) => theme.dusk};
    text-decoration: none;
    box-shadow: none;
  }
  transition: all 0.2s ease-in-out;
`;

export default Tabs;
