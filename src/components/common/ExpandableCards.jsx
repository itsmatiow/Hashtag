import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import arrow from "@/assets/arrow.png";
import LazyImage from "@/components/ui/LazyImage";

// -------- ایمپورت عکس‌های اصلی پروژه‌ها --------
import qalam from "@/assets/projects/fixsize/qalam.webp";
import cookp from "@/assets/projects/fixsize/cookp.webp";
import choobl from "@/assets/projects/fixsize/choobl.webp";
import movie from "@/assets/projects/fixsize/movie.webp";

// -------- ایمپورت گالری‌ها --------
import qalam1 from "@/assets/projects/qalam/qalam-1.webp";
import qalam2 from "@/assets/projects/qalam/qalam-2.webp";
import qalam3 from "@/assets/projects/qalam/qalam-3.webp";
import qalam4 from "@/assets/projects/qalam/qalam-4.webp";
import qalam5 from "@/assets/projects/qalam/qalam-5.webp";

import cook1 from "@/assets/projects/cook/cook-1.webp";
import cook2 from "@/assets/projects/cook/cook-2.webp";
import cook3 from "@/assets/projects/cook/cook-3.webp";
import cook4 from "@/assets/projects/cook/cook-4.webp";
import cook5 from "@/assets/projects/cook/cook-5.webp";
import cook6 from "@/assets/projects/cook/cook-6.webp";

import ahl1 from "@/assets/projects/ahl/ahl-1.webp";
import ahl2 from "@/assets/projects/ahl/ahl-2.webp";
import ahl3 from "@/assets/projects/ahl/ahl-3.webp";

import as1 from "@/assets/projects/as/as-1.webp";
import as2 from "@/assets/projects/as/as-2.webp";
import as3 from "@/assets/projects/as/as-3.webp";

import choob1 from "@/assets/projects/choob/choob-1.webp";
import choob2 from "@/assets/projects/choob/choob-2.webp";
import choob3 from "@/assets/projects/choob/choob-3.webp";
import choob4 from "@/assets/projects/choob/choob-4.webp";

import fanoos1 from "@/assets/projects/fanoos/fanoos-1.webp";
import fanoos2 from "@/assets/projects/fanoos/fanoos-2.webp";

import movie1 from "@/assets/projects/movie/review-1.webp";
import movie2 from "@/assets/projects/movie/review-2.webp";
import movie3 from "@/assets/projects/movie/review-3.webp";
import movie4 from "@/assets/projects/movie/review-4.webp";

import restono1 from "@/assets/projects/restono/rest-1.webp";
import restono2 from "@/assets/projects/restono/rest-2.webp";
import restono3 from "@/assets/projects/restono/rest-3.webp";
import restono4 from "@/assets/projects/restono/rest-4.webp";

import world1 from "@/assets/projects/world/world-1.webp";
import world2 from "@/assets/projects/world/world-2.webp";

