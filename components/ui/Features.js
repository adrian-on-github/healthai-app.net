import { Check, Dot, X } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex-center">
        <div className="mt-14 text-wrap flex flex-col lg:flex-row gap-0 lg:gap-1">
          <h1 className="text-2xl lg:text-4xl font-medium text-center text-wrap mx-6">
            Everything starts with health – without it, progress slows down.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 mt-10 md:mt-20 flex-col md:flex-row gap-6 md:gap-8">
        <section className="border-2 border-gray-50/20 rounded-3xl py-6 px-6 sm:px-8 bg-red-500/30 w-full md:w-1/2 md:max-w-[500px] min-h-[33vh] shadow-black drop-shadow-md">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-1 justify-start">
              <h1 className="text-3xl text-red-500 font-medium">
                Your health without HealthAI
              </h1>
              <div className="rounded-full p-1 items-center justify-center bg-red-300 h-7 mx-1 mt-0.5">
                <X className="text-red-500" size={20} />
              </div>
            </div>
            <ul className="text-regular mt-4 px-2">
              {contra.map((e, index) => (
                <div key={e.id} className="mt-2 flex flex-row">
                  <Dot size={25} className="text-neutral-700" />
                  <p className="text-lg text-neutral-700 font-medium">
                    {e.text}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </section>
        <section className="border-2 border-gray-50/20 rounded-3xl py-6 px-6 sm:px-8 bg-green-500/30 w-full md:w-1/2 md:max-w-[500px] min-h-[33vh] shadow-black drop-shadow-md">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-1 justify-start">
              <h1 className="text-3xl text-green-500 font-medium">
                Your health without HealthAI
              </h1>
              <div className="rounded-full p-1 items-center justify-center bg-green-300 h-7 mx-1 mt-0.5">
                <Check className="text-green-600" size={20} />
              </div>
            </div>
            <ul className="text-regular mt-4 px-2">
              {pro.map((e, index) => (
                <div key={e.id} className="mt-2 flex flex-row">
                  <Dot size={25} className="text-neutral-700" />
                  <p className="text-lg text-neutral-700 font-medium">
                    {e.text}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

const pro = [
  {
    id: 0,
    text: "Better overview of personal symptoms",
  },
  {
    id: 1,
    text: "Early recognition of patterns or changes",
  },
  {
    id: 2,
    text: "Motivation for regular self-checks",
  },
  {
    id: 3,
    text: "Easier communication with doctors",
  },
  {
    id: 4,
    text: "Track long-term health developments",
  },
];

const contra = [
  {
    id: 0,
    text: "No clear health overview",
  },
  {
    id: 1,
    text: "Harder to notice small changes over time",
  },
  {
    id: 2,
    text: "Less motivation to reflect on symptoms",
  },
  {
    id: 3,
    text: "Doctor visits feel less prepared",
  },
  {
    id: 4,
    text: "Health trends easily forgotten",
  },
];

export default Features;
