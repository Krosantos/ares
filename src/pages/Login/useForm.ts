import React, { useState, useCallback, useReducer, Reducer, useContext } from "react";
import useLogin from "@api/useLogin";
import { AuthContext } from "@contexts/Auth";
import usePostUser from "@api/usePostUser";

type ActiveTab = "login" | "signup";
type Values = {
  username: string;
  email: string;
  password: string;
  savePassword: boolean;
};
type Action = {
  key: keyof Values;
  value: string | boolean;
};

type UseForm = (
  activeTab: ActiveTab,
) => {
  onSubmit: React.EventHandler<React.FormEvent>;
  values: Values;
  error?: string;
  loading: boolean;
  handleChange: React.EventHandler<React.ChangeEvent>;
};

const INITIAL_VALUES = {
  email: "",
  password: "",
  savePassword: false,
  username: "",
};

const formReducer: Reducer<Values, Action> = (prevState, action) => {
  const result = { ...prevState };
  const { key, value } = action;

  result[key] = (value as unknown) as never;
  return result;
};

const useForm: UseForm = (activeTab) => {
  const logIn = useLogin();
  const postUser = usePostUser();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [values, dispatch] = useReducer<typeof formReducer>(formReducer, INITIAL_VALUES);
  const auth = useContext(AuthContext);
  const handleChange = useCallback((e) => {
    const key = e.currentTarget.id;
    let value = e.currentTarget.value;

    // Dirty hack for checkbox
    if (e.currentTarget.type === "checkbox") {
      value = e.currentTarget.checked;
    }

    dispatch({ key, value });
  }, []);
  // eslint-disable-next-line complexity
  const onSubmit = useCallback(async () => {
    setError("");
    setLoading(true);
    if (activeTab === "login") {
      try {
        const { data } = await logIn({
          email: values.email,
          password: values.password,
        });

        auth.setAuth(data?.token, values.savePassword);
      } catch (e) {
        const status = e?.response?.status;
        const message =
          status === 401
            ? "Invalid email or password"
            : "Something went wrong logging in.";

        setError(message);
      }
    } else {
      try {
        const { data } = await postUser({
          email: values.email,
          password: values.password,
          username: values.username,
        });

        auth.setAuth(data?.token, values.savePassword);
      } catch (e) {
        const body = e?.response?.data as string | undefined;
        const message =
          !!body && body.includes("duplicate")
            ? "A user with this email already exists."
            : "Something went wrong creating a user.";

        setError(message);
      }
    }

    setLoading(false);
  }, [
    activeTab,
    auth,
    logIn,
    postUser,
    values.email,
    values.password,
    values.savePassword,
    values.username,
  ]);

  return {
    error,
    handleChange,
    loading,
    onSubmit,
    values,
  };
};

export default useForm;
