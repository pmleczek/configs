import { cn } from '@/lib/utils';

export function Card() {
  return (
    <div className={cn('z-10 absolute top-0 bg-red-500 flex items-center p-4')}>
      content
    </div>
  );
}

export function Badge({ label }: { label: string }) {
  return (
    <span className={cn('rounded text-white bg-blue-500 px-4 py-2 hover:bg-blue-600')}>
      {label}
    </span>
  );
}
