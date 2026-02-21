import React from "react";

export default function WorkflowCard({ title, content, index }) {
  return (
    /* بخش Parent با Perspective برای ایجاد عمق سه بعدی */
    <div className="w-40 p-2 perspective-[1000px] md:w-70 md:p-5 lg:w-45 xl:w-67 2xl:w-90">
      {/* بخش Card: ظرف اصلی با استایل سه بعدی و بک‌گراند پیچیده */}
      <div className="group border-p600 bg-bg relative rounded-xl border bg-[linear-gradient(135deg,#0000_18.75%,#ffffff_0_31.25%,#0000_0),repeating-linear-gradient(45deg,#ffffff_-6.25%_6.25%,#0087a4_0_18.75%)] bg-size-[60px_60px] bg-position-[0_0,0_0] pt-10 transition-all duration-500 ease-in-out transform-3d hover:transform-[rotate3d(0.5,1,0,25deg)] hover:bg-position-[-100px_100px,-100px_100px] md:pt-18 lg:pt-12 xl:pt-18">
        {/* shadow-[rgba(142,142,142,0.3)_0px_30px_30px_-10px] */}
        <div className="absolute inset-0 rounded-xl bg-black/15 backdrop-blur-[3px] xl:backdrop-blur-[4px] dark:bg-white/25"></div>

        {/* Content Box */}
        <div className="from-p800 via-p700 to-p600 z-20 flex flex-col items-center rounded-xl bg-linear-to-tl from-20% via-90% pt-5 pb-4 shadow-[inset_2px_2px_16px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 ease-in-out transform-3d md:pt-12 md:pb-8 lg:pt-12 lg:pb-16">
          {/* Card Title */}
          <span className="transform-[translate3d(0,0,50px)] text-xl font-black text-black transition-all duration-500 ease-in-out group-hover:transform-[translate3d(0,0,60px)] md:text-2xl max-xl:lg:-rotate-45 max-xl:lg:pt-4 max-xl:lg:pr-3 max-xl:lg:pb-3 xl:text-3xl 2xl:text-4xl dark:text-white">
            {title}
          </span>

          {/* Card Content */}
          <p className="mt-3 transform-[translate3d(0,0,30px)] text-xs font-extrabold text-nowrap text-black transition-all duration-500 ease-in-out group-hover:transform-[translate3d(0,0,60px)] md:mt-4 md:text-base max-xl:lg:-rotate-45 max-xl:lg:pt-6 max-xl:lg:pr-4 max-xl:lg:pb-4 xl:mt-8 xl:text-lg 2xl:text-xl dark:text-white">
            {content}
          </p>
        </div>

        {/* Date Box: بخش تاریخ که در فضای سه بعدی جلوتر قرار می‌گیرد */}
        <div className="bg-accent absolute top-3 right-3 flex h-10 w-10 transform-[translate3d(0,0,80px)] items-center justify-center rounded-lg border-2 border-black p-2.5 shadow-[rgba(100,100,111,0.2)_0px_17px_10px_-10px] md:top-8 md:right-6 md:h-16 md:w-16 lg:top-6 lg:right-4 lg:border-2 xl:top-8 xl:right-6 xl:border-3">
          <span className="block text-center text-2xl font-black text-black md:text-3xl">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}
