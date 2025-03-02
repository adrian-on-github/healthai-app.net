import React from "react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "./spotlight-new";

const HeroSection = () => {
  return (
    <>
      <section className="p-12 pt-[12vh] flex-center">
        <Spotlight />
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
          )}
        />
      </section>
    </>
  );
};

export default HeroSection;
