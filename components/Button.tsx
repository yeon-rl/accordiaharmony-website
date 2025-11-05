const GRADIENT =
  "linear-gradient(95.6deg, #747474 0%, rgba(23,23,23,0) 10%, rgba(23,23,23,0) 90%, #747474 100%)";

const Button: React.FC<{
  title?: string;
  isTransparent?: boolean;
  hasIcon?: boolean;
  nav?: boolean;
  className?: string;
}> = ({ title, isTransparent, hasIcon, nav, className }) => {
  const showGradientBorder = !nav && !isTransparent && !hasIcon;
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {showGradientBorder && (
        <style>{`
          .gradient-border-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 13.01px;
            padding: 1px;
            background: ${GRADIENT};
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}</style>
      )}
      <button
        className={`font-semibold px-5 py-3 rounded-[13.01px] cursor-pointer text-base transition-colors duration-300 ${
          isTransparent
            ? "bg-transparent border border-white text-white"
            : "bg-white text-[#15313D]"
        } ${nav ? "px-5" : "px-8"} ${
          showGradientBorder ? "gradient-border-btn" : ""
        } ${
          hasIcon
            ? "flex items-center gap-2 bg-[#4285F4]! rounded-full! text-white px-1! md:px-5! md:pr-2! pl-5! py-1! md:py-2!"
            : ""
        } ${className ? className : ""}`}
        style={{
          position: "relative",
          zIndex: 1,
          boxShadow:
            nav && !isTransparent && !hasIcon
              ? "0px 10.7px 23.97px 0px #00000059"
              : !isTransparent
              ? "0px 20px 35px 0px #3384FF33"
              : undefined,
          border: showGradientBorder ? "none" : undefined,
          borderRadius: "13.01px",
        }}
      >
        {title}

        {hasIcon && (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="44"
              height="44"
              rx="22"
              fill="white"
              fillOpacity="0.08"
            />
            <path
              d="M16 22H28"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.668 16.6663L28.0013 21.9997L22.668 27.333"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Button;
