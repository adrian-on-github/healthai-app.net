"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useRouter } from "next/navigation";

export const AnimatedSubscribeButton = React.forwardRef(
  ({ linkClicked = false, onClick, className, children, ...props }, ref) => {
    const router = useRouter();
    const childrenArray = React.Children.toArray(children);
    const initialChild = childrenArray[0];

    return (
      <AnimatePresence mode="wait">
        <motion.button
          ref={ref}
          className={cn(
            "relative flex h-10 w-fit cursor-pointer items-center justify-center rounded-lg border-none bg-primary px-6 text-primary-foreground",
            className
          )}
          onClick={() =>
            router.push("https://apps.apple.com/de/app/health-ai/id6702024061")
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          {...props}
        >
          <motion.span
            key="reaction"
            className="relative flex items-center justify-center font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialChild}
          </motion.span>
        </motion.button>
      </AnimatePresence>
    );
  }
);

AnimatedSubscribeButton.displayName = "AnimatedSubscribeButton";
