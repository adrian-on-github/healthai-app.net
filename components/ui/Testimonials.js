import React from "react";
import { MarqueeDemo } from "./Marquee";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="py-12">
        <div className="mt-6 mb-14 mx-4">
          <h1 className="text-4xl lg:text-5xl font-medium text-center text-wrap lg:text-nowrap">
            {`✅ You don't trust us? But over`}{" "}
            <span className="italic underline">{`5000+`}</span> {`people do`}
          </h1>
        </div>

        <MarqueeDemo />
      </div>
    </>
  );
};

export default Testimonials;
