import { useCallback, useContext } from "react";
import { ApiContext } from "@contexts/Api";
import type { AxiosResponse } from "axios";

type PostUserResponse = {
  token: string;
};
type PostBody = {
  username: string;
  email: string;
  password: string;
};
type UsePostUser = () => (body: PostBody) => Promise<AxiosResponse<PostUserResponse>>;

const usePostUser: UsePostUser = () => {
  const { client } = useContext(ApiContext);
  const callback = useCallback(
    (body: PostBody) => client.post<PostUserResponse>("/users", body),
    [client],
  );

  return callback;
};

export default usePostUser;
