import React, { useState, createContext, useContext, useMemo } from "react";
import Splash from "@pages/Splash";
import LoginPage from "@pages/Login";
import Main from "@pages/Main";
import Header from "@components/Header";
import { AuthContext } from "@contexts/Auth";

// eslint-disable-next-line no-shadow
enum Pages {
  DEFAULT_PAGE,
  MAIN_PAGE,
  LOGIN_PAGE,
}

type PageContextValue = {
  page: Pages;
  setPage: (newPage: Pages) => void;
};

const DEFAULT_VALUE: PageContextValue = {
  page: Pages.DEFAULT_PAGE,
  setPage: () => {},
};

const PageContext = createContext<PageContextValue>(DEFAULT_VALUE);

const Router: React.FC = () => {
  const { isAuthed } = useContext(AuthContext);
  const [page, setPage] = useState<Pages>(Pages.MAIN_PAGE);
  const value = useMemo<PageContextValue>(() => ({ page, setPage }), [page]);
  let Component = Splash;

  switch (page) {
    case Pages.MAIN_PAGE:
      Component = Main;
      break;
    case Pages.LOGIN_PAGE:
      Component = LoginPage;
      break;
    default:
      Component = Splash;
      break;
  }
  if (!isAuthed) Component = LoginPage;

  return (
    <PageContext.Provider value={value}>
      <Header />
      <Component />
    </PageContext.Provider>
  );
};

export { PageContext, Pages };
export default Router;
