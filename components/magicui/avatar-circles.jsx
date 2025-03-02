/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

export const AvatarCircles = ({ numPeople, className, avatarUrls }) => {
  return (
    <div className={cn("z-10 flex -space-x-6 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-15 w-15 rounded-full border-2 border-gray-800 bg-white"
          src={url.imageUrl}
          width={120}
          height={120}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {(numPeople ?? 0) > 0 && (
        <span className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
          +{numPeople}
        </span>
      )}
    </div>
  );
};
