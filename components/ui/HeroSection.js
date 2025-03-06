import React from "react";
import { AvatarCircles } from "../magicui/avatar-circles";
import PromotionButtons from "./PromotionButtons";

const HeroSection = () => {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/175122937?v=4",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/168353082?v=4",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/136450574?v=4",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/86548888?v=4",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/24898559?v=4",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/85670037?v=4",
      profileUrl: "https://github.com/itsarghyadas",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/73161735?v=4",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/annqueenlol",
      profileUrl: "https://github.com/annqueenlol",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/abhisheknaiidu",
      profileUrl: "https://github.com/abhisheknaiidu",
    },
  ];
  return (
    <>
      <div className="flex">
        <section className="flex-center lg:flex-start lg:pt-16 pt-4">
          <div className="flex-c text-center lg:text-start">
            <div className="text-5xl font-semibold">
              Improve your health in weeks,{" "}
              <span className="text-red-500 font-semibold line-through italic">
                not months.
              </span>
            </div>
            <div className="flex justify-center lg:justify-start mt-1 lg:mt-2">
              <div className="text-lg lg:text-2xl font-regular text-neutral-700 italic ">
                {`  Improving your health wasn't easier`}{" "}
                <span className="underline">until now.</span>
              </div>
            </div>
            <div className="mt-7 lg:mt-5 flex-c">
              <p className="text-neutral-700 text-lg font-medium">
                {`Welcome to Health AI  your go to health buddy, always here to help. Got a question about your health? Not sure what a symptom means? Just looking for some simple wellness tips? We’ve got your back.`}

                <br />
                {`Taking care of your health shouldn’t be confusing or stressful. With Health AI, you’re never alone. We're here to make things simple clear and helpful  because you deserve to feel your best every day`}
              </p>
            </div>

            <div className="mt-5 flex justify-center lg:justify-start">
              <PromotionButtons />
            </div>

            <div className="mt-9">
              <div className="flex justify-center items-center flex-col lg:items-start">
                <AvatarCircles avatarUrls={avatars} />
                <div className="flex-row flex gap-x-1">
                  <span className="flex-start mt-2 font-semibold text-lg text-center italic">
                    5000+
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
