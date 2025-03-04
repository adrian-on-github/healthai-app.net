import React from "react";
import { MarqueeDemo } from "./Marquee";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="py-12">
        <div className="mt-6 mb-14">
          <h1 className="text-4xl lg:text-5xl font-medium text-center text-wrap lg:text-nowrap ">
            ✅You don't trust us? But over{" "}
            <span className="italic underline">5000+</span> people does
          </h1>
          <Link
            href="https://apps.apple.com/app/id6702024061?action=write-review"
            target="_blank"
          >
            <p className="text-muted-foreground font-medium mt-3 text-center text-lg italic underline">
              Already tried to find your own rating?
            </p>
          </Link>
        </div>

        <MarqueeDemo />
      </div>
    </>
  );
};

export default Testimonials;
