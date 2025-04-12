import React from "react";
import { MarqueeDemo } from "./Marquee";

const Testimonials = () => {
  return (
    <>
      <div className="py-12 lg:pb-12 lg:pt-22">
        <div className="mt-6 mb-14">
          <h1 className="text-2xl lg:text-4xl font-medium mx-6 text-center text-wrap">
            {`You don't trust us? But over`}{" "}
            <span className="font-semibold">{`3273+`}</span> {`people do`}
          </h1>
        </div>

        <MarqueeDemo />
      </div>
    </>
  );
};

export default Testimonials;
