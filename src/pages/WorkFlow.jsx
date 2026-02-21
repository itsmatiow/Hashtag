import React from "react";
import { motion } from "framer-motion";
import CustomScrollbar from "../components/ui/CustomScroll"; // آدرسش رو چک کن

// دیتای مراحل کار (همون متن‌های کوتاه و رسمی)
const steps = [
  {
    id: "۱",
    title: "نیازسنجی و برنامه‌ریزی",
    description:
      "توی یه جلسه، اهداف کسب‌وکار و نیازای مخاطب شما رو دقیق بررسی می‌کنیم تا ساختار و مسیر روشنی برای توسعه پروژه تعریف بشه.",
  },
  {
    id: "۲",
    title: "طراحی رابط کاربری",
    description:
      "نمای ظاهری و تجربه کاربری سایت به صورت گرافیکی طراحی می‌شه. فقط بعد از تایید ۱۰۰ درصدی شما روی طرح‌، وارد فاز برنامه‌نویسی می‌شیم.",
  },
  {
    id: "۳",
    title: "توسعه و برنامه‌نویسی",
    description:
      "طرحای تایید شده با استفاده از تکنولوژی‌های مدرن، تبدیل به یه وب‌سایت واقعی، سریع و تعاملی می‌شه. تو این مرحله شما در جریان پیشرفت کدنویسی قرار می‌گیرین.",
  },
  {
    id: "۴",
    title: "تست و کنترل کیفیت",
    description:
      "عملکرد سایت روی دستگاها و مرورگرای مختلف بررسی می‌شه تا از سرعت بالا و نبودن هیچ مدل باگی مطمئن شیم.",
  },
  {
    id: "۵",
    title: "راه‌اندازی و پشتیبانی",
    description:
      "وب‌سایت روی دامنه اصلی شما منتشر می‌شه. بعد از تحویل، برای آموزش مدیریت سایت و رفع مشکلای احتمالی کنار شما میمونیم.",
  },
];

export default function WorkFlow() {
  return (
    // اینجا کامپوننت اسکرول‌بار کاستوم خودت رو صدا زدیم تا استایل‌ها حفظ بشه
    <CustomScrollbar>
      <div className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 sm:px-1 lg:px-24">
        {/* هدر صفحه */}
        <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
          <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            روند اجرا
          </span>
          {/* تیتر یکپارچه شد تا دقیقاً مثل سکشن ۳ و ۴ رفتار کند */}
          <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
            همه‌چیز روی اصوله!
          </h2>
        </div>

        {/* بخش تایم‌لاین */}
        {/* <div className="relative mx-auto w-full max-w-4xl"> */}
        {/* بخش تایم‌لاین */}
        {/* h-full overflow-y-auto باعث میشه خودش اسکرول بخوره. pb-40 اون فضای خالی رو برای داک‌بار میسازه */}
        {/* بخش تایم‌لاین */}
        <div className="relative mx-auto mt-6 h-full w-full max-w-4xl overflow-y-auto pb-26 [&::-webkit-scrollbar]:hidden">
          <div className="relative h-max w-full">
            {/* 🔴 خط یکپارچه قبلی از اینجا حذف شد 🔴 */}

            {/* 🔴 gap-12 رو برداشتیم چون فاصله‌ها رو با padding مدیریت می‌کنیم 🔴 */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                // 🔴 لایه ثابت بیرونی: این لایه تکون نمی‌خوره و فقط خط‌ها رو تو خودش نگه می‌داره
                <div key={index} className="relative w-full pb-6 last:pb-0">
                  {/* 🟢 خط اتصال ثابت: چون بیرون از motion هست، تیکه‌تیکه نمیشه و کاملاً یکپارچه می‌مونه */}
                  {index !== steps.length - 1 && (
                    <div className="bg-p900/40 absolute top-4 right-4.5 -bottom-2 z-0 w-1 md:right-7"></div>
                  )}

                  {/* 🔵 لایه متحرک: فقط دایره و کارت میان روی خط می‌شینن */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex w-full items-start gap-4 pr-14 md:gap-10 md:pr-20"
                  >
                    {/* دایره شماره مرحله */}
                    <div className="bg-p400 absolute top-2 right-0 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-3 border-white shadow-lg md:h-14 md:w-14 dark:border-black">
                      <span className="text-base font-black text-black md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        {step.id}
                      </span>
                    </div>

                    {/* کارت محتوای مرحله */}
                    <div className="flex w-full flex-col gap-4 rounded-2xl border border-black/10 bg-black/5 px-5 py-3 backdrop-blur-md transition-colors md:p-8 dark:border-white/10 dark:bg-white/5">
                      <h3 className="text-lg font-extrabold text-nowrap text-black md:text-xl xl:text-2xl 2xl:text-3xl dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-justify text-sm font-semibold text-black/80 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white/80">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomScrollbar>
  );
}
