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
      <div className="bg-[#DFF0DF] pb-3 rounded-3xl lg:mx-3 mt-2 lg:mt-0">
        <section className="pt-[6vh] px-8 pb-20 lg:px-20 lg:min-h-[80vh]">
          <HeroSection />
        </section>
        <Easy />
      </div>
      <Features />
      <div className="bg-gray-50 min-h-140 mt-18 py-2 pb-20 rounded-3xl lg:mx-3">
        <AllFeaturesSection />
      </div>

      <Testimonials />
      {/* <FeaturedOn /> */}
      <Footer />
    </>
  );
}
