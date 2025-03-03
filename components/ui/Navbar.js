import Image from "next/image";
import React from "react";
import icon from "@/app/assets/images/icon.png";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { ChevronRightIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex-row bg-transparent backdrop-blur-2xl sticky top-0">
        <div className="px-2">
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
                  Download HealthAI
                  <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </AnimatedSubscribeButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
