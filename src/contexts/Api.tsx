import axios, { AxiosInstance } from "axios";
import React, { useContext, useMemo } from "react";
import { API_BASE_URL } from "@constants";
import { AuthContext } from "@contexts/Auth";

type ApiContextValue = {
  client: AxiosInstance;
};

const DEFAULT_VALUE: ApiContextValue = {
  client: axios.create(),
};

const ApiContext = React.createContext<ApiContextValue>(DEFAULT_VALUE);

const ApiProvider: React.FC = ({ children }) => {
  const { token, logOut } = useContext(AuthContext);

  const value = useMemo<ApiContextValue>(() => {
    const client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
    });

    if (token) {
      client.defaults.headers = {
        Authorization: "Bearer " + token,
      };
    }
    client.interceptors.response.use(
      (resp) => resp,
      (error) => {
        if (error.response.status === 401) {
          logOut();
        }
        return error;
      },
    );
    return { client };
  }, [logOut, token]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export { ApiContext };
export default ApiProvider;
