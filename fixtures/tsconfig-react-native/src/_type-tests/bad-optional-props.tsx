import type { CardProps } from "../components/Card";

type Props = CardProps;

// @ts-expect-error — exactOptionalPropertyTypes
export const bad: Props = {
  title: "x",
  subtitle: undefined,
  onPress: () => {},
};

void bad;
