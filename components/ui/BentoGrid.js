import { BellIcon, Share2Icon, TrendingUp, ClipboardPlus } from "lucide-react";
import Analytics from "./Analytics";
import { AnimatedBeamMultipleOutputDemo } from "../ui/AnimatedBeam";
import { AnimatedListDemo } from "../ui/AnimatedList";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import MedicalResults from "./MedicalResults";

const features = [
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Health analyses, AI-doctor, Medical results and even more",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute -left-5 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    Icon: ClipboardPlus,
    name: "Medical Results",
    description:
      "Medical results are important. For the young and the old ones.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <MedicalResults className="absolute right-5 h-[300px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: TrendingUp,
    name: "Health Analyses",
    description: "It takes time to get healthy, but it's quicker with analyzes",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Analytics className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified to get reminded of your health.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <>
      <BentoGrid className="p-12">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
