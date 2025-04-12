"use client";

import { cn } from "@/lib/util";
import { CgCloseO } from "react-icons/cg";
import { BiMessageDetail } from "react-icons/bi";
import { GiSandsOfTime, GiRapidshareArrow, GiPriceTag } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const GhostCard = () => {
    const [open, setOpen] = useState(true);
    const [hasExited, setHasExited] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        setHasExited(false);
    };
    return (
        <>
            <AnimatePresence onExitComplete={() => setHasExited(true)}>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(10px)",
                        }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className={cn(
                            "w-72 min-h-[27rem] rounded-xl text-white bg-neutral-900/40",
                            "shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(0,153,255,0.15),0_0_30px_rgba(0,153,255,0.1)]",
                            "p-6 flex flex-col"
                        )}
                    >
                        <h2 className="font-bold text-xs lg:text-base text-center">
                            AnimatedUI
                        </h2>
                        <p className="text-neutral-400 text-xs text-center">
                            Personalised animated components
                        </p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleClose}
                                className="flex items-center gap-1 text-sm mt-4 rounded-md px-3 text-neutral-300 py-1 shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(0,153,255,0.25),0_0_30px_rgba(0,153,255,0.2)] cursor-pointer"
                            >
                                AnimatedUI
                                <CgCloseO className="h-4 w-4 text-neutral-300" />
                            </button>
                        </div>
                        <div className="bg-neutral-900/60 flex-1 rounded-lg mt-4 border border-dashed border-neutral-700 relative">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 h-full w-full bg-neutral-900 rounded-lg divide-y divide-neutral-700 px-1 border border-neutral-700"
                            >
                                <div className="flex gap-4 p-4">
                                    <div className="h-6 w-6 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]">
                                        <BiMessageDetail className="w-4 h-4 text-neutral-300" />
                                    </div>
                                    <p className="text-sm text-neutral-300">
                                        {" "}
                                        Animated Components
                                    </p>
                                </div>
                                <div className="flex gap-4 p-4">
                                    <div className="h-6 w-6 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]">
                                        <GiSandsOfTime className="w-4 h-4 text-neutral-300" />
                                    </div>
                                    <p className="text-sm text-neutral-300">
                                        {" "}
                                        Time Saviour For Devs
                                    </p>
                                </div>
                                <div className="flex gap-4 p-4">
                                    <div className="h-6 w-6 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]">
                                        <GiRapidshareArrow className="w-4 h-4 text-neutral-300" />
                                    </div>
                                    <p className="text-sm text-neutral-300">
                                        {" "}
                                        Rapid Development
                                    </p>
                                </div>
                                <div className="flex gap-4 p-4">
                                    <div className="h-6 w-6 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]">
                                        <GiPriceTag className="w-4 h-4 text-neutral-300" />
                                    </div>
                                    <p className="text-sm text-neutral-300">
                                        {" "}
                                        Free Of Cost
                                    </p>
                                </div>
                                <div className="flex gap-2 p-4 items-center justify-center">
                                    <div className="h-5 w-5 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]">
                                        <TiPlus className="w-3 h-3 text-neutral-300" />
                                    </div>
                                    <p className="text-xs text-neutral-400">
                                        {" "}
                                        More Options
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {hasExited && !open && (
                <button
                    onClick={handleOpen}
                    className="mt-4 px-4 py-2 text-sm text-neutral-300 rounded-md shadow-[0_0_4px_rgba(255,255,255,0.3),0_0_10px_rgba(0,153,255,0.35),0_0_30px_rgba(0,153,255,0.3)] cursor-pointer"
                >
                    Show Card
                </button>
            )}
        </>
    );
};

export default GhostCard;
