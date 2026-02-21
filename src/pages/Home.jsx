import React from "react";
import FullPageAnime from "../components/common/FullPageAnime";

export default function Home() {
  return (
    // از اونجایی که FullPageAnime قراره جایگزین Outlet بشه،
    // بهتره کلاس‌های والدش رو به خودش هم بدیم تا تمام فضا رو بگیره
    <div className="relative h-full w-full flex-1 overflow-hidden">
      <FullPageAnime />
    </div>
  );
}
