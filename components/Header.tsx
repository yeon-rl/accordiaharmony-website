import React from "react";

const Header: React.FC<{ number: number; title: string }> = ({
  number,
  title,
}) => {
  return (
    <div
      className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-2 py-2 pr-4"
      style={{
        backdropFilter: "blur(22.6px)",
        boxShadow:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <span
        className="flex w-5 h-4 items-center justify-center rounded-full bg-[#BA9A32] text-sm font-semibold text-white"
        style={{
          border: "0.5px solid #BA9A32",
          boxShadow:
            "0px 4px 6px 2px #E5AB00 inset, 0px -2px 6px 2px #FFCC37 inset",
        }}
      >
        {/* 0{number} */}
      </span>
      <div className="w-0.5 h-4 bg-[#DDDCE3]"></div>
      <span
        className="flex items-center gap-1 text-sm md:text-base font-medium leading-none tracking-tight text-[#4285F4]"
        style={{ fontFamily: "Poppins" }}
      >
        {title}
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          className="ml-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11L6 6L1 1"
            stroke="#4285F4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default Header;
