"use client";

import React, { useEffect, useState } from "react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      // show after user scrolls down 300px
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial check
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={scrollToTop}
      onKeyDown={onKeyDown}
      className={
        "fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 cursor-pointer " +
        "flex items-center justify-center w-12 h-12 rounded-full bg-[#BA9A32] shadow-lg hover:bg-white transition-opacity duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
        (visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none")
      }
    >
      {/* chevron up SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-slate-800"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
