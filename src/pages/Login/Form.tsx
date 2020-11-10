import Checkbox from "@components/Checkbox";
import Input from "@components/Input";
import Loader from "@components/Loader";
import React from "react";
import styled from "styled-components";
import useForm from "./useForm";

type ActiveTab = "login" | "signup";
type FormProps = {
  activeTab: ActiveTab;
};

const Form: React.FC<FormProps> = ({ activeTab }) => {
  const { error, loading, values, handleChange, onSubmit } = useForm(activeTab);
  const submitText = activeTab === "login" ? "Log In" : "Create Account";

  return (
    <Container>
      <Input
        hide={activeTab === "login"}
        hint="You can freely change your username later"
        id="username"
        onChange={handleChange}
        placeholder="Username"
        value={values.username}
      />
      <Input
        id="email"
        onChange={handleChange}
        placeholder="Email"
        value={values.email}
      />
      <Input
        id="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={values.password}
      />
      <CheckZone>
        <span>Save Password?</span>
        <Checkbox
          checked={values.savePassword}
          id="savePassword"
          onChange={handleChange}
        />
      </CheckZone>
      <Button onClick={onSubmit} type="button">
        {loading ? <Loader color="dusk" size="1em" /> : submitText}
      </Button>
      <Error error={error}>{error}</Error>
    </Container>
  );
};

const Container = styled.div`
  * + * {
    margin: 0.75rem 0 0 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 35vw;
`;

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

const CheckZone = styled.div`
  margin-top: 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  padding: 0px 3px;
  span,
  input {
    display: block;
    margin: 0px;
  }
`;

type ErrorProps = {
  error?: string;
};
const Error = styled.p<ErrorProps>`
  text-align: center;
  color: ${({ theme }) => theme.error};
  min-height: 19px;
  opacity: ${({ error }) => (error ? 100 : 0)}%;
  transition: all 0.2s ease-in-out;
`;

export default Form;
