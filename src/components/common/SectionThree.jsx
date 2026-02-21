import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Pointer } from "../ui/pointer";
import Button from "../ui/Button";
import WorkflowCard from "../ui/WorkflowCard"; // کامپوننت کارت‌های روند کار
import laptop from "@/assets/laptop.png";

export default function SectionThree() {
  return (
    // کانتینر اصلی دقیقاً مشابه سکشن ۴ (Grid Layout)
    <div className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 sm:px-1 lg:px-24">
      {/* --- ردیف ۱: سرتیتر --- */}
      <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
        <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          روند کار هشتگ
        </span>
        <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
          ساختار و نتیجه استاندارد!
        </h2>
      </div>
      {/* --- ردیف ۲: توضیحات --- */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 mb-0 flex w-full flex-1 flex-col items-center text-center sm:items-end sm:text-right"
      >
        <p className="se:text-lg se:font-semibold se:px-4 se:mb-3 max-se:max-w-lg mb-2 px-2 text-justify text-sm font-medium text-black sm:text-base md:mx-20 md:mb-8 md:text-xl lg:mx-0 lg:mb-4 lg:px-0 lg:text-2xl lg:leading-10 dark:text-white">
          خروجی تمیز، نتیجه‌ی نقشه‌ی راه دقیقه! ما از استانداردای مدرن استفاده
          می‌کنیم تا ایده شما به یه تجربه بی‌نقص تبدیل شه...
        </p>
      </motion.div>
      {/* --- ردیف ۳: کارت‌های روند کار (جایگزین QList) --- */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // استفاده از کلاس‌های سکشن ۴ برای پر کردن فضای خالی
        className="z-10 mb-2 flex w-full flex-1 flex-col items-center overflow-hidden text-center sm:items-end sm:text-right"
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* گرید کارت‌ها */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
            <WorkflowCard
              title={"آنالیز"}
              content={"بررسی نیازهای پروژه"}
              index={"۱"}
            />
            <WorkflowCard
              title={"دیزاین"}
              content={"خلق طراحی کاربرپسند"}
              index={"۲"}
            />
            <WorkflowCard
              title={"توسعه"}
              content={"تزریق کد و پیاده‌سازی"}
              index={"۳"}
            />
            <WorkflowCard
              title={"انتشار"}
              content={"تضمین کیفیت و انتشار"}
              index={"۴"}
            />
          </div>
        </div>
      </motion.div>
      {/* --- ردیف ۴: دکمه‌ها --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 mb-22 flex w-full items-center justify-around text-nowrap sm:mt-8 sm:gap-4 md:justify-center md:gap-12 lg:mb-6"
      >
        {/* دکمه ۱ */}
        <Link to="/workflow" className="sm:flex-none">
          <Pointer
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={laptop} alt="💻" className="w-8" />
                </span>
              </div>
            }
          >
            <Button className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl">
              جزئیات روند اجرا
            </Button>
          </Pointer>
        </Link>
      </motion.div>
    </div>
  );
}
