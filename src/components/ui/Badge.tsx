import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export default function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "border border-white/10 bg-white/5 text-white/70",
        variant === "accent" && "border border-teal-400/20 bg-teal-400/10 text-teal-400",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
