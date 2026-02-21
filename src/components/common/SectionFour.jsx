import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Pointer } from "../ui/pointer";
import Button from "../ui/Button";
import hand from "@/assets/handshake.png";
import qmark from "@/assets/qmark.png";
import QList from "../ui/QList";

export default function SectionFour() {
  return (
    <div className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 sm:px-1 lg:px-24">
      <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
        <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          سوالات متداول
        </span>
        <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
          جوابت پیش ماست!
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 mb-0 flex w-full flex-1 flex-col items-center text-center sm:items-end sm:text-right"
      >
        <p className="se:text-lg se:font-semibold se:px-4 se:mb-3 max-se:max-w-lg mb-2 px-2 text-justify text-sm font-medium text-black sm:text-base md:mx-20 md:mb-8 md:text-xl lg:mx-0 lg:mb-4 lg:px-0 lg:text-2xl lg:leading-10 dark:text-white">
          شروع یه همکاری همیشه پر از سواله. ما سعی کردیم جواب همه چیزو بدیم ولی
          اگر جوابتونو پیدا نکردید، همچنان می‌تونید با ما در ارتباط باشید...
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // این motion.div خودش flex-1 دارد، پس ارتفاع دارد.
        className="z-10 mb-2 flex w-full flex-1 flex-col items-center overflow-hidden text-center sm:items-end sm:text-right"
      >
        {/* اصلاح مهم اینجاست: 
            ۱. حذف w-fit و جایگزینی با w-full
            ۲. اضافه کردن h-full برای پر کردن فضای motion.div
            ۳. حذف مارجین‌های عجیب (mb-3, sm:mb-20) که ارتفاع را می‌خوردند.
               به جای مارجین، از justify-center یا gap در پدر استفاده کن یا padding داخلی بده.
        */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* حالا QList مجبور است در این کادر جا شود */}
          <QList className="max-w-md md:max-w-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // ۱. در موبایل flex-row (افقی) و gap-2 (فاصله کم) باشد
        className="z-10 mb-20 flex w-full items-center justify-around text-nowrap sm:mt-8 sm:gap-4 md:justify-center md:gap-12 lg:mb-6"
      >
        {/* دکمه ۱ */}
        <Link to="/faq" className="sm:flex-none">
          <Pointer
            // ۲. در موبایل عرض کامل (w-full) بگیرد تا فضای flex-1 را پر کند
            // در دسکتاپ همان w-auto یا w-fit باشد
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={qmark} alt="❓" className="w-8" />
                </span>
              </div>
            }
          >
            <Button
              // ۳. تغییرات حیاتی برای جا شدن در موبایل:
              // text-[11px]: فونت کوچک
              // px-0 یا px-1: پدینگ خیلی کم
              // h-10: ارتفاع متناسب
              // w-full: پر کردن عرض پوینتر
              className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl"
            >
              سوال داری؟
            </Button>
          </Pointer>
        </Link>

        {/* دکمه ۲ */}
        <Link to="/contact" className="sm:flex-none">
          <Pointer
            // ۲. در موبایل عرض کامل (w-full) بگیرد تا فضای flex-1 را پر کند
            // در دسکتاپ همان w-auto یا w-fit باشد
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={hand} alt="🤝" className="w-8" />
                </span>
              </div>
            }
          >
            <Button
              // ۳. تغییرات حیاتی برای جا شدن در موبایل:
              // text-[11px]: فونت کوچک
              // px-0 یا px-1: پدینگ خیلی کم
              // h-10: ارتفاع متناسب
              // w-full: پر کردن عرض پوینتر
              className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl"
            >
              شروع گفتگو
            </Button>
          </Pointer>
        </Link>
      </motion.div>
    </div>
  );
}
