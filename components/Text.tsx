import React from "react";

interface TextProps {
  children: React.ReactNode;
  type?: "heading" | "subheading" | "body";
  className?: string;
}

const Text = ({ children, type = "body", className }: TextProps) => {
  if (type === "heading") {
    return (
      <h1
        className={`text-xl md:text-[48px] font-normal tracking-normal leading-tight ${className}`}
        style={{ fontFamily: "Poppins" }}
      >
        {children}
      </h1>
    );
  }
  if (type === "subheading") {
    return (
      <h2
        className={`text-xl md:text-[48px] leading-snug tracking-normal font-semibold ${className}`}
        style={{ fontFamily: "Poppins" }}
      >
        {children}
      </h2>
    );
  }
  return (
    <p
      className={`text-sm md:text-base font-normal leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
