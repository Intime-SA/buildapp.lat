import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import LivePreview from "@/components/LivePreview";
import Social from "@/components/Social";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Partners />
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <Process />
      <LivePreview />
      <Social />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
