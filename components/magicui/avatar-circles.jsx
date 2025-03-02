/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

export const AvatarCircles = ({ className, avatarUrls }) => {
  return (
    <div className={cn("z-10 flex -space-x-6 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-12 w-12 rounded-full border-2 border-gray-800 bg-white"
          src={url.imageUrl}
          width={120}
          height={120}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
};
