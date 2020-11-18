import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "@contexts/Auth";
import { PageContext, Pages } from "Router";
import Tabs from "./Tabs";

const LoginPage: React.FC = () => {
  const { isAuthed } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    if (isAuthed) setPage(Pages.MAIN_PAGE);
  }, [isAuthed, setPage]);

  return (
    <Container>
      <Title>MinervA</Title>
      {!isAuthed && <Tabs />}
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

export default LoginPage;
