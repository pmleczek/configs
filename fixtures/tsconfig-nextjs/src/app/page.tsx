interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { query } = await searchParams;
  return <main>{query ?? "no query"}</main>;
}
