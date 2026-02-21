import React from "react";
import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  text = "مشاهده",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group d relative cursor-pointer overflow-hidden rounded-full bg-white",
        className,
      )}
      {...props}
    >
      {/* 🔴 تغییر مهم: دایره‌ای که از سایز 0 (scale-0) شروع میشه و با هاور بزرگ میشه */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full scale-0 rounded-full bg-black transition-transform duration-500 group-hover:scale-[2.5]"></div>
      </div>

      {/* لایه محتوا */}
      <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden">
        {/* لایه اول: عکسِ فلش */}
        <div className="flex items-center justify-center transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0">
          <div className="transition-all duration-300 group-hover:invert dark:group-hover:invert-0">
            {children}
          </div>
        </div>

        {/* لایه دوم: متن "مشاهده" */}
        <div className="absolute flex h-full w-full translate-x-12 items-center justify-center text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:text-base">
          <span>{text}</span>
        </div>
      </div>
    </button>
  );
}
