"use client";

import React from "react";
import { motion } from "motion/react";

export const RadiantButton = () => {
    return (
        <div
            className="[perspective::1000px] [transform-style:preserve-3d]  flex items-center justify-center"
        >
            <motion.button
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
                    boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
                }}
                style={{
                    translateZ: 100,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="group relative text-neutral-500 text-xl px-12 py-5 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
            >
                <span className="group-hover:text-cyan-500 transition-colors duration-300">
                    Radiant Button
                </span>
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[6px] w-full mx-auto blur-sm"></span>
            </motion.button>
        </div>
    );
};
