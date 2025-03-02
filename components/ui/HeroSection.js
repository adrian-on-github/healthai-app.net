import React from "react";
import { AvatarCircles } from "../magicui/avatar-circles";

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
      <section className="pt-[13vh] flex-start p-20">
        <div className="flex-c">
          <div className="text-5xl font-medium">
            Improve{" "}
            <span className="text-red-500 font-semibold line-through italic">
              worsen
            </span>{" "}
            your health in weeks, not months.
          </div>
          <span className="w-[29vh] bg-green-500 h-8 absolute hidden lg:flex right-195 -z-10 top-58" />
          <div className="flex justify-start mt-2">
            <div className="text-2xl font-medium text-neutral-700 italic">
              Improving your health wasn't easier{" "}
              <span className="underline">until now.</span>
            </div>
          </div>
          <div className="mt-3 flex-c">
            <p className="text-neutral-700 text-lg pr-280">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
          </div>
          <div className="mt-7">
            <div className="flex justify-center items-start flex-col">
              <AvatarCircles avatarUrls={avatars} />

              <div className="flex-row flex gap-x-1">
                <span className="flex-start mt-2 font-semibold text-lg text-center italic">
                  2,794
                </span>
                <span className="flex-start mt-2 font-regular text-lg text-center">
                  are already improving
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
