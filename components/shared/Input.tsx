'use client';

import React from "react";
import { cn } from "@utils/cn";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              "w-full px-4 py-3 border-2 rounded-2xl focus-ring bg-white transition-smooth placeholder-gray-400",
              icon ? "pl-12" : "",
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-primary focus:ring-primary/10",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-red-500 mt-1.5 font-medium">{error}</p>}
        {helperText && !error && <p className="text-sm text-gray-500 mt-1.5">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
