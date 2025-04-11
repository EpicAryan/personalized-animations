


"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Helper function to handle class name merging with proper types
const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface RadiantButtonProps {
  text?: string;
  className?: string;
  wrapperClassName?: string;
  textClassName?: string;
  gradientClassName?: string;
  boxShadowColor?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const RadiantButton: React.FC<RadiantButtonProps> = ({
  text = "Radiant Button",
  className = "",
  wrapperClassName = "",
  textClassName = "",
  gradientClassName = "",
  boxShadowColor = "rgba(8, 112, 184, 0.7)",
  onClick,
  children,
}) => {
  return (
    <div
      className={cn(
        "[perspective:1000px] [transform-style:preserve-3d] flex items-center justify-center",
        wrapperClassName
      )}
    >
      <motion.button
        onClick={onClick}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          boxShadow: `0px 20px 50px ${boxShadowColor}`,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={cn(
          "group relative text-neutral-500 text-xl px-12 py-5 rounded-lg bg-black",
          "shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]",
          className
        )}
      >
        <span className={cn("group-hover:text-cyan-500 transition-colors duration-300", textClassName)}>
          {children || text}
        </span>
        <span className={cn(
          "absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto",
          gradientClassName
        )}></span>
        <span className={cn(
          "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-1.5 w-full mx-auto blur-sm",
          gradientClassName
        )}></span>
      </motion.button>
    </div>
  );
};

// Example usage:
/*
<RadiantButton 
  text="Custom Button"
  className="bg-blue-900 text-white"
  textClassName="group-hover:text-pink-400"
  gradientClassName="bg-gradient-to-r from-transparent via-pink-400 to-transparent"
  boxShadowColor="rgba(236, 72, 153, 0.7)"
  onClick={() => alert('Button clicked!')}
/>

// Or with children:
<RadiantButton
  className="bg-purple-900"
  textClassName="group-hover:text-amber-400"
  gradientClassName="bg-gradient-to-r from-transparent via-amber-400 to-transparent"
  boxShadowColor="rgba(251, 191, 36, 0.7)"
>
  Click Me!
</RadiantButton>
*/
