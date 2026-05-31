import { useEffect, useRef } from "react";

export const FocusInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return <input ref={ref} />;
};
