"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { FOUNDERS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const founderImages: Record<string, string> = {
  "Julius Rovio": "/images/julius.png",
  "Jaakko Suomalainen": "/images/jaakko.png",
};

export default function TeamSection() {
  return (
    <section className="section-padding bg-gray-950">
      <Container>
        <SectionHeading
          badge="Team"
          title="Meet the founders"
          description="The people behind RoSu Oy."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2"
        >
          {FOUNDERS.map((founder) => (
            <motion.div key={founder.name} variants={fadeInUp}>
              <Card className="h-full p-6 text-center">
                <Image
                  src={founderImages[founder.name]}
                  alt={founder.name}
                  width={120}
                  height={120}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-400">
                  {founder.role}
                </p>
                <p className="mt-3 text-body-sm text-white/50">
                  {founder.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
