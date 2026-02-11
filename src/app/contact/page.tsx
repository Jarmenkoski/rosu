import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GradientBlob from "@/components/ui/GradientBlob";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RoSu Oy. Contact us about software development, consulting, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="gradient-mesh-bg absolute inset-0" />
      <GradientBlob className="-left-64 top-32" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-lg text-center">
          <span className="mb-4 inline-block rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-teal-400">
            Contact
          </span>
          <h1 className="gradient-text-white text-4xl font-bold sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-body-lg text-white/50">
            Have a question, feedback, or want to collaborate? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}
