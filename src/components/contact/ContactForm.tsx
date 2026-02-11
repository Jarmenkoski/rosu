"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="glass space-y-6 rounded-2xl p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="focus-ring w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-teal-400/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="focus-ring w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-teal-400/30"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/70">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="focus-ring w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-teal-400/30"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring w-full resize-none rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-teal-400/30"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </motion.form>
  );
}
