/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import Eye from "./icons/Eye";
import EyeClosed from "./icons/EyeClosed";

type InputBonusProps = {
  hide?: boolean;
  hint?: string;
};
type VanillaInputProps = JSX.IntrinsicElements["input"];
type InputProps = VanillaInputProps & InputBonusProps;

const inputCss = css`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.gloam};
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.dusk};
  }
  :focus {
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.gold};
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.gloam};
    }
  }
  transition: all 0.2s ease-in-out;
`;

const svgCss = css`
  display: block;
  position: absolute;
  top: 7px;
  right: 0px;
  margin: auto 1rem auto 0px !important;
  height: 1.5rem;
  width: 1.5rem;
`;

const Wrapper = styled.div<InputBonusProps>`
  overflow: hidden;
  height: ${({ hint }) => (hint ? 55 : 37)}px;
  padding: 3px;
  position: relative;
  width: 100%;
  input {
    ${inputCss}
  }
  ${({ hide }) => {
    if (!hide) return "";
    return css`
      height: 0px;
      padding: 0px 3px;
    `;
  }}
  transition: all 0.2s ease-in-out;
`;

const Hint = styled.p`
  margin: 0.25rem 0 0 0 !important;
  font-size: 0.75rem;
`;

const Button = styled.button`
  svg {
    ${svgCss}
  }
`;

type EyeButtonProps = {
  open: boolean;
  handleToggle: React.EventHandler<React.MouseEvent>;
};
const EyeButton: React.FC<EyeButtonProps> = ({ open, handleToggle }) => {
  if (open)
    return (
      <Button onClick={handleToggle} tabIndex={-1} type="button">
        <Eye />
      </Button>
    );
  return (
    <Button onClick={handleToggle} tabIndex={-1} type="button">
      <EyeClosed />
    </Button>
  );
};

const Input: React.FC<InputProps> = ({ hint, hide, type, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);
  const internalType = useMemo(() => {
    if (type !== "password") return type;
    return open ? "text" : "password";
  }, [open, type]);

  return (
    <Wrapper hide={hide} hint={hint}>
      <input type={internalType} {...props} />
      {type === "password" && <EyeButton handleToggle={handleToggle} open={open} />}
      {!!hint && <Hint>{hint}</Hint>}
    </Wrapper>
  );
};

export default Input;
