import React from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0, height: 0 },

    animate: { scale: 1, opacity: 1, originY: 0, height: "auto" },

    exit: { scale: 0, opacity: 0, height: 0 },

    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div
      {...animations}
      layout
      className="mx-auto w-full lg:flex lg:justify-center"
    >
      {children}
    </motion.div>
  );
}

export const AnimatedList = React.memo(({ children, className, ...props }) => {
  return (
    <div
      className={cn(`flex flex-col items-center gap-4`, className)}
      {...props}
    >
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";
