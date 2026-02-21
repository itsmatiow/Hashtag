import React from "react";
import lightlogo from "@/assets/logo/Logolight.svg";
import darklogo from "@/assets/logo/Logodark.svg";
import heart from "@/assets/heart.png";
import hand from "@/assets/handshake.png";
import Button from "../ui/Button";
import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "../ui/number-ticker";
import { Pointer } from "../ui/pointer";
import { Link } from "react-router-dom";

export default function HeroSection({ onAboutClick }) {
  return (
    // کانتینر اصلی با چارچوب یکپارچه گرید
    // نکته مهم: اینجا 1fr به ردیف اول (لوگو) اختصاص داده شده
    <main className="font-display grid h-dvh w-full grid-cols-1 grid-rows-[1fr_auto_auto_auto] px-6 sm:px-1 lg:px-24">
      {/* --- ردیف ۱: لوگو (این بخش 1fr است و فضای خالی رو پر میکنه) --- */}
      <div className="flex h-full w-full flex-col items-center justify-center pt-8">
        <img
          src={lightlogo}
          alt="هشتگ"
          className="pointer-events-none z-10 mx-auto block w-70 sm:w-110 md:w-130 dark:hidden"
        />
        <img
          src={darklogo}
          alt="هشتگ"
          className="pointer-events-none z-10 mx-auto hidden w-70 sm:w-110 md:w-130 dark:block"
        />
      </div>

      {/* --- ردیف ۲: تیتر اصلی --- */}
      <div className="z-10 flex w-full flex-col items-center justify-center pb-6 lg:pb-10">
        <h1 className="text-center text-2xl leading-12 font-black text-black sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
          طراحی مدرن،
          <br className="lg:hidden" /> توسعه‌ی هوشمند،{" "}
          <br className="lg:hidden" />
          <Highlighter
            action="highlight"
            iterations={2}
            isView={true}
            color="#FF0D62"
          >
            هشتگ؛
          </Highlighter>{" "}
          راهکار کامل وب!
        </h1>
      </div>

      {/* --- ردیف ۳: باکس شمارنده (Number Ticker) --- */}
      <div className="z-10 flex w-full flex-col items-center justify-center pb-8 lg:pb-10">
        <div className="flex w-84 flex-col items-start gap-4 rounded-2xl border-1 border-black/20 bg-black/15 px-4 py-4 backdrop-blur-md max-sm:h-24 sm:w-166 lg:w-200 xl:w-228 dark:border-white/20 dark:bg-white/15">
          <div className="my-auto w-full rounded-xl text-center text-base font-extrabold text-black sm:pt-1 sm:pb-2 lg:text-lg xl:text-2xl dark:text-white">
            <NumberTicker
              value={200}
              duration={17}
              showTextAfter={2500}
              text="ما توی هشتگ کارای کمتری قبول میکنیم؛ چون میخوایم بیشتر روشون کار کنیم..."
              unit="پروژه موفق"
            />
          </div>
        </div>
      </div>

      {/* --- ردیف ۴: دکمه‌ها --- */}
      <div className="z-10 mb-22 flex w-full items-center justify-around text-nowrap sm:gap-4 md:justify-center md:gap-12 lg:mb-6">
        {/* دکمه ۱ */}

        <div to="/workflow" className="sm:flex-none" onClick={onAboutClick}>
          <Pointer
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={heart} alt="❤️" className="w-8" />
                </span>
              </div>
            }
          >
            <Button className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl">
              درباره هشتگ
            </Button>
          </Pointer>
        </div>
        {/* دکمه ۲ */}
        <Link to="/contact" className="sm:flex-none">
          <Pointer
            className="relative z-50 flex w-full items-center justify-center sm:w-auto"
            title={
              <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="text-xl">
                  <img src={hand} alt="🤝" className="w-8" />
                </span>
              </div>
            }
          >
            <Button className="se:text-base h-fit w-full cursor-none text-sm font-bold whitespace-nowrap sm:h-auto sm:w-40 sm:px-6 md:w-fit md:text-2xl xl:px-12 2xl:text-3xl">
              شروع گفتگو
            </Button>
          </Pointer>
        </Link>
      </div>
    </main>
  );
}
