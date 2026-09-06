import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "success" | "danger" | "warning" | "dark";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-teal-500 hover:bg-teal-600 text-white",
  secondary: "bg-slate-500 hover:bg-slate-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  warning: "bg-amber-500 hover:bg-amber-600 text-white",
  dark: "bg-slate-900 hover:bg-slate-800 text-white",
};

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-2 rounded-xl font-medium transition-colors ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;