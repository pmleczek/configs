export function Button({ label }: { label: string }) {
  return <button className='btn-primary' type='button'>{label}</button>;
}

export function Input({ placeholder }: { placeholder: string }) {
  return <input type='text' placeholder={placeholder} />;
}
