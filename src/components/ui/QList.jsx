"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// ایمپورت AnimatedList و AnimatedListItem جدید
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";

const initialNotifications = [
  {
    name: "q1",
    description: "بعد از تحویل، پشتیبانی دارید؟",
    color: "#00C9A7",
  },
  {
    name: "q2",
    description: "از چه تکنولوژی‌ای استفاده میشه؟",
    color: "#FFB800",
  },
  {
    name: "q3",
    description: "هزینه و زمان اجرا چقدره؟",
    color: "#FF3D71",
  },
  {
    name: "q4",
    description: "قبل از شروع، مشاوره هم دارید؟",
    color: "#1E86FF",
  },
  {
    name: "q5",
    description: "میشه وسط اجرا تغییرات بدم؟",
    color: "#8b5cf6",
  },
  {
    name: "q6",
    description: "پرداخت‌ها به چه صورته؟",
    color: "#ec4899",
  },
  {
    name: "q7",
    description: "قابلیت توسعه در آینده وجود داره؟",
    color: "#f97316",
  },
];
// پیش‌بارگذاری عکس‌ها در مرورگر برای جلوگیری از ریکوئست‌های تکراری
if (typeof window !== "undefined") {
  initialNotifications.forEach((item) => {
    const img = new Image();
    img.src = `https://api.dicebear.com/9.x/micah/svg?seed=${item.name}`;
  });
}

const Notification = ({ description, color, name }) => {
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${name}`;

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl px-3 py-2 text-nowrap max-lg:max-w-100 lg:w-120 lg:px-6 xl:w-140 xl:px-8 xl:py-4 2xl:w-160",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "border border-black/20 bg-black/15 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] backdrop-blur-md dark:border-white/20 dark:bg-white/15",
        "transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 lg:gap-5 xl:gap-6">
        <div
          className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl md:size-16 xl:size-18 2xl:size-20"
          style={{ backgroundColor: color }} // رنگ پس‌زمینه رو نگه داشتم که با آواتار مچ بشه
        >
          <img
            src={avatarUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="se:text-base text-sm font-semibold text-black md:text-lg lg:text-xl dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function QList({ className }) {
  // ایندکس برای اینکه بدانیم نوبت کدام آیتم از آرایه اصلی است
  const [currentIndex, setCurrentIndex] = useState(0);

  // لیستی که الان در صفحه نمایش داده می‌شود
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);

      setActiveItems((prevItems) => {
        // ۱. تعیین تعداد آیتم بر اساس عرض صفحه
        let limit = 5; // حالت پیش‌فرض (دسکتاپ)
        if (window.innerWidth < 376) {
          limit = 5;
        }
        // اگر موبایل بود (کمتر از ۶۴۰ پیکسل) ۳ تا نشون بده
        else if (window.innerWidth < 640) {
          limit = 4;
        }
        // اگر تبلت بود (بین ۶۴۰ تا ۱۰۲۴) ۴ تا نشون بده
        else if (window.innerWidth < 1024) {
          limit = 5;
        } else if (window.innerWidth < 1280) {
          limit = 4;
        } else if (window.innerWidth < 1440) {
          limit = 5;
        } else if (window.innerWidth < 1536) {
          limit = 6;
        } else if (window.innerWidth <= 1920) {
          limit = 7;
        }

        const itemToAdd =
          initialNotifications[currentIndex % initialNotifications.length];

        // ۲. استفاده از متغیر limit داخل slice
        // اینطوری توی موبایل لیست کوتاه‌تر میشه و از پایین صفحه نمیزنه بیرون
        const newItems = [itemToAdd, ...prevItems].slice(0, limit);

        return newItems;
      });
    }, 1500); // سرعت (میلی‌ثانیه)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-start overflow-hidden pt-4",
        className,
      )}
    >
      <AnimatedList>
        {activeItems.map((item, idx) => (
          /* نکته حیاتی: 
             برای اینکه انیمیشن درست کار کند، Key باید کاملاً یکتا باشد.
             چون آیتم‌ها تکراری می‌شوند، از ترکیب currentIndex استفاده می‌کنیم
             تا ری‌اکت بفهمد این یک آیتم "جدید" است.
          */
          <AnimatedListItem key={`${item.description}-${currentIndex - idx}`}>
            <Notification {...item} />
          </AnimatedListItem>
        ))}
      </AnimatedList>

      {/* لایه محو شونده پایین */}
      {/* <div className="from-bg pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div> */}
    </div>
  );
}
