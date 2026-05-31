import { useEffect, useState } from "react";
import { AppState, type AppStateStatus } from "react-native";

export const useAppState = (): AppStateStatus => {
  const [status, setStatus] = useState<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", setStatus);
    return () => subscription.remove();
  }, []);

  return status;
};
