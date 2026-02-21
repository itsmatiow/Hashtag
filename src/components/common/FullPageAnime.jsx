"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createScope } from "animejs";
import { motion } from "framer-motion";

// Components
import HeroSection from "./HeroSection";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function FullPageAnime() {
  const SECTIONS = [
    { id: 1, content: <HeroSection onAboutClick={() => goToSection(1)} /> },
    { id: 2, content: <SectionTwo /> },
    { id: 3, content: <SectionThree /> },
    { id: 4, content: <SectionFour /> },
  ];

  // --- Refs & State ---
  const root = useRef(null);
  const scope = useRef(null);
  const scrollTrackRef = useRef(null);
  const scrollThumbRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Drag State
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef(0);
  const touchStartY = useRef(0);

  const goToSection = (targetIndex) => {
    if (isAnimating || targetIndex === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(targetIndex);
    scope.current.methods.scrollToSection(targetIndex);
  };

  // --- ۱. مقداردهی اولیه انیمیشن (AnimeJS Scope) ---
  useEffect(() => {
    scope.current = createScope({ root: root.current }).add((self) => {
      self.add("scrollToSection", (index) => {
        animate(".scroll-container", {
          translateY: `${-index * 100}vh`,
          duration: 1000,
          ease: "inOutExpo",
          onComplete: () => setIsAnimating(false),
        });
      });
    });
    return () => scope.current.revert();
  }, []);

  // --- گوش دادن به کلیک روی داک‌بار برای برگشت به بالا ---
  useEffect(() => {
    const handleGoTop = () => {
      // اگر الان در سکشن اول (ایندکس صفر) نیستیم و انیمیشنی هم در حال اجرا نیست
      if (currentIndex !== 0 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(0); // آپدیت کردن استیت به سکشن اول
        // اجرای انیمیشن AnimeJS برای رفتن به بالای بالا
        scope.current.methods.scrollToSection(0);
      }
    };

    // به مرورگر می‌گیم: هر وقت کسی پیام goHomeTop رو فرستاد، این تابع رو اجرا کن
    window.addEventListener("goHomeTop", handleGoTop);

    // پاکسازی هنگام خروج از صفحه
    return () => {
      window.removeEventListener("goHomeTop", handleGoTop);
    };
  }, [currentIndex, isAnimating]); // وابستگی‌ها برای اینکه همیشه به آخرین وضعیت دسترسی داشته باشه

  // --- ۲. منطق درگ کردن دکمه اسکرول (Pointer Logic) ---
  useEffect(() => {
    if (!isDragging) return;

    const track = scrollTrackRef.current;
    const thumb = scrollThumbRef.current;
    const content = document.querySelector(".scroll-container");

    if (!track || !thumb || !content) return;

    const handlePointerMove = (e) => {
      e.preventDefault();
      const trackRect = track.getBoundingClientRect();
      const thumbHeight = thumb.getBoundingClientRect().height;
      const availableSpace = trackRect.height - thumbHeight;

      let newTop = e.clientY - trackRect.top - dragOffset.current;
      newTop = Math.max(0, Math.min(newTop, availableSpace));

      // حرکت آنی دکمه و محتوا (بدون ترنزیشن در هنگام درگ)
      thumb.style.transform = `translateY(${newTop}px)`;
      const progress = newTop / availableSpace;
      const maxScroll = (SECTIONS.length - 1) * 100;
      content.style.transform = `translateY(-${progress * maxScroll}%)`;
      content.style.transition = "none";
    };

    const handlePointerUp = () => {
      document.body.style.userSelect = "";

      const trackHeight = track.clientHeight;
      const thumbHeight = trackHeight / SECTIONS.length;
      const currentMatrix = new WebKitCSSMatrix(thumb.style.transform);
      const currentY = currentMatrix.m42;

      // اسنپ کردن به نزدیک‌ترین بخش
      const targetIndex = Math.round(currentY / thumbHeight);
      const targetThumbY = targetIndex * thumbHeight;

      thumb.style.transition = "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)";
      thumb.style.transform = `translateY(${targetThumbY}px)`;

      // اجرای انیمیشن نهایی محتوا
      scope.current.methods.scrollToSection(targetIndex);

      setTimeout(() => {
        setIsDragging(false);
        setCurrentIndex(targetIndex);
        setIsAnimating(false);
      }, 500);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  // --- ۳. منطق اسکرول موس و تاچ موبایل ---
  useEffect(() => {
    const navigate = (direction) => {
      if (isAnimating) return;

      let newIndex = currentIndex;
      if (direction === "next" && currentIndex < SECTIONS.length - 1) {
        newIndex = currentIndex + 1;
      } else if (direction === "prev" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }

      if (newIndex !== currentIndex) {
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        scope.current.methods.scrollToSection(newIndex);
      }
    };

    const handleWheel = (e) => navigate(e.deltaY > 0 ? "next" : "prev");
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const distance = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(distance) < 50) return;
      navigate(distance > 0 ? "next" : "prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, isAnimating]);

  return (
    <div ref={root} className="h-screen w-full overflow-hidden">
      {/* --- Custom Scrollbar (Aside/Dock) --- */}
      <div
        ref={scrollTrackRef}
        className="fixed top-0 left-0 z-50 flex h-full w-4 flex-col items-center justify-start bg-transparent py-1"
      >
        <div className="absolute h-full w-1.5 rounded-full bg-black/5 backdrop-blur-sm dark:bg-white/5" />

        <div
          ref={scrollThumbRef}
          onPointerDown={(e) => {
            e.stopPropagation();
            setIsDragging(true);
            document.body.style.userSelect = "none";
            const thumbRect = scrollThumbRef.current.getBoundingClientRect();
            dragOffset.current = e.clientY - thumbRect.top;
          }}
          className="absolute left-0 w-2.5 cursor-grab rounded-full bg-[#FF0D62] transition-all duration-75 active:cursor-grabbing"
          style={{
            height: `${100 / SECTIONS.length}%`,
            transform: !isDragging
              ? `translateY(${currentIndex * 100}%)`
              : undefined,
            transition: isDragging
              ? "none"
              : "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />
      </div>

      {/* --- Main Content Container --- */}
      <div className="scroll-container h-full w-full touch-none">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`relative flex h-screen w-full justify-center overflow-hidden ${
              section.id === 1 ? "sm:items-center" : ""
            }`}
          >
            <div className="font-bold text-white">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
