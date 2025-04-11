"use client";

import React from "react";
import { motion } from "framer-motion"; // Correct import from 'framer-motion'
import {
    RocketLaunchIcon,
    CursorArrowRaysIcon,
    SparklesIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

const ComponentPage = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center ">
            {/* Added flex justify-center to the outer div */}
            <div className="container mx-auto text-white py-10 px-6 flex flex-col items-center">
                {/* Kept container mx-auto and flex flex-col items-center */}
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Animated Components: Ignite Your UI
                </motion.h1>
                <p className="text-lg mb-12 text-center italic text-gray-300">
                    Explore dynamic elements to elevate your web projects.
                </p>
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
                        <SparklesIcon className="h-6 w-6 text-yellow-400" />
                        <span>Why Animate?</span>
                    </h2>
                    <ul className="list-none pl-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="flex items-start space-x-3">
                            <RocketLaunchIcon className="h-7 w-7 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">Engage Users</h3>
                                <p className="text-sm text-gray-400">
                                    Captivate attention with subtle motion.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <CursorArrowRaysIcon className="h-7 w-7 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">Improve UX</h3>
                                <p className="text-sm text-gray-400">
                                    Intuitive feedback & smoother interactions.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <SparklesIcon className="h-7 w-7 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">
                                    Highlight Key Info
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Guide focus to important elements.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <HeartIcon className="h-7 w-7 text-red-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">
                                    Add Personality
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Memorable brand identity & unique feel.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="mb-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        Explore & Create
                    </h2>
                    <p className="leading-relaxed">
                        Dive into our component library. Experiment, customize,
                        and bring your interfaces to life!
                    </p>
                </section>
                <section className="text-center">
                    <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Browse Components
                    </motion.button>
                    <p className="mt-4 text-gray-400 text-sm">
                        <span className="font-semibold">Pro Tip:</span>{" "}
                        Purposeful animation is key. Subtlety wins!
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ComponentPage;
