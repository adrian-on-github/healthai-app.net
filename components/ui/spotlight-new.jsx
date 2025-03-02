"use client";
import React from "react";
import { motion } from "motion/react";

export const Spotlight = ({
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 15%, .2) 0, hsla(0, 0%, 5%, .1) 80%, transparent 100%)",
  height = 1880,
  smallWidth = 320,
  duration = 9,
  xOffset = 200,
} = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: "rotate(-60deg) translate(-20%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>
    </motion.div>
  );
};
