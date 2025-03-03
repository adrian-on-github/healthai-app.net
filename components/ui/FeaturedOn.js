import Image from "next/image";
import React from "react";

const FeaturedOn = () => {
  return (
    <div className="flex-center">
      <ol className="text-center flex-row flex gap-x-32">
        <h3 className="text-neutral-500 font-medium text-sm">Featured on</h3>
        <li>
          <a href="#">
            {/* <Image
              src={twitter}
              alt="X"
              width={40}
              height={40}
              className="z-10 "
            /> */}
            1
          </a>
        </li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ol>
    </div>
  );
};

export default FeaturedOn;
