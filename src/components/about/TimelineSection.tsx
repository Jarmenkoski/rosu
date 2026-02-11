"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TimelineSection() {
  return (
    <section className="section-padding bg-gray-900">
      <Container>
        <SectionHeading
          badge="Timeline"
          title="Our journey"
          description="From an idea to a real product — here's how we got here."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.date}
                variants={fadeInUp}
                className="relative mb-10 last:mb-0"
              >
                <div
                  className={`flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal-400/30 bg-gray-900 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-teal-400" />
                  </div>

                  {/* Content */}
                  <div
                    className={`glass flex-1 rounded-xl p-5 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <span className="text-xs font-medium text-teal-400">
                      {item.date}
                    </span>
                    <h3 className="mt-1 font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {item.description}
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
