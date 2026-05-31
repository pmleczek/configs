interface Props {
  title: string;
  subtitle?: string;
}

export default function Page() {
  // @ts-expect-error — exactOptionalPropertyTypes (from base)
  const bad: Props = { title: "fixture", subtitle: undefined };
  void bad;
  return <main>type test</main>;
}
