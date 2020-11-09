import settings from "electron-settings";
import React, { useState, useMemo, useCallback } from "react";

const TOKEN_SETTING = "authToken";

type AuthProviderValue = {
  isAuthed: boolean;
  setAuth: (token: string, save?: boolean) => void;
  logOut: () => void;
  token?: string;
};

const DEFAULT_VALUE: AuthProviderValue = {
  isAuthed: false,
  logOut: () => {},
  setAuth: () => {},
  token: "",
};

const AuthContext = React.createContext<AuthProviderValue>(DEFAULT_VALUE);

const AuthProvider: React.FC = ({ children }) => {
  const savedToken = useMemo<string>(() => {
    return (settings.getSync(TOKEN_SETTING) as string) || "";
  }, []);
  const [token, setToken] = useState<string>(savedToken);
  const setAuth = useCallback((newToken, save) => {
    setToken(newToken);
    if (!save) return;
    settings.setSync(TOKEN_SETTING, newToken);
  }, []);
  const logOut = useCallback(() => {
    setToken("");
    settings.unsetSync(TOKEN_SETTING);
  }, []);
  const value = useMemo<AuthProviderValue>(
    () => ({
      isAuthed: !!token,
      logOut,
      setAuth,
      token,
    }),
    [logOut, setAuth, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
