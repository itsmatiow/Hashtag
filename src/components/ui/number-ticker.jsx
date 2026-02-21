// import { useEffect, useRef } from "react";
// import {
//   useInView,
//   useMotionValue,
//   useSpring,
//   useAnimation,
//   motion,
// } from "motion/react";
// import { cn } from "@/lib/utils";

// const toPersianDigits = (num) => {
//   const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
//   return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
// };

// export function NumberTicker({
//   value,
//   startValue = 0,
//   direction = "up",
//   delay = 0,
//   showTextAfter = 3000,
//   className,
//   decimalPlaces = 0,
//   text,
//   unit,
//   stiffness = 3, // سرعت کم
//   damping = 4,
//   ...props
// }) {
//   const ref = useRef(null);
//   const isCancelledRef = useRef(false);
//   const controls = useAnimation();

//   const motionValue = useMotionValue(direction === "down" ? value : startValue);
//   const springValue = useSpring(motionValue, {
//     damping: damping,
//     stiffness: stiffness,
//   });

//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   // ۱. لاجیک نمایش متن (تغییر مهم اینجاست)
//   useEffect(() => {
//     if (isInView && text) {
//       const timer = setTimeout(async () => {
//         if (ref.current) {
//           // تغییر مهم: هنوز isCancelled رو ترو نمیکنیم!
//           // میذاریم عدد همینطور که داره کم رنگ میشه، کنتور هم بندازه

//           // الف: محو شدن (در حالی که شمارش ادامه داره)
//           await controls.start({ opacity: 0, transition: { duration: 0.5 } });

//           // ب: حالا که کامل محو شد، شمارش رو قطع کن
//           isCancelledRef.current = true;

//           // ج: متن رو بذار
//           ref.current.textContent = text;

//           // د: متن رو ظاهر کن
//           await controls.start({ opacity: 1, transition: { duration: 0.5 } });
//         }
//       }, showTextAfter);

//       return () => clearTimeout(timer);
//     }
//   }, [isInView, text, showTextAfter, controls]);

//   // ۲. هندل کردن حرکت موشن ولیو (تایمر شروع)
//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         motionValue.set(direction === "down" ? startValue : value);
//       }, delay * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [motionValue, isInView, delay, value, direction, startValue]);

//   // ۳. آپدیت کردن DOM
//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         // تا وقتی کنسل نشده، عدد رو آپدیت کن
//         if (ref.current && !isCancelledRef.current) {
//           const currentFormatted = latest.toFixed(decimalPlaces);
//           const formattedNumber = Intl.NumberFormat("en-US", {
//             minimumFractionDigits: decimalPlaces,
//             maximumFractionDigits: decimalPlaces,
//           }).format(Number(currentFormatted));

//           const persianString = toPersianDigits(formattedNumber);

//           ref.current.textContent = unit
//             ? `${persianString} ${unit}`
//             : persianString;
//         }
//       }),
//     [springValue, decimalPlaces, unit],
//   );

//   return (
//     <motion.span
//       ref={ref}
//       animate={controls}
//       initial={{ opacity: 1 }}
//       className={cn(
//         "font-display inline-block w-100 text-center text-black dark:text-white",
//         className,
//       )}
//       {...props}
//     >
//       {unit
//         ? `${toPersianDigits(startValue)} ${unit}`
//         : toPersianDigits(startValue)}
//     </motion.span>
//   );
// }
import { useEffect, useRef } from "react";
// تغییر ۱: اضافه کردن animate به ایمپورت‌ها
import {
  useInView,
  useMotionValue,
  useAnimation,
  // eslint-disable-next-line no-unused-vars
  motion,
  animate,
} from "motion/react";
import { cn } from "@/lib/utils";

