import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Features from "@/components/ui/Features";
import FeaturedOn from "@/components/ui/FeaturedOn";
import { AnimatedListDemo } from "@/components/ui/AnimatedList";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="absolute top-1 right-70">
        <AnimatedListDemo />
      </div>
      <section className="pt-[6vh] px-20 pb-20">
        <HeroSection />
      </section>
      <FeaturedOn />
      <div className="bg-gray-50/70 w-full min-h-160 mt-10">
        <Features />
      </div>
    </>
  );
}
