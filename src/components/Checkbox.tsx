import styled from "styled-components";

const Checkbox = styled.input`
  display: block;
  appearance: none;
  box-sizing: border-box;
  border: none;
  background-color: ${({ theme }) => theme.gloam};
  border-radius: 4px;
  width: 1rem;
  height: 1rem;
  :checked {
    background-color: ${({ theme }) => theme.gold};
    :after {
      display: block;
      content: "+";
      font-weight: 500;
      text-align: center;
      color: ${({ theme }) => theme.white};
      width: 1rem;
      height: 1rem;
      transform: rotate(45deg);
    }
  }
`;

Checkbox.defaultProps = {
  type: "checkbox",
};

export default Checkbox;