// -------- دیتای پروژه‌ها --------
const cards = [
  {
    title: "آس",
    description: "پلتفرم آزمون‌ساز و برگزاری امتحانات آنلاین",
    src: as1,
    gallery: [as1, as2, as3],
    features: [
      "React, Tailwind CSS, Vite",
      "Bot API, Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "امکان ایجاد سوالات چند گزینه‌ای",
      "زمان‌بندی دقیق آزمون‌ها و ارسال آنی کارنامه",
      "قابلیت تبدیل به ربات تلگرامی و ربات ایتا",
    ],
    text: " آس یک پلتفرم آزمون‌ساز و برگزاری امتحانات آنلاین است که با ارائه ابزارهای متنوع و رابط کاربری ساده، به معلمان و دانش‌آموزان کمک می‌کند تا فرآیند آموزش و ارزیابی را به صورت دیجیتال و موثر انجام دهند. این پلتفرم همچنین قابلیت تبدیل به ربات تلگرامی و ربات ایتا را داراست.",
  },
  {
    title: "فانوس",
    description: "پنل اطلاع رسانی مراسمات مذهبی",
    src: fanoos1,
    gallery: [fanoos1, fanoos2],
    features: [
      "React, React Router, Tailwind CSS, Vite",
      "Bot API, Django, Rest API",
      "طراحی واکنش گرا (Responsive)",
      "اتصال به ربات ایتا برای بروزرسانی خودکار",
      "آرشیو جامع و دسته‌بندی شده ادعیه و زیارات",
    ],
    text: "فانوس یک پنل اطلاع رسانی مراسمات مذهبی است که به کاربران امکان می‌دهد تا اخبار برگزاری مراسمات مذهبی مورد نظر را مشاهده کنند. این پنل قابلیت اتصال به ربات ایتا و برروزرسانی خودکار اطلاعیه‌ها را داراست. همچنین در کنار اطلاع‌رسانی، منبع کاملی از ادعیه و زیارتنامه‌ها را دارد.",
  },
  {
    title: "اهل بهشت",
    description: "سایت ختم قرآن جمعی",
    src: ahl1,
    gallery: [ahl1, ahl2, ahl3],
    features: [
      "React, Tailwind, Vite, state management",
      "Django, MySQL",
      "طراحی واکنش گرا (Responsive)",
      "انعطاف در انتخاب سهمیه",
      "مشارکت زنده (Real-time) در ختم گروهی",
      "نمایش گرافیکی میزان پیشرفت ختم",
    ],
    text: "اهل بهشت یک فضا برای ختم دسته‌جمعی قرآن و صلوات است که به کاربران این امکان را میدهد تا ختم قرآن را به صورت گروهی و با دسترسی آسان انجام دهند. این مشارکت می‌تواند از یک آیه تا یک دور کامل انجام شود.",
  },
  {
    title: "جهان نما",
    description: "سایت گردشگری و ثبت وقایع",
    src: world1,
    gallery: [world1, world2],
    features: [
      "React, Tailwind CSS, Vite, Leaflet map APi",
      "Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "ثبت دقیق موقعیت مکانی (Geolocation) وقایع",
      "ایجاد تایم‌لاین و دفترچه خاطرات اختصاصی سفر",
    ],
    text: "جهان نما یک پلتفرم جامع گردشگری است که به کاربران امکان می‌دهد وقایع و خاطرات خود را از سفر خود ثبت کنند. این وقایع با موقعیت مکانی دقیق، تاریخ و یادداشت کوچکی در پنل کاربر ذخیره خواهد شد.",
  },
  {
    title: "رستونو",
    description: "سرویس گارسون آنلاین",
    src: restono1,
    gallery: [restono2, restono3, restono4],
    features: [
      "React, Tailwind CSS, Vite, Framer Motion",
      "Bot API, NodeJs, MySQL",
      "طراحی واکنش گرا (Responsive)",
      "اسکن بارکد (QR) و دسترسی به منو",
      "ثبت سفارش آنی بدون نیاز به حضور گارسون",
      "اتصال به ربات تلگرامی برای مدیریت سفارشات",
    ],
    text: "رستونو یک سرویس گارسون آنلاین است که به مشتریان این امکان را می‌دهد که با کد اختصاصی هر میز، امکان دسترسی به منو و ثبت سفارش آنی را داشته باشند. همچنین قابلیت اتصال به ربات تلگرامی را داراست.",
  },
  {
    title: "قلم",
    description: "سایتی برای نویسندگان",
    src: qalam,
    gallery: [qalam1, qalam2, qalam3, qalam4, qalam5],
    features: [
      "React, React Router, Tailwind CSS, Vite",
      "Context API, Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "محیط تایپ مینیمال و بدون حواس‌پرتی (Distraction-Free)",
      "سیستم داستان‌نویسی تعاملی و چندشاخه‌ای",
    ],
    text: "قلم فضایی مینیمال را برای نویسندگان مهیا می‌کند. در قلم علاوه بر نوشتن داستان خود می‌توانید به داستان‌های دیگران اضافه شوید و در جریان داستان‌های تعاملی قرا بگیرید. هر داستان می‌تواند از زوایا و از قلم‌های مختلفی بیان شود.",
  },
  {
    title: "کوک پک",
    description: "پکیج مواد اولیه غذایی",
    src: cookp,
    gallery: [cook1, cook2, cook3, cook4, cook5, cook6],
    features: [
      "React, Tailwind CSS, Vite",
      "Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "محاسبه دقیق مواد اولیه و جلوگیری از دورریز",
      "مدیریت سبد خرید و پیگیری وضعیت ارسال پکیج",
    ],
    text: "یک سرویس نوآورانه که مواد اولیه را به همراه دستور پخت‌های مختلف به اندازه دقیق برای شما ارسال می‌کند تا بدون دورریز، آشپزی حرفه‌ای را تجربه کنید. با کوک پک دیگر نیازی به خرید مواد اولیه ندارید و ما خرید را به جای شما انجام خواهیم داد.",
  },
  {
    title: "مووی ریویو",
    description: "پلتفرم نقد فیلم و سریال",
    src: movie,
    gallery: [movie1, movie2, movie3, movie4],
    features: [
      "React, Tailwind CSS, Vite, React Router",
      "Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "سیستم ثبت نقد تخصصی و امتیازدهی کاربران و نظردهی به نقدها",
      "فیلتر و جستجوی پیشرفته فیلم‌ها و سریال‌ها",
    ],
    text: "پلتفرمی تخصصی برای ثبت نقد و بررسی فیلم‌ها و سریال‌ها با قابلیت امتیازدهی و بحث و گفتگو بین کاربران. ",
  },
  {
    title: "چوب لباسی",
    description: "سرویس اجاره لباس",
    src: choobl,
    gallery: [choob1, choob2, choob3, choob4],
    features: [
      "React, Tailwind CSS, Vite, Data-dns/Moment",
      "Django, PostgreSQL",
      "طراحی واکنش گرا (Responsive)",
      "تقویم هوشمند برای انتخاب تاریخ دقیق اجاره و عودت",
      "دسته‌بندی و فیلتر پیشرفته بر اساس سایز، رنگ و نوع رویداد",
      "پنل کاربری برای رهگیری سفارشات فعال",
    ],
    text: "سرویس اجاره انواع لباس برای رویدادهای کوتاه‌مدت. اقتصادی، سریع و دوستدار محیط زیست. با چوب لباسی دیگر نیازی به خرید لباس‌های مجلسی ندارید و می‌توانید هر بار لباسی جدید برای رویدادهای خود انتخاب کنید.",
  },
];

