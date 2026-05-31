interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, variant = "primary", disabled, onClick }: ButtonProps) => (
  <button type="button" className={variant} disabled={disabled} onClick={onClick}>
    {label}
  </button>
);
