"use client";

import { useState, useCallback } from "react";

export default function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
