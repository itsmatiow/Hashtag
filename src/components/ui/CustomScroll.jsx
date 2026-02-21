import React, { useRef, useState, useEffect } from "react";

export default function CustomScrollbar({ children }) {
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(0);
  const dragStartY = useRef(0);
  const scrollStartY = useRef(0);

  // ۱. محاسبه ارتفاع دکمه صورتی بر اساس مقدار محتوا
  const updateThumbSize = () => {
    if (!contentRef.current || !trackRef.current) return;
    const { clientHeight, scrollHeight } = contentRef.current;
    const trackHeight = trackRef.current.clientHeight;

    // اگر محتوا از صفحه کمتر بود، اسکرول‌بار رو مخفی کن
    if (scrollHeight <= clientHeight) {
      setThumbHeight(0);
      return;
    }

    // حداقل ارتفاع ۴۰ پیکسل باشه که بشه گرفتش
    const ratio = clientHeight / scrollHeight;
    setThumbHeight(Math.max(ratio * trackHeight, 40));
  };

  useEffect(() => {
    updateThumbSize();
    window.addEventListener("resize", updateThumbSize);
    return () => window.removeEventListener("resize", updateThumbSize);
  }, [children]);

  // ۲. هماهنگ کردن دکمه صورتی وقتی کاربر با موس/تاچ اسکرول میکنه
  const handleScroll = () => {
    if (
      isDragging ||
      !contentRef.current ||
      !thumbRef.current ||
      !trackRef.current
    )
      return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const trackHeight = trackRef.current.clientHeight;

    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    const maxThumbTop = trackHeight - thumbHeight;

    thumbRef.current.style.transform = `translateY(${scrollPercentage * maxThumbTop}px)`;
  };

  // ۳. منطق گرفتن و کشیدن (Drag) دکمه صورتی
  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    scrollStartY.current = contentRef.current.scrollTop;
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging || !contentRef.current || !trackRef.current) return;
      e.preventDefault();

      const deltaY = e.clientY - dragStartY.current;
      const { scrollHeight, clientHeight } = contentRef.current;
      const trackHeight = trackRef.current.clientHeight;

      const scrollableTrackSpace = trackHeight - thumbHeight;
      const scrollableContentSpace = scrollHeight - clientHeight;

      // تبدیل حرکت دست به مقدار اسکرول صفحه
      const scrollRatio = scrollableContentSpace / scrollableTrackSpace;
      contentRef.current.scrollTop =
        scrollStartY.current + deltaY * scrollRatio;
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, thumbHeight]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* نوار اسکرول کاستوم (دقیقا با همون استایل صفحه اصلی) */}
      <div
        ref={trackRef}
        className="fixed top-0 left-0 z-50 flex h-full w-4 flex-col items-center justify-start bg-transparent"
      >
        <div className="absolute h-full w-2.5 rounded-full bg-black/5 backdrop-blur-sm dark:bg-white/5" />
        <div
          ref={thumbRef}
          onPointerDown={handlePointerDown}
          className="absolute left-0 w-2.5 cursor-grab rounded-full bg-[#FF0D62] transition-all duration-75 active:cursor-grabbing"
          style={{
            height: `${thumbHeight}px`,
            display: thumbHeight === 0 ? "none" : "block", // مخفی کردن اگر اسکرول نیاز نبود
          }}
        />
      </div>

      {/* کانتینر محتوای اصلی */}
      <div
        ref={contentRef}
        onScroll={handleScroll}
        // مخفی کردن اسکرول‌بار زشت و پیش‌فرض مرورگر
        className="h-full w-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
