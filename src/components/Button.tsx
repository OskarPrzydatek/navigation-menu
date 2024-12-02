import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  onClick: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-white border-gray-primary text-gray-secondary",
    secondary: "bg-purple-primary border-purple-primary text-white",
    tertiary: "bg-white border-purple-tertiary text-purple-secondary",
  };

  return (
    <button
      className={`px-2.5 py-3.5 border rounded-lg font-semibold ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
