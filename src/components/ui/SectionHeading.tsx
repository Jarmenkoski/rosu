"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-teal-400">
          {badge}
        </span>
      )}
      <h2 className="gradient-text-white text-heading-1 font-bold md:text-display-sm">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-white/50">
          {description}
        </p>
      )}
    </motion.div>
  );
}
