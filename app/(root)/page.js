import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Features from "@/components/ui/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pt-[6vh] px-20 pb-20">
        <HeroSection />
      </section>
      <div className="bg-gray-50/70 w-full ,">
        <Features />
      </div>
    </>
  );
}