const toPersianDigits = (num) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
};

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,

  // این مهم‌ترین پراپ شماست: "کل شمارش چند ثانیه طول بکشه؟"
  duration = 5, // پیش‌فرض ۵ ثانیه (خیلی آروم)

  showTextAfter = null, // اگر نذارید، تا آخر میره
  className,
  decimalPlaces = 0,
  text,
  unit,
  // textDelay,
  ...props
}) {
  const ref = useRef(null);
  const isCancelledRef = useRef(false);
  const controls = useAnimation(); // برای انیمیشن محو شدن/ظاهر شدن

  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // ۱. لاجیک نمایش متن (اگر showTextAfter داشته باشیم)
  useEffect(() => {
    if (isInView && text && showTextAfter) {
      const timer = setTimeout(async () => {
        if (ref.current) {
          // الف: محو شدن
          await controls.start({ opacity: 0, transition: { duration: 0.5 } });

          // ب: استپ کردن آپدیت عدد
          isCancelledRef.current = true;

          // ج: تغییر متن
          ref.current.textContent = text;

          // د: ظاهر شدن
          await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        }
      }, showTextAfter);

      return () => clearTimeout(timer);
    }
  }, [isInView, text, showTextAfter, controls]);

  // ۲. هندل کردن حرکت اعداد (با Duration دقیق)
  useEffect(() => {
    if (isInView) {
      // تاخیر اولیه (اگر نیاز بود)
      const startTimer = setTimeout(() => {
        // اینجا جادوی اصلیه: استفاده از animate به جای spring
        const animationControls = animate(
          motionValue,
          direction === "down" ? startValue : value,
          {
            duration: duration, // دقیقاً همین‌قدر طول میکشه
            ease: "linear", // حرکت خطی و یکنواخت (بدون شتاب الکی)
          },
        );

        // اگر کامپوننت بسته شد، انیمیشن رو متوقف کن
        return () => animationControls.stop();
      }, delay * 1000);

      return () => clearTimeout(startTimer);
    }
  }, [motionValue, isInView, delay, value, direction, startValue, duration]);

  // ۳. آپدیت کردن DOM
  useEffect(
    () =>
      motionValue.on("change", (latest) => {
        if (ref.current && !isCancelledRef.current) {
          const currentFormatted = latest.toFixed(decimalPlaces);
          const formattedNumber = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(currentFormatted));

          const persianString = toPersianDigits(formattedNumber);

          ref.current.textContent = unit
            ? `${persianString} ${unit}`
            : persianString;
        }
      }),
    [motionValue, decimalPlaces, unit],
  );

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ opacity: 1 }}
      className={cn(
        "font-display w-full text-black dark:text-white",
        className,
      )}
      {...props}
    >
      {unit
        ? `${toPersianDigits(startValue)} ${unit}`
        : toPersianDigits(startValue)}
    </motion.span>
  );
}
// import { useEffect, useRef } from "react";
// import { useInView, useMotionValue, useSpring } from "motion/react";
// import { cn } from "@/lib/utils";

// const toPersianDigits = (num) => {
//   const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
//   return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
// };

// export function NumberTicker({
//   value,
//   startValue = 0,
//   direction = "up",
//   delay = 0, // تاخیر شروع شمارش
//   textDelay = 2000, // <--- جدید: تاخیر برای نمایش متن نهایی (میلی‌ثانیه)
//   className,
//   decimalPlaces = 0,
//   text, // متن نهایی
//   unit, // واحد کنار عدد
//   ...props
// }) {
//   const ref = useRef(null);
//   const timeoutRef = useRef(null); // برای ذخیره تایمر
//   const motionValue = useMotionValue(direction === "down" ? value : startValue);
//   const springValue = useSpring(motionValue, {
//     damping: 60,
//     stiffness: 100,
//   });
//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         motionValue.set(direction === "down" ? startValue : value);
//       }, delay * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [motionValue, isInView, delay, value, direction, startValue]);

//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         if (ref.current) {
//           const currentFormatted = latest.toFixed(decimalPlaces);
//           const targetFormatted = value.toFixed(decimalPlaces);

//           // ساخت عدد فارسی + واحد
//           const formattedNumber = Intl.NumberFormat("en-US", {
//             minimumFractionDigits: decimalPlaces,
//             maximumFractionDigits: decimalPlaces,
//           }).format(Number(currentFormatted));

//           const persianString = toPersianDigits(formattedNumber);
//           const contentWithUnit = unit
//             ? `${persianString} ${unit}`
//             : persianString;

//           // آیا به عدد نهایی رسیدیم؟
//           if (currentFormatted === targetFormatted && text) {
//             // اگر تایمر هنوز ست نشده، ستش کن
//             if (!timeoutRef.current) {
//               // نمایش موقت عدد نهایی (قبل از اینکه تایمر عمل کنه)
//               ref.current.textContent = contentWithUnit;

//               // شروع تایمر برای تغییر متن
//               timeoutRef.current = setTimeout(() => {
//                 if (ref.current) {
//                   ref.current.textContent = text;
//                 }
//               }, textDelay);
//             }
//             // نکته: اگر تایمر ست شده باشه، دیگه کاری نمیکنیم تا خودش اجرا بشه
//           } else {
//             // اگر هنوز نرسیدیم (یا اگر متن نهایی نداریم)
//             // اگر تایمر قدیمی مونده بود پاکش کن (مثلا اگر یهو عدد عوض شد)
//             if (timeoutRef.current) {
//               clearTimeout(timeoutRef.current);
//               timeoutRef.current = null;
//             }

//             // نمایش عدد در حال شمارش
//             ref.current.textContent = contentWithUnit;
//           }
//         }
//       }),
//     [springValue, decimalPlaces, value, text, unit, textDelay],
//   );

//   return (
//     <span
//       ref={ref}
//       className={cn(
//         "font-display inline-block text-black dark:text-white",
//         className,
//       )}
//       {...props}
//     >
//       {/* مقدار اولیه */}
//       {unit
//         ? `${toPersianDigits(startValue)} ${unit}`
//         : toPersianDigits(startValue)}
//     </span>
//   );
// }
