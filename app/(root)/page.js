import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Features from "@/components/ui/Features";
import FeaturedOn from "@/components/ui/FeaturedOn";
import Easy from "@/components/ui/Easy";
import BentoDemo from "@/components/ui/BentoGrid";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pt-[6vh] px-8 pb-20 lg:px-20 lg:min-h-[80vh] min-h-[70vh]">
        <HeroSection />
      </section>

      <Easy />
      <div className="bg-gray-50/70 w-full min-h-140 pb-5">
        <Features />
      </div>
      <BentoDemo />
      <Testimonials />
      <FeaturedOn />
      <Footer />
    </>
  );
}
