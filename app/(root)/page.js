import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Features from "@/components/ui/Features";
import FeaturedOn from "@/components/ui/FeaturedOn";
import Easy from "@/components/ui/Easy";
import BentoDemo from "@/components/ui/BentoGrid";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="pt-[6vh] px-20 pb-20">
        <HeroSection />
      </section>
      <FeaturedOn />
      <Easy />
      <div className="bg-gray-50/70 w-full min-h-160 pb-5">
        <Features />
      </div>
      <BentoDemo />
      <Footer />
    </>
  );
}
