import { useState } from "react";

export default function Page() {
  // @ts-expect-error — hooks only in Client Components
  const [n] = useState(0);
  return <main>{n}</main>;
}
