"use client";

import { cn } from "@/lib/util";
import { CgCloseO } from "react-icons/cg";
import { AnimatePresence, motion } from "motion/react";
import { useState, ReactNode } from "react";

// Define the variant types
export const VARIANTS = ['default', 'purple', 'green', 'red'] as const;
export type GhostCardVariant = typeof VARIANTS[number];

export const ghostCardVariants: Record<GhostCardVariant, string> = {
  default: "shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(0,153,255,0.15),0_0_30px_rgba(0,153,255,0.1)]",
  purple: "shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(138,43,226,0.15),0_0_30px_rgba(138,43,226,0.1)]",
  green: "shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(0,255,0,0.15),0_0_30px_rgba(0,255,0,0.1)]",
  red: "shadow-[0_0_4px_rgba(255,255,255,0.1),0_0_10px_rgba(255,0,0,0.15),0_0_30px_rgba(255,0,0,0.1)]",
};

export const ghostItemVariants: Record<GhostCardVariant, string> = {
  default: "shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,153,255,0.45),0_0_30px_rgba(0,153,255,0.4)]",
  purple: "shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(138,43,226,0.45),0_0_30px_rgba(138,43,226,0.4)]",
  green: "shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(0,255,0,0.45),0_0_30px_rgba(0,255,0,0.4)]",
  red: "shadow-[0_0_4px_rgba(255,255,255,0.5),0_0_10px_rgba(255,0,0,0.45),0_0_30px_rgba(255,0,0,0.4)]",
};

// Props interface for GhostCard
interface GhostCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  initialOpen?: boolean;
  width?: string;
  height?: string;
  cardClassName?: string;
  variant?: GhostCardVariant;
  backgroundColor?: string;
  children?: ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
}

export const GhostCard = ({
  title = "AnimatedUI",
  subtitle = "Personalised animated components",
  buttonText = "AnimatedUI",
  initialOpen = true,
  width = "w-72",
  height = "min-h-[27rem]",
  cardClassName = "",
  variant = "default",
  backgroundColor = "bg-neutral-900/40",
  children,
  onClose,
  onOpen,
}: GhostCardProps) => {
  const [open, setOpen] = useState(initialOpen);
  const [hasExited, setHasExited] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setOpen(true);
    setHasExited(false);
    onOpen?.();
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
              width,
              height,
              "rounded-xl text-white",
              backgroundColor,
              ghostCardVariants[variant],
              "p-6 flex flex-col",
              cardClassName
            )}
          >
            <h2 className="font-bold text-xs lg:text-base text-center">
              {title}
            </h2>
            <p className="text-neutral-400 text-xs text-center">
              {subtitle}
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleClose}
                className={cn(
                  "flex items-center gap-1 text-sm mt-4 rounded-md px-3 text-neutral-300 py-1",
                  ghostCardVariants[variant],
                  "cursor-pointer"
                )}
              >
                {buttonText}
                <CgCloseO className="h-4 w-4 text-neutral-300" />
              </button>
            </div>
            <div className="bg-neutral-900/60 flex-1 rounded-lg mt-4 border border-dashed border-neutral-700 relative">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {hasExited && !open && (
        <button
          onClick={handleOpen}
          className={cn(
            "mt-4 px-4 py-2 text-sm text-neutral-300 rounded-md",
            ghostCardVariants[variant],
            "cursor-pointer"
          )}
        >
          Show Card
        </button>
      )}
    </>
  );
};

// Props interface for GhostItem
interface GhostItemProps {
  icon: ReactNode;
  text: string;
  variant?: GhostCardVariant;
  className?: string;
}

// Sub-component for the items inside the card
export const GhostItem = ({
  icon,
  text,
  variant = "default",
  className = "",
}: GhostItemProps) => {
  return (
    <div className="flex gap-4 p-4">
      <div className={cn(
        "h-6 w-6 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center", 
        ghostItemVariants[variant], className
      )}>
        {icon}
      </div>
      <p className="text-sm text-neutral-300">{text}</p>
    </div>
  );
};

// Smaller GhostItem variant
export const GhostItemSmall = ({
  icon,
  text,
  variant = "default",
  className = "",
}: GhostItemProps) => {
  return (
    <div className="flex gap-2 p-4 items-center justify-center">
      <div className={cn(
        "h-5 w-5 flex-shrink-0 bg-gradient-to-br bg-neutral-900/50 rounded-md flex items-center justify-center",
        ghostItemVariants[variant], className
      )}>
        {icon}
      </div>
      <p className="text-xs text-neutral-400">{text}</p>
    </div>
  );
};

// Interface for GhostItemsContainer
interface GhostItemsContainerProps {
  children: ReactNode;
  className?: string;
}

// Container for the animated items
export const GhostItemsContainer = ({ 
  children, 
  className = "" 
}: GhostItemsContainerProps) => {
  return (
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
      className={cn(
        "absolute inset-0 h-full w-full bg-neutral-900 rounded-lg divide-y divide-neutral-700 px-1 border border-neutral-700",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GhostCard;
