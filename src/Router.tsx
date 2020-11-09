import Splash from "@pages/Splash";
import React, { useState, createContext, useMemo } from "react";
import LoginPage, { LOGIN_PAGE } from "@pages/Login";

type PageContextValue = {
  page: string;
  setPage: (newPage: string) => void;
};

const DEFAULT_PAGE = "DEFAULT_PAGE";

const DEFAULT_VALUE: PageContextValue = {
  page: DEFAULT_PAGE,
  setPage: () => {},
};

const PageContext = createContext<PageContextValue>(DEFAULT_VALUE);

const Router: React.FC = () => {
  const [page, setPage] = useState<string>(LOGIN_PAGE);
  const value = useMemo<PageContextValue>(() => ({ page, setPage }), [page]);
  let Component = Splash;

  switch (page) {
    case LOGIN_PAGE:
      Component = LoginPage;
      break;
    case DEFAULT_PAGE:
    default:
      Component = Splash;
      break;
  }

  return (
    <PageContext.Provider value={value}>
      <Component />
    </PageContext.Provider>
  );
};

export { PageContext };
export default Router;
