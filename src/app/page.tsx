import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductShowcase from "@/components/landing/ProductShowcase";
import TeamSection from "@/components/landing/TeamSection";
import CTASection from "@/components/landing/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductShowcase />
      <TeamSection />
      <CTASection />
    </>
  );
}
