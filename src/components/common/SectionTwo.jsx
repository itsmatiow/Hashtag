import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react"; // اگر استفاده نمیشه میتونی پاک کنی
import { Link } from "react-router-dom";
import proj from "@/assets/fire.png";
import { Pointer } from "../ui/pointer";
import Button from "../ui/Button";
import DragableCards from "../ui/DragableCards";
import { CardStack } from "../ui/card-stack";

import qalam from "@/assets/projects/fixsize/qalam.webp";
import cookp from "@/assets/projects/fixsize/cookp.webp";
import choobl from "@/assets/projects/fixsize/choobl.webp";
import movie from "@/assets/projects/fixsize/movie.webp";
import trip from "@/assets/projects/fixsize/trip.webp";

const baseClassName = "mx-auto w-full h-fit object-contain";

const CARDS = [
  {
    id: 0,
    name: "قلم",
    designation: "وبسایتی برای نویسندگان",
    content: <img src={qalam} alt="قلم" className={`${baseClassName} `} />,
  },
  {
    id: 1,
    name: "چوب لباسی",
    designation: "لباس، برای مدت کوتاه",
    content: (
      <img src={choobl} alt="چوب لباسی" className={`${baseClassName}`} />
    ),
  },
  {
    id: 2,
    name: "کوتور",
    designation: "رزرو تور، سریع و مطمئن",
    content: <img src={trip} alt="کوتور" className={`${baseClassName}`} />,
  },
  {
    id: 3,
    name: "مووی ریویو",
    designation: "جایی برای منتقدان فیلم",
    content: (
      <img src={movie} alt="مووی ریویو" className={`${baseClassName}`} />
    ),
  },
  {
    id: 4,
    name: "کوک پک",
    designation: "آشپز تو باش، موادش با ما",
    content: <img src={cookp} alt="کوک پک" className={`${baseClassName}`} />,
  },
];
export default function SectionTwo() {
  return (
    // کانتینر اصلی با چارچوب یکپارچه (Grid Layout)
    <div className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 sm:px-1 lg:px-24">
      {/* --- ردیف ۱: سرتیتر --- */}
      <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
        <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          درباره هشتگ
        </span>
        {/* تیتر یکپارچه شد تا دقیقاً مثل سکشن ۳ و ۴ رفتار کند */}
        <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
          خلق تجربه مهمه، نه کدنویسی!
        </h2>
      </div>

      {/* --- ردیف ۲: توضیحات --- */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 mb-0 flex w-full flex-1 flex-col items-center text-center sm:items-end sm:text-right"
      >
        {/* کلاس‌های متن دقیقاً هماهنگ با بقیه صفحات شد */}
        <p className="se:text-lg se:font-semibold se:px-4 se:mb-3 max-se:max-w-lg mb-2 px-2 text-justify text-sm font-medium text-black sm:text-base md:mx-20 md:mb-8 md:text-xl lg:mx-0 lg:mb-4 lg:px-0 lg:text-2xl lg:leading-10 dark:text-white">
          تفاوت هشتگ تو "نگاه" ماست. ما کدی می‌نویسیم که زنده باشه و طرحی
          می‌زنیم که نفس بکشه! <br className="max-sm:hidden lg:hidden" />
          نمونه‌های روبرو، مشتی از خروار این تفکر هستند.
        </p>
      </motion.div>

      {/* --- ردیف ۳: محتوای اصلی (کارت‌های پروژه‌ها) --- */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // پر کردن فضای خالی وسط با flex-1
        className="z-10 mb-2 flex w-full flex-1 flex-col items-center overflow-hidden text-center sm:items-end sm:text-right"
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* نمایش در موبایل */}
          <CardStack
            items={CARDS}
            // مارجین‌های عجیب حذف شدند تا خودش وسط فضا قرار بگیرد
            className="max-se:scale-110 flex sm:hidden"
          />
          {/* نمایش در دسکتاپ */}
          <DragableCards className="hidden h-full w-full sm:block" />
        </div>
      </motion.div>

      {/* --- ردیف ۴: دکمه فراخوان (CTA) --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // استایل کانتینر دکمه دقیقاً مثل سکشن ۳
        className="z-10 mb-22 flex w-full items-center justify-around text-nowrap sm:mt-8 sm:gap-4 md:justify-center md:gap-12 lg:mb-6"
      >
        {/* این صفحه فقط یک دکمه دارد */}
        <Link to="/projects" className="sm:flex-none">
          <Pointer
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={proj} alt="🔥" className="w-8" />
                </span>
              </div>
            }
          >
            <Button className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl">
              نمونه پروژه‌ها
            </Button>
          </Pointer>
        </Link>
      </motion.div>
    </div>
  );
}
