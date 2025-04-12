import React from "react";
import { BellIcon, Share2Icon, TrendingUp, ClipboardPlus } from "lucide-react";
import Analytics from "./Analytics";
import { AnimatedBeamMultipleOutputDemo } from "../ui/AnimatedBeam";
import { AnimatedListDemo } from "../ui/AnimatedList";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import MedicalResults from "./MedicalResults";
import { cn } from "@/lib/utils";

const AllFeaturesSection = () => {
  return (
    <section className="flex flex-col gap-y-8 mt-12">
      <div className="flex p-8 flex-col items-start">
        <div className="flex flex-row items-center justify-start">
          <span className="w-8 bg-green-500/80 h-3 rounded-3xl"></span>
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-2xl lg:text-4xl font-medium mx-6 text-center text-wrap">
              Analytics
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start pt-12 gap-x-10">
          <div>
            <Analytics className="relative h-[300px] w-[700px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
          </div>
          <div className="font-medium text-lg pr-220">
            HealthAI helps you better understand your well-being by analyzing
            your symptoms and daily health inputs over time. Instead of isolated
            snapshots, you gain a clearer picture of your overall health
            development.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeaturesSection;
