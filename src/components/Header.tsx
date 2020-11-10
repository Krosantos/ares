import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return <Bar />;
};

const Bar = styled.div`
  height: 2rem;
  background-color: ${({ theme }) => theme.abyss};
  -webkit-app-region: drag;
`;

export default Header;
