import React, { useState, createContext, useMemo } from "react";
import Splash from "@pages/Splash";
import LoginPage from "@pages/Login";
import Header from "@components/Header";

// eslint-disable-next-line no-shadow
enum Pages {
  DEFAULT_PAGE,
  HOME_PAGE,
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
  const [page, setPage] = useState<Pages>(Pages.LOGIN_PAGE);
  const value = useMemo<PageContextValue>(() => ({ page, setPage }), [page]);
  let Component = Splash;

  switch (page) {
    case Pages.LOGIN_PAGE:
      Component = LoginPage;
      break;
    default:
      Component = Splash;
      break;
  }

  return (
    <PageContext.Provider value={value}>
      <Header />
      <Component />
    </PageContext.Provider>
  );
};

export { PageContext, Pages };
export default Router;
