"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GradientBlob from "@/components/ui/GradientBlob";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Finland" },
  { label: "Focus", value: "Software" },
  { label: "Flagship", value: "Ask4Help" },
];

export default function StorySection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="gradient-mesh-bg absolute inset-0" />
      <GradientBlob className="-right-64 -top-32" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-block rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-teal-400"
          >
            Our Story
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="gradient-text-white text-4xl font-bold sm:text-5xl md:text-display-sm"
          >
            Built in Finland,
            <br />
            engineered for impact
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4 text-body-lg text-white/50">
            <p>
              RoSu Oy was founded in 2024 by two Finnish entrepreneurs who
              saw an opportunity to build software that makes a real difference.
              With backgrounds spanning technology and business, we set out
              to create a company that delivers high-quality digital solutions.
            </p>
            <p>
              Our first product, Ask4Help, is a modern marketplace where
              homeowners can post projects, receive competitive bids from
              verified contractors, and manage everything from communication to
              payment in one place. It embodies our approach: solve real problems
              with elegant technology.
            </p>
            <p>
              As a Finnish company, we value transparency, quality, and
              practical solutions. These principles guide every product we
              build, every service we offer, and every decision we make.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-xl font-bold text-teal-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
