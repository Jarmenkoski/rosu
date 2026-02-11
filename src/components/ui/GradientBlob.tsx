import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]",
        "bg-gradient-to-br from-teal-400/40 via-teal-500/20 to-transparent",
        className
      )}
    />
  );
}
