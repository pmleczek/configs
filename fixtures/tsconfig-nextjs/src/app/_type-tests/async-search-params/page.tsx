interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Page({ searchParams }: Props) {
  // @ts-expect-error — searchParams is a Promise in Next 15
  const { query } = searchParams;
  return <main>{query}</main>;
}
