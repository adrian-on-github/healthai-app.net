import Image from "next/image";
import React from "react";
import icon from "@/app/assets/images/icon.png";
import Link from "next/link";

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
            <div className="mx-9 gap-x-6 flex flex-row items-center justify-end">
              <Link href="#">
                <p className="text-lg text-gray-700 font-medium">Features</p>
              </Link>
              <Link href="#">
                <p className="text-lg text-gray-700 font-medium">
                  Testimonials
                </p>
              </Link>
              <Link href="#">
                <p className="text-lg text-gray-700 font-medium">FAQ</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
