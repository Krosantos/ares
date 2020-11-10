import { useCallback, useEffect, useState } from "react";
import type { AxiosResponse } from "axios";

type Result<T> = [T, string, boolean, () => void];

function useWrapper<T extends {}>(
  callback: () => Promise<AxiosResponse<T>>,
  callNow?: boolean,
): Result<T> {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const call = useCallback(async () => {
    setError("");
    setLoading(true);
    try {
      const result = await callback();

      setData(result.data);
    } catch (e) {
      setError(e.toString());
    }
    setLoading(false);
  }, [callback]);

  useEffect(() => {
    if (callNow) call();
  }, [call, callNow]);

  return [data, error, loading, call];
}
export type { Result };
export default useWrapper;
