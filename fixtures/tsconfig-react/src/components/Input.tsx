import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => (
  <label>
    {label}
    <input ref={ref} {...props} />
  </label>
));

Input.displayName = "Input";
