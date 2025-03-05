import { Check, Dot, X } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex-center">
        <div className="mt-9 text-wrap lg:text-nowrap">
          <h1 className="text-4xl lg:text-5xl font-medium text-center">
            Most people chasing dreams. The perfect health{" "}
            <span className="italic font-semibold">should</span> be a dream
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between w-full lg:px-72 mt-21 flex-col lg:flex-row">
        <section className="border-3 border-red-400/50 rounded-3xl py-6 px-8 bg-red-500/30 lg:min-h-80 lg:min-w-140 my-2 min-h-85 max-w-100">
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
        <section className="border-3 border-green-400/50 rounded-3xl py-6 px-8 bg-green-500/30 lg:min-h-80 lg:min-w-140 min-h-85 max-w-100 my-2">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-1 justify-start">
              <h1 className="text-3xl text-green-600 font-medium">
                Your health with HealthAI
              </h1>
              <div className="rounded-full p-1 items-center justify-center bg-green-400 h-7 mx-1 mt-0.4">
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
    text: "Reminder for more energy",
  },
  {
    id: 1,
    text: "Lots of daily activity",
  },
  {
    id: 2,
    text: "Fewer health issues",
  },
  {
    id: 3,
    text: "Analyse your health anytime",
  },
];

const contra = [
  {
    id: 0,
    text: "Low energy",
  },
  {
    id: 1,
    text: "Lack of activity",
  },
  {
    id: 2,
    text: "Mental fog and body stress",
  },
  {
    id: 3,
    text: "Frequent health problems",
  },
  {
    id: 4,
    text: "Low confidence",
  },
];

export default Features;
