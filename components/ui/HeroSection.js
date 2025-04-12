import React from "react";
import { AvatarCircles } from "../magicui/avatar-circles";
import PromotionButtons from "./PromotionButtons";

const HeroSection = () => {
  const avatars = [
    { image: "/testimonial1.jpg" },
    { image: "/testimonial2.jpg" },
    { image: "/testimonial3.jpg" },
    { image: "/testimonial4.jpg" },
    { image: "/testimonial5.jpg" },
    { image: "/testimonial6.jpg" },
    { image: "/testimonial7.jpg" },
  ];

  return (
    <>
      <div className="flex">
        <section className="flex-center lg:flex-start lg:pt-16 pt-4">
          <div className="flex-c text-center lg:text-start">
            <div className="text-6xl font-semibold">
              Improve your health in weeks{" "}
              <span className="text-red-500 font-semibold line-through italic">
                not months.
              </span>
            </div>

            <div className="mt-7 lg:mt-5 flex-c">
              <p className="text-neutral-700 text-md font-medium">
                HealthAI helps you track symptoms, understand changes, and gain
                insights into your well-being. It’s your personal health
                assistant – simple, smart, and always by your side.
              </p>
            </div>

            <div className="mt-9 flex justify-center lg:justify-start">
              <PromotionButtons />
            </div>

            <div className="mt-9">
              <div className="flex justify-center items-center flex-col lg:items-start">
                <AvatarCircles avatarImages={avatars} />
                <div className="flex-row flex gap-x-1">
                  <span className="flex-start mt-2 font-semibold text-lg text-center italic">
                    3273+
                  </span>
                  <span className="flex-start mt-2 font-regular text-lg text-center">
                    are already improving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
