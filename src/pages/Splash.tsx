import Modal from "@components/Modal";
import React from "react";
import styled from "styled-components";

const Splash: React.FC = () => (
  <Container>
    <Title>MinervA</Title>
    <Modal isOpen>
      <div>I AM MODAL</div>
    </Modal>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-family: "megrim";
  font-size: 10rem;
  text-shadow: 0.325rem 0.325rem ${({ theme }) => theme.gold};
`;

export default Splash;