export default function ExpandableCards() {
  const [active, setActive] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isLightboxOpen = useRef(false);
  const ref = useRef(null);
  const id = useId();

  // 👈 ۲. این رو اضافه کن که به ما بگه آیا الان لایت‌باکس بازه یا نه
  useEffect(() => {
    isLightboxOpen.current = !!selectedImage;
  }, [selectedImage]);

  // بستن با زدن دکمه Esc
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null); // اول لایت‌باکس رو می‌بنده
        } else if (active) {
          setActive(null); // اگر لایت‌باکس باز نبود، کارت رو می‌بنده
        }
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, selectedImage]); // 👈 selectedImage رو به اینجا اضافه کردیم

  useOutsideClick(ref, () => {
    // اگر لایت‌باکس باز بود، هیچی رو نبند و فقط از تابع خارج شو
    if (isLightboxOpen.current) return;

    // در غیر این صورت (یعنی لایت‌باکس بسته بود)، کارت اصلی رو ببند
    setActive(null);
  });
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9990 h-full w-full bg-black/40 backdrop-blur-md dark:bg-black/60"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-10000 grid place-items-center px-4 py-8">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            {/* لایه اصلی کارت */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex max-h-[80dvh] w-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] dark:bg-neutral-900"
            >
              <div className="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto rounded-3xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FF0D62] [&::-webkit-scrollbar-track]:bg-black/5 dark:[&::-webkit-scrollbar-track]:bg-white/5">
                {/* 🔴 بخش عکس که دکمه شناور روی آن قرار دارد 🔴 */}
                {/* ۱. کانتینر عکس (دکمه از اینجا حذف شد) */}
                <div className="relative h-64 w-full shrink-0 bg-black/5 sm:h-80 md:h-100 dark:bg-white/5">
                  <motion.div
                    layoutId={`image-${active.title}-${id}`}
                    className="h-full w-full"
                  >
                    <img
                      priority="true"
                      width={200}
                      height={200}
                      src={active.src}
                      alt={active.title}
                      className="h-full w-full object-contain object-center"
                    />
                  </motion.div>
                </div>

                {/* ۲. دکمه شناور چسبنده (Sticky) اضافه شد اینجا */}
                <div className="pointer-events-none sticky top-4 z-50 -mt-14 flex w-full px-4">
                  {/* mr-auto دکمه رو میندازه سمت چپ */}
                  <div className="pointer-events-auto mr-auto">
                    <Link to="/contact" onClick={() => setActive(null)}>
                      <motion.button
                        layoutId={`button-${active.title}-${id}`}
                        className="bg-p400 cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold text-black shadow-2xl transition-transform hover:scale-105 md:text-base lg:text-lg"
                      >
                        شروع گفتگو
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* ۳. بخش متن‌ها (pt-14 اضافه شد تا فاصله جبران بشه) */}
                <div className="flex flex-col pt-4">
                  {/* بخش عنوان و توضیحات اصلی */}
                  <div className="flex shrink-0 items-center justify-between p-4 text-black dark:text-white">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-lg font-black md:text-xl lg:text-2xl"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.title}-${id}`}
                        className="pt-2 text-base font-semibold md:text-lg lg:text-xl xl:text-2xl"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* بخش محتوا و گالری عکس‌ها */}
                  <div className="relative px-4 pt-2 pb-8">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-fit flex-col items-start gap-4 text-sm font-medium text-black md:text-sm lg:text-base dark:text-white"
                    >
                      {/* جایگزین کدهای قبلی */}
                      <div className="flex w-full flex-col gap-4 md:text-base lg:text-lg xl:text-xl">
                        <p className="text-justify">{active.text}</p>
                        <ul className="marker:text-accent list-inside list-disc font-semibold">
                          {active.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>

                        {/* گالری عکس‌ها (Masonry) */}
                        {active.gallery && active.gallery.length > 0 && (
                          <div className="mt-4 columns-1 gap-4 space-y-4 sm:columns-2">
                            {active.gallery.map((img, index) => (
                              <LazyImage
                                key={index}
                                src={img}
                                alt={`${active.title} - ${index}`}
                                // 👈 این دو خط اضافه شد: کلیک و تغییر نشانگر موس
                                onClick={() => setSelectedImage(img)}
                                className="w-full cursor-pointer rounded-2xl border border-black/10 transition-transform hover:scale-[1.02] dark:border-white/10"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* 🔴 بخش لیست کارت‌های کوچک 🔴 */}
      <ul className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-4 md:px-20 lg:px-0">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col items-center justify-between rounded-2xl border border-black/10 bg-black/5 p-2 backdrop-blur-md transition-colors hover:bg-black/10 md:rounded-3xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex w-full items-center justify-between px-2 py-2 md:px-5 md:py-3 lg:px-6">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                // کادر عکس موبایلی: عکس‌ها دقیقاً از بالا کراپ می‌شوند
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-24 md:w-32 lg:h-24 lg:w-40 xl:h-25 xl:w-40"
              >
                <LazyImage
                  src={card.src}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  style={{ objectPosition: "top center" }}
                />
              </motion.div>

              <div className="flex flex-col items-center justify-center text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-xl font-bold text-black md:text-2xl xl:text-3xl 2xl:text-4xl dark:text-white"
                >
                  <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    <span>{card.title}</span>

                    {/* <div className="flex h-8 items-center justify-center rounded-full bg-white px-3 py-1 md:h-12 lg:h-12 lg:px-4 xl:h-14 xl:px-6">
                      <img
                        src={arrow}
                        alt="arrow"
                        className="inline-block h-6 rotate-180 md:h-8 lg:h-8 xl:h-10"
                      />
                    </div> */}
                    <InteractiveHoverButton
                      // سایزها و پدینگ‌هایی که خودت داده بودی رو بهش دادیم
                      className="flex h-8 w-16 items-center justify-center px-3 md:h-12 md:w-24 lg:h-12 lg:px-4 xl:h-14 xl:w-32 xl:px-6"
                    >
                      <img
                        src={arrow}
                        alt="arrow"
                        className="mb-0.5 inline-block h-6 rotate-180 md:h-8 lg:h-8 xl:h-10"
                      />
                    </InteractiveHoverButton>
                  </div>
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      {/* 🌟 لایت‌باکس برای عکس‌های گالری 🌟 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // z-[20000] باعث میشه بیاد روی همه‌چیز حتی مودال اصلی
            className="fixed inset-0 z-[20000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)} // با کلیک روی پس‌زمینه تاریک بسته میشه
          >
            {/* دکمه بستن لایت‌باکس */}
            <button
              className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md lg:hidden"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </button>

            {/* خودِ عکسِ بزرگ شده */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="بزرگنمایی"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن با کلیک روی خود عکس
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
