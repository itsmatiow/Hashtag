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
  // استیت برای مدیریت دکمه (حالت‌های: idle, sending, success, error)
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // پارامترها: Service ID, Template ID, Form Ref, Public Key
    emailjs
      .sendForm(
        "service_3k7y50a", // 👈 اینو بعداً جایگزین می‌کنیم
        "template_1dwtz1q", // 👈 اینو بعداً جایگزین می‌کنیم
        form.current,
        "NPdeUUzKOEI6zvMob", // 👈 اینو بعداً جایگزین می‌کنیم
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset(); // فرم رو بعد از ارسال موفق خالی می‌کنه

          // بعد از ۳ ثانیه دکمه برمی‌گرده به حالت اول
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
    <CustomScrollbar>
      <div className="font-display flex w-full flex-col px-6 md:px-12 lg:px-24">
        {/* هدر صفحه (مثل قبل) */}
        <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-12 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-16 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
          <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            ارتباط با ما
          </span>
          <h2 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
            حرف بزنیم!؟
          </h2>
        </div>

        {/* بخش محتوای تماس */}
        <div className="mx-auto h-full w-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="grid gap-8 pb-20 lg:gap-12 xl:grid-cols-2">
            {/* ستون راست: اطلاعات تماس (مثل قبل) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-2 md:gap-4 xl:h-full xl:justify-between"
            >
              <p className="text-justify text-base leading-relaxed font-semibold text-black md:mt-4 md:text-lg lg:text-xl xl:text-2xl dark:text-white">
                برای شروع همکاری، مشاوره رایگان یا فقط یه گپ دوستانه، می‌تونین
                از طریق فرم روبه‌رو یا راهای ارتباطی زیر با تیم هشتگ در تماس
                باشید.
              </p>

              <div className="mt-4 flex flex-col gap-4 xl:gap-6">
                <a
                  href="https://t.me/TheMatiow"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 text-black transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white"> */}
                  <img
                    src={telegram}
                    alt="telegram"
                    className="w-8 lg:w-10 xl:w-12 dark:invert"
                  />
                  {/* </div> */}
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
                  href="https://instagram.com/hashtagteam.ir" // آیدی خودت رو اینجا بذار
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 text-black transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white"> */}
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-8 lg:w-10 xl:w-12 dark:invert"
                  />
                  {/* </div> */}
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
                <a
                  href="tel:+989305351884" // شماره‌ت رو با +98 اینجا بنویس
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 text-black transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white"> */}
                  <img
                    src={phone}
                    alt="phone"
                    className="w-8 lg:w-10 xl:w-12 dark:invert"
                  />
                  {/* </div> */}
                  <div className="md:flex md:w-full md:items-center md:justify-between">
                    <h4 className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      شماره تماس
                    </h4>
                    <p
                      className="mt-1 text-base font-black text-black tabular-nums lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white"
                      style={{ direction: "ltr" }}
                    >
                      ۰۹۳۰-۵۳۵-۱۸۸۴
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* 🔴 ستون چپ: فرم تماس (آپدیت شده برای EmailJS) 🔴 */}
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
                <div className="grid grid-cols-1 gap-5 md:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="user_name" // 👈 الزامی برای EmailJS
                      required
                      placeholder="مثلا: علی محمدی"
                      className="focus:border-p400 focus:ring-p400/20 w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none placeholder:text-neutral-500 focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                      شماره / ایمیل
                    </label>
                    <input
                      type="text"
                      name="user_contact" // 👈 الزامی برای EmailJS
                      required
                      placeholder="باهاتون تماس میگیریم..."
                      className="focus:border-p400 focus:ring-p400/20 w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none placeholder:text-neutral-500 focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-black max-md:hidden lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white">
                    توضیحات پروژه شما
                  </label>
                  <textarea
                    name="message" // 👈 الزامی برای EmailJS
                    required
                    rows="5"
                    placeholder="کمی درباره ایده، نیازمندی‌ها و هدفتون برامون بنویسید..."
                    className="focus:border-p400 focus:ring-p400/20 w-full resize-none rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold text-black transition-all outline-none placeholder:text-neutral-500 focus:ring-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:border-white/10 dark:bg-black/20 dark:text-white"
                  ></textarea>
                </div>

                {/* دکمه ارسال هوشمند */}
                <Pointer
                  className="relative z-50 block w-full sm:w-auto"
                  title={
                    <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                      <span className="text-xl">
                        {/* اگر در حال ارسال بود آیکون ساعت، اگر موفق بود تیک، و در حالت عادی قلب/آتش */}
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
                    type="submit" // 🔴 حتماً تایپ سابمیت باشه
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
