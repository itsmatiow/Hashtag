import React, { useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { RefreshCcw } from "lucide-react"; // اگر آیکون داری، وگرنه متن بذار
import qalam from "@/assets/projects/fixsize/qalam.webp";
import cookp from "@/assets/projects/fixsize/cookp.webp";
import choobl from "@/assets/projects/fixsize/choobl.webp";
import movie from "@/assets/projects/fixsize/movie.webp";
import trip from "@/assets/projects/fixsize/trip.webp";

export default function DragableCards({ className }) {
  const baseClassName = `absolute lg:w-[35%] lg:h-fit md:w-fit w-120`;

  // 1. استیت برای سیگنال ریست
  const [resetSignal, setResetSignal] = useState(0);

  const items = [
    {
      title: "قلم",
      // image: "../../assets/projects/qalam.png",
      image: qalam,
      className: `${baseClassName} md:top-10 lg:top-[0%] xl:left-[15%] lg:left-[30%] md:left-[25%] rotate-[-7deg]`,
    },
    {
      title: "کوک پک",
      image: cookp,
      className: `${baseClassName} md:top-5 lg:top-[5%] xl:left-[25%] lg:left-[30%] md:left-[10%] rotate-[8deg]`,
    },
    {
      title: "چوب لباسی",
      image: choobl,
      className: `${baseClassName} md:top-20 xl:top-[5%] xl:left-[45%] lg:left-[40%] lg:top-[10%] md:left-[30%] rotate-[12deg]`,
    },
    {
      title: "مووی ریویو",
      image: movie,
      className: `${baseClassName} md:top-5 lg:top-[5%] xl:left-[35%] lg:left-[45%] max-lg:left-[15%] rotate-[4deg]`,
    },
    {
      title: "تیریپ",
      image: trip,
      className: `${baseClassName} md:top-10 xl:left-[50%] lg:left-[57%] lg:top-[1%] lg:-translate-x-1/2 md:left-[2%] rotate-[-10deg]`,
    },
  ];

  return (
    <DraggableCardContainer
      className={`relative mx-auto mb-4 flex w-full items-center justify-center max-lg:w-[80%] md:h-100 lg:left-1/2 lg:h-[70%] lg:-translate-x-1/2 xl:mt-6 xl:h-[80%] 2xl:h-[60%] ${className}`}
    >
      {/* 2. دکمه ریست جایگزین متن قبلی */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => setResetSignal((prev) => prev + 1)}
          className="group right- flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-base font-extrabold text-neutral-600 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md active:scale-95 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
        >
          <RefreshCcw className="h-4 w-4 transition-transform group-hover:rotate-180" />
          <span>برگردون سر جاشون!</span>
        </button>
      </div>

      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={item.className}
          // 3. پاس دادن سیگنال به فرزندان
          resetSignal={resetSignal}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-40 w-78 rounded-xl object-cover md:h-fit md:w-100 lg:w-full xl:h-full xl:w-full"
          />
          <h3 className="mt-6 text-center text-2xl font-black text-black lg:text-xl dark:text-white">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
