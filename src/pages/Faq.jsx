import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomScrollbar from "../components/ui/CustomScroll";

// دیتای سوالات (سوالات شما + ۳ سوال تکمیلی + متن تمپلیت)
const faqs = [
  {
    question: "قبل از شروع، مشاوره هم دارید؟",
    answer:
      "بله، ما قبل از شروع پروژه، یه جلسه مشاوره رایگان داریم تا نیازا و اهداف شما رو دقیق بررسی کنیم و بهترین راه‌حلو پیشنهاد بدیم.",
  },
  {
    question: "هزینه و زمان اجرا چقدره؟",
    answer:
      "هزینه و زمان اجرا بستگی به پیچیدگی پروژه شما داره. بعد از جلسه نیازسنجی و بررسی دقیق نیازا، یه پروپوزال کامل شامل زمان‌بندی و هزینه‌ها به شما ارائه می‌کنیم تا با خیال راحت تصمیم بگیرین.",
  },
  {
    question: "پرداخت‌ها به چه صورته؟",
    answer:
      "معمولاً پرداختا به صورت مرحله‌ای و بر اساس پیشرفت پروژه انجام میشه. بعد از تایید پروپوزال و با توجه به بودجه، یه برنامه پرداخت مشخص می‌کنیم که شامل پیش‌پرداخت، پرداختای میانی و تسویه نهایی باشه.",
  },
  {
    question: "از چه تکنولوژی‌ای استفاده میشه؟",
    answer:
      "ما توی هشتگ از تکنولوژیای مدرنی مثل React، Tailwind، Redux، React Router، Node.js، Django، MySQL، PostgreSQL  و ... استفاده می‌کنیم. البته انتخاب تکنولوژی دقیقاً بستگی به نیازای پروژه شما داره که تو جلسه نیازسنجی بررسی می‌کنیم.",
  },
  {
    question: "اگه از طرح گرافیکی اولیه خوشم نیومد چی؟",
    answer:
      "ما قبل از شروع برنامه‌نویسی، طرح گرافیکیو به شما ارائه می‌کنیم و فقط بعد از تایید ۱۰۰ درصدی شما روی طرح، وارد فاز برنامه‌نویسی می‌شیم. اینطوری مطمئن می‌شیم که طرح نهایی دقیقاً همونیه که شما دوست دارین.",
  },
  {
    question: "میشه وسط اجرا تغییرات بدم؟",
    answer:
      "بله، تغییرات جزئی در طول پروژه قابل انجامه. اما تغییرات اساسی تو ساختار که خارج از پروپوزال تایید شده باشن نیازمند بررسی زمان و هزینه مجدده.",
  },
  {
    question: "آیا سایت‌های قدیمی رو هم بازطراحی می‌کنید؟",
    answer:
      "بله، اگه سایت فعلیتون نیاز به ظاهری مدرن‌تر داره یا از نظر فنی کند شده، ما می‌تونیم با حفظ دیتای قبلی، ظاهر و ساختارش رو با تکنولوژیای روز از پایه بازطراحی کنیم.",
  },
  {
    question: "آیا دامنه و هاست رو هم خودتون تهیه می‌کنید؟",
    answer:
      "در صورت تمایل شما، دامنه و هاست رو هم خودمون تهیه می‌کنیم. اما اگر شما از قبل دامنه و هاست داشته باشید، ما می‌تونیم روی اون‌ها هم کار کنیم و سایت رو راه‌اندازی کنیم.",
  },
  {
    question: "سورس کد پروژه در اختیار خودم قرار می‌گیره؟",
    answer:
      "بله، بعد از تحویل پروژه، تمام سورس کد و مستندات مربوطه در اختیار شما قرار می‌گیره تا هر زمان که خواستین بتونین بهش دسترسی داشته باشین یا حتی توسعه بدین.",
  },
  {
    question: "بعد از تحویل، پشتیبانی دارید؟",
    answer:
      "بله، بعد از تحویل پروژه، ما یک دوره پشتیبانی رایگان ۳ ماهه ارائه می‌دهیم تا هرگونه مشکل را برطرف کنیم.",
  },

  {
    question: "قابلیت توسعه در آینده وجود داره؟",
    answer:
      "بله، ما همیشه سعی می‌کنیم پروژه‌ها رو جوری طراحی کنیم که قابلیت توسعه و افزودن ویژگیای جدید در آینده رو داشته باشه.",
  },
];
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <CustomScrollbar>
      <div className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 sm:px-1 lg:px-24">
        {/* هدر صفحه */}
        <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
          <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            سوالات متداول
          </span>
          {/* تیتر یکپارچه شد تا دقیقاً مثل سکشن ۳ و ۴ رفتار کند */}
          <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
            جوابش پیش ماست!
          </h2>
        </div>

        {/* بخش لیست آکاردئون */}
        <div className="mx-auto h-full w-full max-w-4xl overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-4 pb-12">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-black/5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/5"
                >
                  {/* دکمه سوال */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-right transition-colors hover:bg-black/5 md:px-8 md:py-6 dark:hover:bg-white/5"
                  >
                    <h3 className="text-base font-extrabold text-black md:text-lg lg:text-xl dark:text-white">
                      {faq.question}
                    </h3>

                    {/* آیکون فلش */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* جواب (با انیمیشن ارتفاع) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-black/5 px-5 pt-4 pb-6 md:px-8 dark:border-white/5">
                          <p className="text-justify text-sm leading-relaxed font-semibold text-black/80 md:text-base lg:text-lg dark:text-white/80">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CustomScrollbar>
  );
}
