"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { VALUE_PROPS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const icons = [
  // Clipboard
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>,
  // Trending
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
  // Message
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  // Star
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
];

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-gray-950">
      <Container>
        <SectionHeading
          badge="Our Flagship Product"
          title="Meet Ask4Help"
          description="Finding reliable help for home projects shouldn't be stressful. Ask4Help makes it simple, transparent, and fair for everyone."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* App mockup placeholder */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass flex items-center justify-center rounded-2xl p-8"
          >
            <div className="relative w-full max-w-xs">
              {/* Phone frame */}
              <div className="aspect-[9/16] w-full rounded-3xl border border-white/10 bg-gray-900 p-3">
                <div className="flex h-full flex-col rounded-2xl bg-gray-950">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-[10px] text-white/40">9:41</span>
                    <div className="h-4 w-16 rounded-full bg-white/10" />
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="flex-1 space-y-3 p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-teal-400/20" />
                      <span className="text-sm font-semibold text-white/80">Ask4Help</span>
                    </div>
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                    <div className="mt-4 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-teal-400/20" />
                            <div className="h-2 w-20 rounded bg-white/10" />
                          </div>
                          <div className="mt-2 h-2 w-full rounded bg-white/5" />
                          <div className="mt-1 h-2 w-2/3 rounded bg-white/5" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <div className="h-10 rounded-lg bg-teal-400/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value props */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {VALUE_PROPS.map((prop, i) => (
              <motion.div key={prop.title} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
                    {icons[i]}
                  </div>
                  <h3 className="mb-2 text-heading-3 font-semibold text-white">
                    {prop.title}
                  </h3>
                  <p className="text-body-sm text-white/50">{prop.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
