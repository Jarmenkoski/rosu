"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TechStack() {
  return (
    <section className="section-padding bg-gray-900">
      <Container>
        <SectionHeading
          badge="Technology"
          title="Our technology expertise"
          description="A robust, scalable stack chosen for performance, developer experience, and reliability."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="glass glass-hover group flex items-center gap-3 rounded-xl px-5 py-3"
            >
              <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                {tech.name}
              </span>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/30">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
