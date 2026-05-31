import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initial: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored === null ? initial : (JSON.parse(stored) as T);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
