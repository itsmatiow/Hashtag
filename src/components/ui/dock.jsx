// import React, { useRef } from "react";
// import { cva } from "class-variance-authority";
// import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// import { cn } from "@/lib/utils";

// const DEFAULT_SIZE = 40;
// const DEFAULT_MAGNIFICATION = 60;
// const DEFAULT_DISTANCE = 140;
// const DEFAULT_DISABLEMAGNIFICATION = false;

// const dockVariants = cva(
//   "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
// );

// const Dock = React.forwardRef(
//   (
//     {
//       className,
//       children,
//       iconSize = DEFAULT_SIZE,
//       iconMagnification = DEFAULT_MAGNIFICATION,
//       disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
//       iconDistance = DEFAULT_DISTANCE,
//       direction = "middle",
//       ...props
//     },
//     ref,
//   ) => {
//     const mouseX = useMotionValue(Infinity);

//     const renderChildren = () => {
//       return React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === DockIcon) {
//           return React.cloneElement(child, {
//             ...child.props,
//             mouseX: mouseX,
//             size: iconSize,
//             magnification: iconMagnification,
//             disableMagnification: disableMagnification,
//             distance: iconDistance,
//           });
//         }
//         return child;
//       });
//     };

//     return (
//       <motion.div
//         ref={ref}
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//         {...props}
//         className={cn(dockVariants({ className }), {
//           "items-start": direction === "top",
//           "items-center": direction === "middle",
//           "items-end": direction === "bottom",
//         })}
//       >
//         {renderChildren()}
//       </motion.div>
//     );
//   },
// );

// Dock.displayName = "Dock";

// const DockIcon = ({
//   size = DEFAULT_SIZE,
//   magnification = DEFAULT_MAGNIFICATION,
//   disableMagnification,
//   distance = DEFAULT_DISTANCE,
//   mouseX,
//   className,
//   children,
//   ...props
// }) => {
//   const ref = useRef(null);
//   const padding = Math.max(6, size * 0.2);
//   const defaultMouseX = useMotionValue(Infinity);

//   const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
//     return val - bounds.x - bounds.width / 2;
//   });

//   const targetSize = disableMagnification ? size : magnification;

//   const sizeTransform = useTransform(
//     distanceCalc,
//     [-distance, 0, distance],
//     [size, targetSize, size],
//   );

//   const scaleSize = useSpring(sizeTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: scaleSize, height: scaleSize, padding }}
//       className={cn(
//         "flex aspect-square cursor-pointer items-center justify-center rounded-full",
//         disableMagnification && "hover:bg-muted-foreground transition-colors",
//         className,
//       )}
//       {...props}
//     >
//       <div>{children}</div>
//     </motion.div>
//   );
// };

// DockIcon.displayName = "DockIcon";

// export { Dock, DockIcon, dockVariants };

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/* ---------------- constants ---------------- */
const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 64;
const DEFAULT_DISTANCE = 140;

/* ---------------- Dock ---------------- */
const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      orientation = "horizontal", // "horizontal" | "vertical"
      ...props
    },
    ref,
  ) => {
    const mousePos = useMotionValue(Infinity);

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) =>
          mousePos.set(orientation === "vertical" ? e.pageY : e.pageX)
        }
        onMouseLeave={() => mousePos.set(Infinity)}
        className={cn(
          "flex rounded-2xl border backdrop-blur-md sm:gap-2 sm:p-2",
          orientation === "horizontal"
            ? "h-[64px] flex-row items-center"
            : "w-[58px] flex-col items-center",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === DockIcon) {
            return React.cloneElement(child, {
              mousePos,
              orientation,
              size: iconSize,
              magnification: iconMagnification,
              distance: iconDistance,
            });
          }
          return child;
        })}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

/* ---------------- DockIcon ---------------- */
const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousePos,
  orientation,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);

  const safeMagnification = Math.max(size, magnification);
  const padding = Math.max(6, size * 0.2);

  // فاصله آیکن تا موس
  const distanceCalc = useTransform(mousePos, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    return orientation === "vertical"
      ? val - bounds.y - bounds.height / 2
      : val - bounds.x - bounds.width / 2;
  });

  // ⭐️ MAGNIFICATION CORRECT (CLAMPED)
  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, safeMagnification, size],
    { clamp: true },
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: scaleSize,
        height: scaleSize,
        // padding,
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center sm:w-full">
        {children}
      </div>
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
