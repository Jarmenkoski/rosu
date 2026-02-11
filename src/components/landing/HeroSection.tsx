"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientBlob from "@/components/ui/GradientBlob";
import { COMPANY_TAGLINE, COMPANY_DESCRIPTION } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="gradient-mesh-bg absolute inset-0" />
      <GradientBlob className="-left-64 -top-64" />
      <GradientBlob className="-bottom-32 -right-64 from-teal-500/30 via-teal-400/10" />

      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 pb-20 pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="accent" className="mb-6">
              Software Development Company
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="gradient-text-white text-balance text-4xl font-bold sm:text-5xl md:text-display"
          >
            {COMPANY_TAGLINE}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-body-lg text-white/50"
          >
            {COMPANY_DESCRIPTION}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/about" size="lg">
              Learn More
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {["Next.js", "TypeScript", "PostgreSQL", "React"].map(
              (tech) => (
                <Badge key={tech}>{tech}</Badge>
              )
            )}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
