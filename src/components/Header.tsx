import { AuthContext } from "@contexts/Auth";
import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const { app } = require("electron").remote;

const Header: React.FC = () => {
  const { logOut, isAuthed } = useContext(AuthContext);
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);
  const logOutAndClose = useCallback(() => {
    logOut();
    setOpen(false);
  }, [logOut]);
  const exit = useCallback(() => {
    app.exit();
  }, []);

  return (
    <Bar>
      <DotButton onClick={open} type="button">
        +
      </DotButton>
      <Modal isOpen={isOpen} onClose={close}>
        <Stack>
          {isAuthed && (
            <Button onClick={logOutAndClose} type="button">
              Log Out
            </Button>
          )}
          <Button onClick={exit} type="button">
            Exit
          </Button>
        </Stack>
      </Modal>
    </Bar>
  );
};

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  * + * {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.glow};
  color: ${({ theme }) => theme.dusk};
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.dusk};
    color: ${({ theme }) => theme.glow};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.glow};
  }
  min-height: 1em;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
`;

const DotButton = styled.button`
  -webkit-app-region: no-drag;
  background-color: ${({ theme }) => theme.dusk};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  padding: 0rem;
  border-radius: 50%;
  line-height: 0.5rem;
  width: 1rem;
  height: 1rem;
  transform: rotate(45deg);
  :hover {
    background-color: ${({ theme }) => theme.gold};
  }
  transition: all 0.2s ease-in-out;
`;

const Bar = styled.div`
  height: 2rem;
  background-color: ${({ theme }) => theme.abyss};
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
`;

export default Header;
