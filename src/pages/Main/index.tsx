import React from "react";
import styled, { keyframes } from "styled-components";
import TopBar from "./TopBar";

const Main: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Title>MinervA</Title>
      <Button>Play</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: "megrim";
  font-size: 7rem;
  margin: 5rem 0rem calc(50vh - 13rem) 0rem;
  text-shadow: 0.325rem 0.325rem ${({ theme }) => theme.gold};
  box-sizing: border-box;
  border-image: url("/marquee.svg") 25% round;
  border-image-outset: 3.5rem;
  border-image-width: 0px 75px 75px 75px;
  border-width: 1px;
  border-style: solid;
`;

const pulse = keyframes`
0%, 100% {
  color: #c28a35;
}
50% {
  color: #f7f2b6;
}
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  font-family: Megrim;
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.dusk};
  background-color: ${({ theme }) => theme.gold};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-image: url("/border.svg") 33% round;
  border-image-outset: 2rem;
  border-image-width: 50px;
  border-width: 1px;
  border-style: solid;
  :hover {
    color: ${({ theme }) => theme.glow};
    background-color: ${({ theme }) => theme.dusk};
    transform: scale(1.1);
    animation: ${pulse} 2s linear infinite;
  }
  transition: all 0.2s ease-in-out;
`;

export default Main;
