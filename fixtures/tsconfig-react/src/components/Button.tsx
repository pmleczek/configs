interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// @ts-expect-error — undefined is not a valid variant (exactOptionalPropertyTypes)
const bad: ButtonProps = { label: "x", variant: undefined, onClick: () => {} };

void bad;

export const Button = ({ label, variant = "primary", disabled, onClick }: ButtonProps) => (
  <button type="button" className={variant} disabled={disabled} onClick={onClick}>
    {label}
  </button>
);
