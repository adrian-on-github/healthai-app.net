import { BellIcon, Share2Icon, TrendingUp, ClipboardPlus } from "lucide-react";
import Analytics from "./Analytics";
import { AnimatedBeamMultipleOutputDemo } from "../ui/AnimatedBeam";
import { AnimatedListDemo } from "../ui/AnimatedList";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import MedicalResults from "./MedicalResults";

const features = [
  {
    Icon: ClipboardPlus,
    name: "Medical Results",
    description:
      "Medical results are important. For the young and the old ones.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <MedicalResults className="absolute right-5 h-[300px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Health analyses, AI-doctor, Medical results and even more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-0 lg:right-1 top-2 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: TrendingUp,
    name: "Health Analyses",
    description: "It takes time to get healthy, but it's quicker with analyzes",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Analytics className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified to get reminded of your health.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <>
      <div className="mt-15 lg:mt-20">
        <h1 className="text-4xl lg:text-5xl font-medium text-center text-wrap lg:text-nowrap">
          🚫 Instead of trying to do it{" "}
          <span className="font-semibold italic">yourself</span>, make life{" "}
          <span className="font-semibold italic">easy</span> for yourself
        </h1>
      </div>
      <BentoGrid className="pt-16 px-5 lg:px-20">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
