import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.gold};
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.glow};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.gold};
  }
  min-height: 1em;
  transition: all 0.2s ease-in-out;
`;

export default Button;
