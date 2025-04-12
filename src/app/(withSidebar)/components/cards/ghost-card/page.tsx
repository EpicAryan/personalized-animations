import React from "react";
// import { GhostCard } from "@/component";
import {
    GhostCard,
    GhostItem,
    GhostItemSmall,
    GhostItemsContainer,
} from "@/reusableComponent";
import { BiMessageDetail } from "react-icons/bi";
import { GiSandsOfTime, GiRapidshareArrow, GiPriceTag } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
const GhostCardPage = () => {
    return (
        <div
            className="h-screen w-full flex justify-center items-center"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
                backgroundPosition: "repeat",
            }}
        >
            {/* <GhostCard /> */}
            <GhostCard>
      <GhostItemsContainer>
        <GhostItem 
          icon={<BiMessageDetail className="w-4 h-4 text-neutral-300" />} 
          text="Animated Components" 
        />
        <GhostItem 
          icon={<GiSandsOfTime className="w-4 h-4 text-neutral-300" />} 
          text="Time Saviour For Devs" 
        />
        <GhostItem 
          icon={<GiRapidshareArrow className="w-4 h-4 text-neutral-300" />} 
          text="Rapid Development" 
        />
        <GhostItem 
          icon={<GiPriceTag className="w-4 h-4 text-neutral-300" />} 
          text="Free Of Cost" 
        />
        <GhostItemSmall 
          icon={<TiPlus className="w-3 h-3 text-neutral-300" />} 
          text="More Options" 
        />
      </GhostItemsContainer>
    </GhostCard>
        </div>
    );
};

export default GhostCardPage;
