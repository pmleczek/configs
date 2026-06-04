import { helper } from './utils';
import './styles.css';
import './polyfill';
import { useState } from 'react';
import type { ReactNode } from 'react';

export function Component({ children }: { children: ReactNode }) {
  const [count] = useState(0);
  helper();
  return count > 0 ? children : null;
}
