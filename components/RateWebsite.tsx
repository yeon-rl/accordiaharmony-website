"use client";

import React from "react";

/**
 * RateWebsite
 * - Shows a small prompt after a randomized delay while on the home page
 * - Respects localStorage flags to avoid showing repeatedly
 * - Offers: Rate now, Remind me later, No thanks
 */
const STORAGE_KEYS = {
  DISMISSED: "rateWebsite:dismissed",
  NEXT_SHOW: "rateWebsite:nextShow",
};

export default function RateWebsite() {
  const [visible, setVisible] = React.useState(false);
  const [mode, setMode] = React.useState<"prompt" | "thanks">("prompt");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEYS.DISMISSED);
      if (dismissed === "true") return; // user opted out

      const nextShow = window.localStorage.getItem(STORAGE_KEYS.NEXT_SHOW);
      const now = Date.now();
      if (nextShow && Number(nextShow) > now) return; // deferred until later

      // random delay (in ms) — give user a chance to explore first
      const minDelay = 30_000; // 30s
      const maxDelay = 75_000; // 75s
      const delay = Math.floor(
        minDelay + Math.random() * (maxDelay - minDelay)
      );

      const timeout = window.setTimeout(() => {
        // random chance to show (so it doesn't always annoy)
        const showChance = 0.35; // 35%
        if (Math.random() < showChance) setVisible(true);
      }, delay);

      return () => clearTimeout(timeout);
    } catch (err) {
      // fail silently
      return;
    }
  }, []);

  function closeAndDismiss(days = 365) {
    setVisible(false);
    try {
      // set dismissed flag for `days` days
      window.localStorage.setItem(STORAGE_KEYS.DISMISSED, "true");
      // also set NEXT_SHOW far future
      const future = Date.now() + days * 24 * 60 * 60 * 1000;
      window.localStorage.setItem(STORAGE_KEYS.NEXT_SHOW, String(future));
    } catch (e) {}
  }

  function remindLater(days = 1) {
    setVisible(false);
    try {
      const future = Date.now() + days * 24 * 60 * 60 * 1000;
      window.localStorage.setItem(STORAGE_KEYS.NEXT_SHOW, String(future));
    } catch (e) {}
  }

  function handleRateNow() {
    // if you have an external review or survey URL, replace '#' below
    try {
      // Mark dismissed so the prompt doesn't reappear
      closeAndDismiss(365);
      // open a new tab for rating (change to your URL if available)
      window.open("#", "_blank");
      setMode("thanks");
      // hide after a brief thank-you
      setTimeout(() => setVisible(false), 2000);
    } catch (e) {
      setVisible(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      aria-hidden={!visible}
      className="fixed bottom-28 right-5 z-60 max-w-xs w-[290px] md:w-80 bg-[#0b1220] border border-slate-700 rounded-lg shadow-lg p-4 text-white"
      role="dialog"
      aria-label="Rate this website"
    >
      {mode === "prompt" ? (
        <>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">Enjoying the site?</h3>
              <p className="text-sm text-slate-300 mt-1">
                Would you mind rating our website? It helps us improve and reach
                more people.
              </p>
            </div>
            <button
              aria-label="Close"
              onClick={() => remindLater(1)}
              className="ml-3 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 flex items-center justify-end space-x-2">
            <button
              onClick={() => remindLater(1)}
              className="px-3 py-1 rounded bg-slate-700 text-sm"
            >
              Remind me later
            </button>
            <button
              onClick={() => closeAndDismiss(365)}
              className="px-3 py-1 rounded bg-transparent border border-slate-600 text-sm text-slate-300"
            >
              No thanks
            </button>
            <button
              onClick={handleRateNow}
              className="px-3 py-1 rounded bg-[#FBBF24] text-black font-semibold"
            >
              Rate now
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">Thanks for your feedback!</div>
      )}
    </div>
  );
}
