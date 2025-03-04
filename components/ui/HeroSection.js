import React from "react";
import { AvatarCircles } from "../magicui/avatar-circles";
import PromotionButtons from "./PromotionButtons";

const HeroSection = () => {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <section className="flex-start lg:pt-16 pt-4">
          <div className="flex-c text-center lg:text-start">
            <div className="text-4xl lg:text-5xl font-semibold">
              Improve your health in weeks,{" "}
              <span className="text-red-500 font-semibold line-through italic">
                not months.
              </span>
            </div>
            <div className="flex justify-center lg:justify-start mt-2">
              <div className="text-lg lg:text-2xl font-regular text-neutral-700 italic ">
                Improving your health wasn't easier{" "}
                <span className="underline">until now.</span>
              </div>
            </div>
            <div className="mt-3 flex-c">
              <p className="text-neutral-700 text-lg font-medium">
                {`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna`}
                <br />
                {`aliquyam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`}
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
