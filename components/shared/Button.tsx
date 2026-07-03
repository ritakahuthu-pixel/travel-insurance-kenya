'use client';

import React from "react";
import { cn } from "@utils/cn";
import { Loader2 } from "lucide-react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "font-semibold rounded-2xl transition-smooth focus-ring inline-flex items-center justify-center gap-2 shadow-soft hover:shadow-card";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-opacity-90 active:bg-opacity-95",
      secondary: "bg-secondary text-white hover:bg-opacity-90 active:bg-opacity-95",
      outline: "border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10",
      ghost: "text-primary hover:bg-primary/10 active:bg-primary/20",
    };

    const sizeStyles = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const disabledStyles = "opacity-50 cursor-not-allowed";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled || isLoading ? disabledStyles : "",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 size={18} className="animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
