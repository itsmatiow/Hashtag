import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      className={`font-display bg-p400 hover:bg-p600 se:text-2xl rounded-2xl px-6 py-3 font-extrabold text-black transition-all duration-300 sm:text-xl lg:text-2xl ${className}`}
    >
      {children}
    </button>
  );
}
