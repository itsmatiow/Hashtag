import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import hashtag from "@/assets/hashtag.png";
import list from "@/assets/projects.png";
import journey from "@/assets/journey.png";
import contact from "@/assets/contact.png";
import question from "@/assets/question.png";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";
export default function DockBarDesktop() {
  const dockItems = [
    { icon: hashtag, tooltip: "خانه", path: "/" },
    { icon: list, tooltip: "نمونه کار", path: "/projects" },
    { icon: journey, tooltip: "روند کار", path: "/workflow" },
    { icon: question, tooltip: "سوالات متداول", path: "/faq" },
    { icon: contact, tooltip: "تماس با ما", path: "/contact" },
  ];
  return (
    <>
      <TooltipProvider>
        <Dock
          orientation="vertical"
          iconSize={50}
          iconMagnification={65}
          className="left-4 z-50 w-18 border border-black/20 bg-black/15 dark:border-white/20 dark:bg-white/15"
        >
          {dockItems.map((item, index) => (
            <DockIcon key={index} tooltip={item.tooltip}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    to={item.path}
                    onClick={() => {
                      // بررسی می‌کنیم که آیا کاربر روی هشتگ (خانه) کلیک کرده و همین الان هم تو صفحه خانه هست یا نه
                      if (
                        item.path === "/" &&
                        window.location.pathname === "/"
                      ) {
                        // یک پیام سراسری به کل سایت می‌فرستیم
                        window.dispatchEvent(new CustomEvent("goHomeTop"));
                      } else {
                        // برای صفحات دیگه، وقتی کلیک شد اسکرول عادی رو ببره بالا
                        window.scrollTo(0, 0);
                      }
                    }}
                    className="h-full w-full rounded-full"
                  >
                    <img
                      src={item.icon}
                      alt={item.tooltip}
                      className="h-full w-full object-contain p-2 invert-0 dark:invert"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <DockIcon tooltip="تغییر تم">
            <Tooltip>
              <TooltipTrigger>
                <button className="h-full w-full rounded-full">
                  <ThemeToggle />
                </button>
              </TooltipTrigger>
              <TooltipContent>تغییر تم</TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </>
  );
}
