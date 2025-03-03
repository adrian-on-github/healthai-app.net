import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/AnimatedBeam";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pt-[6vh] px-20 pb-20">
        <HeroSection />
      </section>
      <AnimatedBeamMultipleOutputDemo />
    </>
  );
}
