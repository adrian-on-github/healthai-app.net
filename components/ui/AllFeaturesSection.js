import React from "react";
import Analytics from "./Analytics";
import { AnimatedBeamMultipleOutputDemo } from "../ui/AnimatedBeam";
import { AnimatedListDemo } from "../ui/AnimatedList";

const AllFeaturesSection = () => {
  return (
    <section className="flex flex-col gap-y-8 mt-12">
      {/* Analytics */}
      <div className="flex p-8 flex-col items-start">
        <div className="flex flex-row items-center justify-center">
          <span className="w-8 bg-green-500/40 h-3 rounded-3xl"></span>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl lg:text-4xl font-medium mx-6 text-wrap">
              Analytics <span className="text-sm">(Soon)</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center py-20 gap-x-10">
          <div>
            <Analytics className="relative h-[250px] w-[350px] lg:h-[300px] lg:w-[400px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_7%,#000_100%)]" />
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="font-medium text-lg lg:px-40 px-4">
              HealthAI helps you better understand your well-being by analyzing
              your symptoms and daily health inputs over time. Instead of
              isolated snapshots, you gain a clearer picture of your overall
              health development.
            </p>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="flex p-8 flex-col items-start">
        <div className="flex flex-row items-center justify-center">
          <span className="w-8 bg-amber-500/40 h-3 rounded-3xl"></span>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl lg:text-4xl font-medium mx-6 text-wrap">
              Integrations
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 gap-x-10">
          <div className="w-full flex justify-center items-center">
            <AnimatedBeamMultipleOutputDemo className="h-[300px] w-full md:w-[700px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]" />
          </div>
          <div className="flex justify-center items-center text-center lg:px-40">
            <p className="font-medium text-lg">
              HealthAI integrates powerful tools to support your health journey.
              From AI-powered doctor-style prompts to everyday wellness
              guidance, it combines advanced models from OpenAI with practical
              features—so you get smart, reliable help whenever you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex p-8 flex-col items-start">
        <div className="flex flex-row items-center justify-center">
          <span className="w-8 bg-blue-500/40 h-3 rounded-3xl"></span>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl lg:text-4xl font-medium mx-6 text-wrap">
              Notifications <span className="text-sm">(Soon)</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 gap-x-10">
          <div>
            <AnimatedListDemo className="h-[300px] w-full md:w-[700px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]" />
          </div>
          <div className="flex justify-center items-center text-center lg:px-40 px-4">
            <p className="font-medium text-base lg:text-lg">
              HealthAI sends timely notifications to keep you on track with your
              health goals. Whether it&apos;s a a reminder to check your
              symptoms, stay active, or follow your wellness plan, these
              notifications ensure you never miss a step in your health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeaturesSection;
