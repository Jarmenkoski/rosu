"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const variantMap: Record<string, Variants> = {
  up: fadeInUp,
  fade: fadeIn,
  scale: scaleIn,
  left: slideInLeft,
  right: slideInRight,
};

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "fade" | "scale" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
}: FadeInProps) {
  const variants = variantMap[direction];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
