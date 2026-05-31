import { Platform } from "react-native";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const getElevationStyle = () =>
  Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },
    android: { elevation: 4 },
    default: {},
  });
