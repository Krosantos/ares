import React from "react";
import styled from "styled-components";

const TopBar: React.FC = () => {
  return (
    <Bar>
      <Button>Edit Army</Button>
      <Button>Shop</Button>
      <Button>Settings</Button>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  font-family: Megrim;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.gold};
  background-color: ${({ theme }) => theme.dusk};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  margin: 1rem;
  justify-content: center;
  box-sizing: border-box;
  border-image: url("/diamonds.svg") 34% round;
  border-image-outset: 1rem;
  border-image-width: 20px;
  border-width: 1px;
  border-style: solid;
  :hover {
    color: ${({ theme }) => theme.glow};
    background-color: ${({ theme }) => theme.dusk};
  }
  transition: all 0.2s ease-in-out;
`;

export default TopBar;
