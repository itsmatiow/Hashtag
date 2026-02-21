import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";

import hashtag from "@/assets/hashtag.png";
import list from "@/assets/projects.png";
import journey from "@/assets/journey.png";
import contact from "@/assets/contact.png";
import question from "@/assets/question.png";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: hashtag, label: "خانه", path: "/" },
  { icon: list, label: "نمونه‌کار", path: "/projects" },
  { icon: journey, label: "روند‌کار", path: "/workflow" },
  { icon: question, label: "سوالات", path: "/faq" },
  { icon: contact, label: "تماس", path: "/contact" },
];
export default function DockBarMobile() {
  return (
    // <div className="font-display fixed right-0 bottom-4 left-0 z-50 flex">
    <div className="font-display fixed bottom-0 left-1/2 z-50 flex -translate-x-1/2 transform items-center">
      {/* // <div className="font-display fixed bottom-4 left-1/2 z-50 flex w-max max-w-[90vw] -translate-x-1/2 transform justify-center"> */}
      <Dock
        // ۱. سایز کلی دکمه رو بزرگتر کردم تا متن جا بشه
        iconSize={60}
        // ۲. بزرگنمایی رو توی موبایل معمولا کمتر یا صفر میکنن که با تاچ به هم نریزه
        iconMagnification={0}
        distance={100}
        className="border-1 border-black/20 bg-black/15 px-2 py-4 backdrop-blur-md dark:border-white/20 dark:bg-white/15"
      >
        {dockItems.map((item, index) => (
          <DockIcon
            key={index}
            className="flex flex-col items-center justify-end"
          >
            <Link
              to={item.path}
              onClick={() => {
                // بررسی می‌کنیم که آیا کاربر روی هشتگ (خانه) کلیک کرده و همین الان هم تو صفحه خانه هست یا نه
                if (item.path === "/" && window.location.pathname === "/") {
                  // یک پیام سراسری به کل سایت می‌فرستیم
                  window.dispatchEvent(new CustomEvent("goHomeTop"));
                } else {
                  // برای صفحات دیگه، وقتی کلیک شد اسکرول عادی رو ببره بالا
                  window.scrollTo(0, 0);
                }
              }}
              // ۳. استفاده از فلکس ستونی برای قرارگیری متن زیر عکس
              className="flex h-full w-full flex-col items-center justify-center gap-1"
            >
              <img
                src={item.icon}
                alt={item.label}
                // ۴. سایز عکس رو کنترل کردم که کل فضا رو نگیره (مثلا ۶۰ درصد ارتفاع)
                className="h-3/5 w-3/5 object-contain invert-0 dark:invert"
              />

              {/* ۵. اضافه کردن متن با سایز کوچک */}
              <span className="text-[12px] leading-none font-extrabold whitespace-nowrap text-black dark:text-white">
                {item.label}
              </span>
            </Link>
          </DockIcon>
        ))}

        {/* دکمه تغییر تم */}
        <DockIcon className="flex flex-col items-center justify-end">
          <div className="flex h-full w-full flex-col items-center justify-center gap-1">
            {/* کلاس wrapper برای تم تا سایزش رو کنترل کنیم */}
            <div className="flex h-3/5 w-3/5 items-center justify-center">
              <ThemeToggle />
            </div>
            <span className="text-[12px] leading-none font-extrabold whitespace-nowrap text-black dark:text-white">
              تغییر تم
            </span>
          </div>
        </DockIcon>
      </Dock>
    </div>
  );
}
