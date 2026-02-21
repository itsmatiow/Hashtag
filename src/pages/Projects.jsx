//import React from "react";
import CustomScrollbar from "../components/ui/CustomScroll";
import ExpandableCards from "../components/common/ExpandableCards"; // ایمپورت کامپوننت کارت‌ها

export default function Projects() {
  return (
    <CustomScrollbar>
      <div className="font-display flex flex-col items-center px-6 pb-20 sm:px-1 lg:px-24">
        {/* هدر صفحه (با متن‌های پیشنهادی) */}
        <div className="se:mt-6 se:mb-2 se:gap-4 mt-4 mb-1 flex w-full flex-col items-center gap-2 px-0 lg:mt-8 lg:mb-6 lg:flex-row lg:justify-between lg:gap-28 xl:gap-60">
          <span className="text-accent flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-lg font-black text-nowrap backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            تالار افتخارات هشتگ
          </span>
          <h1 className="text-p700 se:text-2xl se:mb-4 mx-auto mb-2 text-lg font-black text-nowrap sm:text-5xl lg:m-0 lg:text-4xl">
            پروژه‌های شما، افتخاره!
          </h1>
        </div>
        <p className="se:text-lg se:font-semibold se:px-4 se:mb-3 max-se:max-w-lg mb-2 px-2 text-justify text-sm font-medium text-black sm:text-base md:mx-20 md:mb-8 md:text-xl lg:mx-0 lg:mb-4 lg:px-0 lg:text-2xl lg:leading-10 dark:text-white">
          فاصله بین یه ایده‌ی خام تا یه محصول موفق، اجرای درسته! اینجا می‌تونید
          پروژه‌هایی که با رعایت استانداردای روز توسعه دادیمو بررسی کنید.
        </p>

        {/* لیست پروژه‌ها */}
        <ExpandableCards />
      </div>
    </CustomScrollbar>
  );
}
import React from "react";
