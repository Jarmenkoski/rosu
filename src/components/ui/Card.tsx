import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "glass-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
