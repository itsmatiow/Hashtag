// import React from "react";
// import moon from "@/assets/moon.png";
// import sun from "@/assets/sun.png";
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "@/hooks/useTheme"; // آدرس هوک رو چک کن

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div
//       role="button"
//       onClick={toggleTheme}
//       className="cursor-pointer"
//       aria-label="Toggle Theme"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         {theme === "light" ? (
//           <motion.div
//             key="sun"
//             initial={{ x: 20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -20, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <img src={sun} alt="sun" className="p-2 dark:invert" />

//             {/* <Sun className="text-p700 h-5 w-5" /> */}
//           </motion.div>
//         ) : (
//           <motion.div
//             key="moon"
//             initial={{ x: 20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -20, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <img src={moon} alt="moon" className="p-2 dark:invert" />
//             {/* <Moon className="text-p400 h-5 w-5" /> */}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
import React from "react";
import moon from "@/assets/moon.png";
import sun from "@/assets/sun.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      role="button"
      onClick={toggleTheme}
      className="flex h-full w-full cursor-pointer items-center justify-center"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-full w-full items-center justify-center"
          >
            <img
              src={sun}
              alt="sun"
              // 👇 تغییر اینجاست:
              // p-0: در موبایل پدینگ صفر (سایز بزرگ)
              // sm:p-2: در دسکتاپ پدینگ ۲ (سایز کنترل شده)
              className="h-full w-full object-contain p-0 lg:p-2 dark:invert"
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-full w-full items-center justify-center"
          >
            <img
              src={moon}
              alt="moon"
              // 👇 همان تغییر برای ماه
              className="h-full w-full object-contain p-0 lg:p-2 dark:invert"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
