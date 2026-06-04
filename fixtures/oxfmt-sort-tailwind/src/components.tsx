export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-10 relative flex-col bg-white rounded-lg shadow-md p-6 flex">
      {children}
    </div>
  );
}

export function Button({ label }: { label: string }) {
  return (
    <button className="text-white font-semibold bg-blue-600 rounded px-4 py-2 hover:bg-blue-700">
      {label}
    </button>
  );
}
