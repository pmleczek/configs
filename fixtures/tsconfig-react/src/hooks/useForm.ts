import { useCallback, useState } from "react";

export const useForm = <T extends Record<string, string>>(initial: T) => {
  const [values, setValues] = useState<T>(initial);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return { values, handleChange };
};
