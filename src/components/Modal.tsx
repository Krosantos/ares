import React, { useCallback } from "react";
import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  const eatClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!isOpen) return null;
  return (
    <Underlay onMouseDown={eatClick}>
      <Container>
        <CloseButton onClick={onClose}>+</CloseButton>
        {children}
      </Container>
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
  z-index: 100;
`;

const CloseButton = styled.button`
  -webkit-app-region: no-drag;
  background-color: ${({ theme }) => theme.glow};
  color: ${({ theme }) => theme.dusk};
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0rem;
  border-radius: 50%;
  line-height: 0.5rem;
  width: 1rem;
  height: 1rem;
  transform: rotate(45deg);
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.dusk};
    color: ${({ theme }) => theme.glow};
    border: 1px solid ${({ theme }) => theme.glow};
    transform: rotate(225deg);
  }
  transition: all 0.2s ease-in-out;
`;

const Container = styled.div`
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.dusk};
  border-image: url("/border.svg") 33% round;
  border-image-outset: 2rem;
  border-image-width: 50px;
  border-width: 1px;
  border-style: solid;
`;

export default Modal;
