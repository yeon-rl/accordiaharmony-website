"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const StaticBg: React.FC<
  PropsWithChildren<{ scroll?: boolean; height?: string }>
> = ({ children, scroll, height }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`relative w-full bg-[#060610] flex flex-col ${
          scroll ? "h-full" : "overflow-hidden h-screen"
        } ${height || ""}`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`relative w-full flex flex-col transition-colors duration-300 ${
        isDark ? "bg-[#060610]" : "bg-[#F9F9EF]"
      } ${scroll ? "h-full" : "overflow-hidden h-screen"} ${height || ""}`}
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-300 ${
          isDark
            ? "bg-linear-to-b from-transparent via-transparent to-[#060610]"
            : "bg-linear-to-b from-transparent via-transparent to-[#F9F9EF]"
        }`}
      />
      <svg
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isDark ? "opacity-75" : "opacity-30"
        }`}
        viewBox="0 0 1280 832"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.48" className="twinkling-dots">
          {[
            { cx: "66.6961", cy: "317.616", rx: "1.84449", ry: "1.84448", opacity: "0.61" },
            { cx: "2.30562", cy: "2.3056", rx: "2.30562", ry: "2.3056", opacity: "0.61", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1205.28 343.869)" },
            { cx: "66.6996", cy: "223.546", rx: "0.922246", ry: "0.92224", opacity: "0.23" },
            { cx: "1.38337", cy: "1.38336", rx: "1.38337", ry: "1.38336", opacity: "0.23", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1212.86 250.895)" },
            { cx: "141.399", cy: "283.494", rx: "1.38337", ry: "1.38336", opacity: "0.68" },
            { cx: "0.922246", cy: "0.92224", rx: "0.922246", ry: "0.92224", opacity: "0.68", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1129 307.29)" },
            { cx: "4.9029", cy: "191.266", rx: "1.38337", ry: "1.38336", opacity: "0.13" },
            { cx: "2.76674", cy: "2.76672", rx: "2.76674", ry: "2.76672", opacity: "0.13", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1270.1 220.286)" },
            { cx: "2.30562", cy: "2.3056", rx: "2.30562", ry: "2.3056", opacity: "0.66", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1278.82 295.891)" },
            { cx: "75.0011", cy: "119.33", rx: "2.76674", ry: "2.76672", opacity: "0.59" },
            { cx: "2.76674", cy: "2.76672", rx: "2.76674", ry: "2.76672", opacity: "0.59", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1202.81 144.869)" },
            { cx: "280.887", cy: "301.015", rx: "0.922246", ry: "0.92224", opacity: "0.44" },
            { cx: "1.38337", cy: "1.38336", rx: "1.38337", ry: "1.38336", opacity: "0.44", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 990.242 317.459)" },
            { cx: "218.938", cy: "326.836", rx: "1.38337", ry: "1.38336", opacity: "0.62" },
            { cx: "1.38337", cy: "1.38336", rx: "1.38337", ry: "1.38336", opacity: "0.62", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 1051.68 346.336)" },
            { cx: "464.568", cy: "181.124", rx: "2.76674", ry: "2.76672", opacity: "0.31" },
            { cx: "1.38337", cy: "1.38336", rx: "1.38337", ry: "1.38336", opacity: "0.31", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 814.816 237.618)" },
            { cx: "363.048", cy: "336.058", rx: "1.84449", ry: "1.84448", opacity: "0.23" },
            { cx: "2.30562", cy: "2.3056", rx: "2.30562", ry: "2.3056", opacity: "0.23", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 903.598 347.37)" },
            { cx: "838.473", cy: "314.852", rx: "0.922246", ry: "0.92224", opacity: "0.21" },
            { cx: "1.84449", cy: "1.84448", rx: "1.84449", ry: "1.84448", opacity: "0.21", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 435.027 302.97)" },
            { cx: "826.485", cy: "185.732", rx: "1.38337", ry: "1.38336", opacity: "0.36" },
            { cx: "2.76674", cy: "2.76672", rx: "2.76674", ry: "2.76672", opacity: "0.36", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 451.734 173.657)" },
            { cx: "1048.9", cy: "322.226", rx: "2.76674", ry: "2.76672", opacity: "0.43" },
            { cx: "0.922246", cy: "0.92224", rx: "0.922246", ry: "0.92224", opacity: "0.43", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 222.531 300.641)" },
            { cx: "1139.43", cy: "145.156", rx: "0.922246", ry: "0.92224", opacity: "0.39" },
            { cx: "0.922246", cy: "0.92224", rx: "0.922246", ry: "0.92224", opacity: "0.39", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 144.93 119.382)" },
            { cx: "1214.21", cy: "296.4", rx: "1.84449", ry: "1.84448", opacity: "0.16" },
            { cx: "2.76674", cy: "2.76672", rx: "2.76674", ry: "2.76672", opacity: "0.16", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 56.0586 264.71)" },
            { cx: "1238.18", cy: "80.6", rx: "2.30562", ry: "2.3056", opacity: "0.55" },
            { cx: "1.84449", cy: "1.84448", rx: "1.84449", ry: "1.84448", opacity: "0.55", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 46.8008 48.9624)" },
            { cx: "1280.6", cy: "209.716", rx: "1.38337", ry: "1.38336", opacity: "0.66" },
            { cx: "1201.3", cy: "200.49", rx: "0.922246", ry: "0.92224", opacity: "0.55" },
            { cx: "2.30562", cy: "2.3056", rx: "2.30562", ry: "2.3056", opacity: "0.55", transform: "matrix(-0.998714 -0.0507013 -0.050702 0.998714 79.9492 170.173)" },
            { cx: "1276.01", cy: "326.835", rx: "2.76674", ry: "2.76672", opacity: "0.03" },
          ].map((dot, i) => (
            <ellipse
              key={i}
              opacity={dot.opacity}
              cx={dot.cx}
              cy={dot.cy}
              rx={dot.rx}
              ry={dot.ry}
              transform={dot.transform}
              fill={isDark ? "white" : "#4D3763"}
              className="transition-colors duration-300"
            />
          ))}
        </g>

        <g opacity="0.3">
          <circle
            opacity="0.1"
            cx="634.559"
            cy="458.555"
            r="582.99"
            stroke={isDark ? "white" : "#4D3763"}
            strokeWidth="1.13092"
            className="transition-colors duration-300"
          />
          <circle
            opacity="0.15"
            cx="634.561"
            cy="458.555"
            r="451.659"
            stroke={isDark ? "white" : "#4D3763"}
            strokeWidth="1.13092"
            strokeDasharray="4.52 4.52"
            className="transition-colors duration-300"
          />
          <circle
            opacity="0.2"
            cx="634.561"
            cy="458.554"
            r="319.089"
            stroke={isDark ? "white" : "#4D3763"}
            strokeWidth="1.13092"
            className="transition-colors duration-300"
          />
          <circle
            cx="244.718"
            cy="18.7198"
            r="11.8243"
            stroke="#4D3763"
            strokeWidth="1.13092"
          />
          <circle
            cx="244.718"
            cy="18.7205"
            r="4.39042"
            fill={isDark ? "#2A193C" : "#E1D9F1"}
            stroke="#4D3763"
            strokeWidth="1.13092"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
      {children}
    </div>
  );
};

export default StaticBg;
