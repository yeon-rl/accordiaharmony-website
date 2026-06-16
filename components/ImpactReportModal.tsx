"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ImpactReportModal({ open, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/ACCORDIA HARMONY COMMUNITY PROGRAMME nn.pdf";
    link.download = "ACCORDIA HARMONY COMMUNITY PROGRAMME nn.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop — light: white/40, dark: black/30 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white/40 dark:bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Modal card — light: white card, dark: dark card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl
                       bg-white border border-gray-200
                       dark:bg-[#0D0D1A] dark:border-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close impact report modal"
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
                         bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Hero image */}
            <div className="relative w-full h-52 sm:h-64 overflow-hidden">
              <Image
                src="/images/impact.png"
                alt="Accordia Harmony Impact Report"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Gradient overlay — adapts per mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0D0D1A] via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5
                               bg-[#4285F4]/10 border border-[#4285F4]/30 text-[#4285F4]
                               dark:bg-[#FBBF24]/20 dark:border-[#FBBF24]/40 dark:text-[#FBBF24]
                               text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Skill Forge Impact Report
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pt-5 pb-7 space-y-4">
              <div className="space-y-2">
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/70">
                  Is a practical learning and innovation hub created to inspire
                  growth, creativity, and hands-on learning. It provides a space
                  where learners can explore technical, digital, and vocational
                  skills that encourage self-discovery and personal development.
                </p>
              </div>

              {/* Download button */}
              <button
                onClick={handleDownload}
                id="impact-report-download-btn"
                className="w-full flex items-center justify-center gap-2.5
                           bg-[#4285F4] hover:bg-[#3574e2]
                           dark:bg-[#FBBF24] dark:hover:bg-[#F59E0B] dark:text-[#0D0D1A]
                           active:scale-[0.98] text-white dark:text-[#0D0D1A] font-bold py-3.5 rounded-2xl
                           transition-all duration-200 shadow-lg shadow-blue-500/20 dark:shadow-amber-500/20
                           text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Impact Report (PDF)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
