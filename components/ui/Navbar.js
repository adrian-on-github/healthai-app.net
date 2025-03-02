import Image from "next/image";
import React from "react";
import icon from "@/app/assets/images/icon.png";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex-row lg:mx-[1rem]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-row">
            <Image
              src={icon}
              width={40}
              height={25}
              alt="icon"
              className="rounded-lg mr-1"
            />
            <div className="flex text-center mt-1">
              <h1 className="text-2xl font-semibold">HealthAI</h1>
            </div>
          </div>
          {/* Button */}
          <div>
            <AnimatedSubscribeButton>
              <span className="group inline-flex items-center">
                Download HealhtAI
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 size-4" />
                Subscribed
              </span>
            </AnimatedSubscribeButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
