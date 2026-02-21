import React from "react";
import DockBarDesktop from "./DockBArDesktop";
import DockBarMobile from "./DockBarMobile";

export default function DockBar() {
  return (
    <>
      <div className="hidden lg:block">
        <DockBarDesktop />
      </div>
      <div className="block lg:hidden">
        <DockBarMobile />
      </div>
    </>
  );
}
