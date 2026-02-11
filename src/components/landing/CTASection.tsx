"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientBlob from "@/components/ui/GradientBlob";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gray-950">
      <GradientBlob className="-right-64 top-0" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="gradient-text-white text-heading-1 font-bold md:text-display-sm"
          >
            Let&apos;s build your next project
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-body-lg text-white/50"
          >
            Whether you need a new platform, technical consulting, or want to
            discuss a collaboration, we&apos;d love to hear from you.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About RoSu Oy
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
