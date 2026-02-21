import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CustomScrollbar from "../components/ui/CustomScroll";

import telegram from "@/assets/social/telegram.png";
import instagram from "@/assets/social/instagram.png";
import phone from "@/assets/social/phone.png";

import { Pointer } from "../components/ui/pointer";
import Button from "../components/ui/Button";
import heart from "@/assets/heart.png";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_3k7y50a",
        "template_1dwtz1q",
        form.current,
        "NPdeUUzKOEI6zvMob",
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        },
      );
  };

  return (
    /* 🔴 ارتفاع اصلی dvh به اسکرول‌بار داده شد تا کل صفحه را پوشش دهد */
    <CustomScrollbar className="h-dvh w-full">
      <div className="font-display grid min-h-dvh w-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-6 md:px-12 lg:px-24">
        {/* هدر صفحه */}
        <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-12 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-16 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
          <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            ارتباط با ما
          </span>
          <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
            حرف بزنیم!؟
          </h2>
        </div>

        {/* بخش محتوای تماس */}
        {/* 🔴 h-full و overflow-y-auto حذف شد تا با CustomScrollbar تداخل پیدا نکند */}
        <div className="mx-auto w-full">
          <div className="grid gap-8 pb-32 lg:gap-12 xl:grid-cols-2">
            {/* ستون راست: اطلاعات تماس */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-2 md:gap-4 xl:h-full xl:justify-between"
            >
              <p className="text-justify text-base leading-relaxed font-semibold text-black md:mt-4 md:text-lg lg:text-xl xl:text-2xl dark:text-white">
                برای شروع همکاری، مشاوره رایگان یا فقط یه گپ دوستانه، می‌تونین
                از طریق فرم روبه‌رو یا راهای ارتباطی زیر با تیم هشتگ در تماس
                باشید. همیشه خوشحال میشیم صدای یه کارفرمای جدیدو بشنویم!
              </p>

              <div className="mt-4 flex flex-col gap-4 xl:gap-6">
                <a
                  href="https://t.me/TheMatiow"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <img
                    src={telegram}
                    alt="telegram"
                    className="w-8 lg:w-10 xl:w-12 dark:invert"
                  />
                  <div className="md:flex md:w-full md:items-center md:justify-between">
                    <h4 className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      تلگرام
                    </h4>
                    <p
                      className="mt-1 text-base font-extrabold text-black lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white"
                      style={{ direction: "ltr" }}
                    >
                      @TheMatiow
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/hashtagteam.ir"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-8 lg:w-10 xl:w-12 dark:invert"
                  />
                  <div className="md:flex md:w-full md:items-center md:justify-between">
                    <h4 className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      اینستاگرام
                    </h4>
                    <p
                      className="mt-1 text-base font-extrabold text-black lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white"
                      style={{ direction: "ltr" }}
                    >
                      @hashtagteam.ir
                    </p>
                  </div>
                </a>

                <div className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                  <img
                    src={phone}
                    alt="phone"
                    className="w-8 self-start lg:w-10 xl:w-12 dark:invert"
                  />
                  <div className="md:flex md:w-full md:items-center md:justify-between">
                    <h4 className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      شماره تماس
                    </h4>
                    <div
                      className="mt-1 flex gap-6 text-base font-black text-black tabular-nums lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white"
                      style={{ direction: "ltr" }}
                    >
                      <a href="tel:+989305351884">۰۹۳۰۵۳۵۱۸۸۴</a>
                      <a href="tel:+989034718210">۰۹۰۳۴۷۱۸۲۱۰</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ستون چپ: فرم تماس */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-5 rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-md md:p-8 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="مثلا: علی محمدی"
                    className="focus:border-p400 focus:ring-p400/20 w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                    شماره / ایمیل
                  </label>
                  <input
                    type="text"
                    name="user_contact"
                    required
                    placeholder="0912... یا email@..."
                    className="focus:border-p400 focus:ring-p400/20 w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                    توضیحات پروژه شما
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="کمی درباره ایده، نیازمندی‌ها و هدفتون برامون بنویسید..."
                    className="focus:border-p400 focus:ring-p400/20 w-full resize-none rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                  ></textarea>
                </div>

                <Pointer
                  className="relative z-50 block w-full sm:w-auto"
                  title={
                    <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                      <span className="text-xl">
                        {status === "sending" ? (
                          "⏳"
                        ) : status === "success" ? (
                          "✅"
                        ) : (
                          <img src={heart} alt="🔥" className="w-8" />
                        )}
                      </span>
                    </div>
                  }
                >
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className={`se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap transition-all sm:h-auto md:text-2xl xl:px-12 2xl:text-3xl ${
                      status === "success"
                        ? "bg-green-500 hover:bg-green-600"
                        : ""
                    }`}
                  >
                    {status === "idle" && "ارسال پیام"}
                    {status === "sending" && "در حال ارسال..."}
                    {status === "success" && "ارسال شد!"}
                  </Button>
                </Pointer>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </CustomScrollbar>
  );
}
