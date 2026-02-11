"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ORDER_STAGES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-950">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="From posting to payment"
          description="Every project follows a clear, transparent lifecycle from start to finish."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {ORDER_STAGES.map((stage, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={stage.key}
                variants={fadeInUp}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal-400/30 bg-gray-950 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-sm font-bold text-teal-400">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`glass flex-1 rounded-xl p-5 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <span className="mb-1 inline-block rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-400">
                      {stage.label}
                    </span>
                    <p className="mt-1 text-sm text-white/50">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
