"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { COMPANY } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const items = [
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {items.map((item) => (
        <motion.div key={item.label} variants={fadeInUp}>
          <Card className="flex items-start gap-4 p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-white/40">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-body text-white transition-colors hover:text-teal-400"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-body text-white">{item.value}</p>
              )}
            </div>
          </Card>
        </motion.div>
      ))}

      <motion.div variants={fadeInUp}>
        <Card className="p-5">
          <p className="text-sm text-white/40">Business ID</p>
          <p className="text-body font-mono text-white">{COMPANY.businessId}</p>
        </Card>
      </motion.div>
    </motion.div>
  );
}
