import React from "react";
import { cn } from "@utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, noPadding = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-2xl shadow-card border border-gray-100/50",
        !noPadding && "p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";
