"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          {/* App screenshot */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass flex items-center justify-center rounded-2xl p-8"
          >
            <div className="relative w-full max-w-xs">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-gray-900 p-3">
                <div className="h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/ask4help.png"
                    alt="Ask4Help app screenshot"
                    width={320}
                    height={569}
                    className="h-full w-full object-cover object-top"
                  />
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
