import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Features from "@/components/ui/Features";
import FeaturedOn from "@/components/ui/FeaturedOn";
import Easy from "@/components/ui/Easy";
import BentoDemo from "@/components/ui/BentoGrid";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/ui/Testimonials";
import AllFeaturesSection from "@/components/ui/AllFeaturesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pt-[6vh] px-8 pb-20 lg:px-20 lg:min-h-[80vh]">
        <HeroSection />
      </section>

      <Easy />
      <div className="bg-gray-50/70 w-full min-h-140 pt-8 pb-30 rounded-[3%]">
        <Features />
        <div className="mt-50">
          <AllFeaturesSection />
        </div>
      </div>

      <Testimonials />
      {/* <FeaturedOn /> */}
      <Footer />
    </>
  );
}
