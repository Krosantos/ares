import React from "react";
import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <Underlay>
      <Container>{children}</Container>
    </Underlay>
  );
};

const Underlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px) brightness(20%);
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.dusk};
  border-image: url("/border.svg") 33% round;
  border-image-outset: 2rem;
  width: 33vw;
  height: 33vh;
  border-image-width: 50px;
  border-width: 1px;
  border-style: solid;
  padding: 1rem;
`;

export default Modal;
