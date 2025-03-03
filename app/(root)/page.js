import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex-center pt-[6vh]">
        <HeroSection />
      </section>
    </>
  );
}
