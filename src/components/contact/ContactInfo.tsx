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
  {
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: COMPANY.address,
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
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
