import React from "react";
import { Outlet } from "react-router-dom";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTheme } from "../../hooks/useTheme"; // آدرس رو چک کن
import DockBarDesktop from "../common/DockBArDesktop";
import DockBarMobile from "../common/DockBarMobile";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <>
      <div className="bg-background flex h-screen overflow-hidden max-lg:flex-col lg:w-full lg:pb-0">
        <div
          id="dock-mobile"
          className="fixed bottom-2 left-1/2 z-1000 -translate-x-1/2 self-center lg:hidden"
        >
          <DockBarMobile />
        </div>
        <aside
          id="dock-desktop"
          className="relative z-1000 hidden h-full flex-col justify-center pr-8 pl-4 lg:flex"
        >
          <DockBarDesktop />
        </aside>

        {/* شاه‌کلید اینجاست: Outlet یعنی محتوای هر صفحه اینجا تزریق بشه */}
        <Outlet />
      </div>
      <div className="absolute top-0 right-0 -z-10 h-screen w-full flex-col items-center justify-center overflow-hidden">
        <RetroGrid
          angle={65}
          cellSize={60}
          opacity={0.5}
          lightLineColor="var(--p700)"
          darkLineColor="var(--p300)"
        />
      </div>
    </>
  );
}
