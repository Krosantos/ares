import { ApiContext } from "@contexts/Api";
import React, { useContext, useEffect } from "react";

const LoginPage: React.FC = () => {
  const { client } = useContext(ApiContext);

  useEffect(() => {
    client.get("/");
  }, [client]);
  return <div>BIG YEET</div>;
};
const LOGIN_PAGE = "LOGIN_PAGE";

export { LOGIN_PAGE };
export default LoginPage;
