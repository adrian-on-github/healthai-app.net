import React from "react";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeam";

const Features = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-20">
        <section>
          <AnimatedBeamMultipleOutputDemo />
        </section>
        <section>
          <AnimatedBeamMultipleOutputDemo />
        </section>
      </div>
    </>
  );
};

export default Features;
