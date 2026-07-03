import React from "react";
import { cn } from "@utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidths = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl",
  full: "max-w-full",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "2xl", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", maxWidths[maxWidth], className)}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = "Container";
