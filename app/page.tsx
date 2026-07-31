import { AcademicHero, AcademicSections } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sabbir Hasan Munna | Academic Research CV & Physics Portfolio",
  description: "Physics Postgraduate Researcher at KUET specializing in experimental condensed matter physics, magnetic materials synthesis, and Density Functional Theory (DFT) calculations.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">
      <AcademicHero />
      <AcademicSections />
    </main>
  );
}
