import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-gray-950">
      <Container size="wide" className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="RoSu Oy"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-white/40">
              Building software that makes everyday life easier and better.
              From Finland, for everyone.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/30">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/30">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-teal-400"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-teal-400"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Business ID: {COMPANY.businessId}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Made in {COMPANY.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}
