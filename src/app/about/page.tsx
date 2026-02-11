import type { Metadata } from "next";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import ValuesGrid from "@/components/about/ValuesGrid";
import TimelineSection from "@/components/about/TimelineSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about RoSu Oy, a Finnish software development company building innovative digital products and platforms since 2024.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <MissionSection />
      <ValuesGrid />
      <TimelineSection />
    </>
  );
}
