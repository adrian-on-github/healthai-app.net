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
          <div className="flex justify-end">
            <div className="text-2xl font-medium text-neutral-700 mt-1 italic">
              Improving your health wasn't easier until now.
            </div>
          </div>
          <div className="mt-6">
            <AvatarCircles numPeople={1029} avatarUrls={avatars} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
