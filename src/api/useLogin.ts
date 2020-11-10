import { useCallback, useContext } from "react";
import { ApiContext } from "@contexts/Api";
import type { AxiosResponse } from "axios";

type LoginPostResponse = {
  token: string;
};
type LoginBody = {
  email: string;
  password: string;
};
type UseLogin = () => (body: LoginBody) => Promise<AxiosResponse<LoginPostResponse>>;

const useLogin: UseLogin = () => {
  const { client } = useContext(ApiContext);
  const callback = useCallback(
    (body: LoginBody) => client.post<LoginPostResponse>("/login", body),
    [client],
  );

  return callback;
};

export default useLogin;
