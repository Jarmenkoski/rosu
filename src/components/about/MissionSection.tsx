"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MissionSection() {
  return (
    <section className="section-padding bg-gray-900">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5BBCBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-heading-2 font-bold text-white">
                Mission
              </h3>
              <p className="text-body-lg text-white/50">
                To engineer digital solutions that make a real difference —
                building software products and platforms that help businesses
                grow, connect people to services they need, and push the
                boundaries of what technology can achieve.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5BBCBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mb-3 text-heading-2 font-bold text-white">
                Vision
              </h3>
              <p className="text-body-lg text-white/50">
                To become a recognized Finnish software company known for
                delivering innovative, high-quality digital products. Starting
                with Ask4Help, we aim to build a portfolio of platforms that
                transform industries — from Finland to the world.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
