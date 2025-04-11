"use client";

import React from "react";
// import { RadiantButton } from '@/component'
import { RadiantButton } from "@/reusableComponent";
const RadiantButtonPage = () => {
    return (
        <div
            className="h-screen w-full flex justify-center"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
                backgroundPosition: "repeat",
            }}
        >
            {/* <RadiantButton /> */}
            <RadiantButton
                className="bg-black text-neutral-500"
                textClassName="group-hover:text-cyan-500"
                gradientClassName="bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                boxShadowColor="rgba(8, 112, 184, 0.7)"
                onClick={() => console.log("Clicked!")}
            />
        </div>
    );
};

export default RadiantButtonPage;
