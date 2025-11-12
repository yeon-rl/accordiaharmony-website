import React, { useRef, useEffect, useState } from "react";
import Text from "./Text";
import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-reactjs";

const services = [
  {
    title: "Empowerment ",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0848 14.8921L30.4938 11.4831C34.3322 7.64469 39.3574 6.05254 44.6757 5.79236C46.7444 5.69117 47.7786 5.64057 48.6079 6.46997C49.4375 7.29936 49.3867 8.33364 49.2855 10.4022C49.0253 15.7205 47.4332 20.7458 43.5949 24.5841L40.1858 27.9932C37.3784 30.8005 36.5803 31.5989 37.1696 34.644C37.7513 36.9701 38.3142 39.2227 36.6228 40.9141C34.5711 42.9658 32.6995 42.9658 30.6478 40.9141L14.1638 24.4302C12.1121 22.3784 12.112 20.5069 14.1638 18.4551C15.8552 16.7637 18.1078 17.3267 20.4339 17.9083C23.4791 18.4977 24.2774 17.6995 27.0848 14.8921Z"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinejoin="round"
        />
        <path
          d="M39 16.0635H39.021"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.74219 49.3369L17.2158 37.8633"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
        <path
          d="M19.5078 49.3365L24.0973 44.7471"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
        <path
          d="M5.74219 35.568L10.3316 30.9785"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: " Mentoring and Support",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.2759 26.3896C33.2759 26.3896 27.5391 30.9791 27.5391 39.0106"
          stroke="url(#paint0_linear_2286_68700)"
          strokeWidth="1.72104"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.0926 20.7967C25.9594 17.9299 25.9594 13.2818 23.0926 10.415C18.7669 6.08926 9.25031 6.95442 9.25031 6.95442C9.25031 6.95442 8.38516 16.471 12.7109 20.7967C15.5777 23.6635 20.2258 23.6635 23.0926 20.7967Z"
          stroke="url(#paint1_linear_2286_68700)"
          strokeWidth="1.72104"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.9679 25.693C36.4253 28.1502 40.4094 28.1502 42.8666 25.693C46.5744 21.9852 45.8328 13.8281 45.8328 13.8281C45.8328 13.8281 37.6757 13.0866 33.9679 16.7943C31.5107 19.2516 31.5107 23.2356 33.9679 25.693Z"
          stroke="url(#paint2_linear_2286_68700)"
          strokeWidth="1.72104"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9453 21.7988C22.9453 21.7988 27.5348 27.5356 27.5348 39.0077"
          stroke="url(#paint3_linear_2286_68700)"
          strokeWidth="1.72104"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.1879 48.1887C43.1422 42.5599 35.7599 39.0098 27.5353 39.0098C19.3109 39.0098 11.9285 42.5599 6.88281 48.1887"
          stroke="url(#paint4_linear_2286_68700)"
          strokeWidth="1.72104"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2286_68700"
            x1="30.4075"
            y1="26.3896"
            x2="30.4075"
            y2="39.0106"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" stop-opacity="0.9" />
            <stop offset="1" stop-color="#F8F8F8" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2286_68700"
            x1="17.2112"
            y1="6.88379"
            x2="17.2112"
            y2="22.9468"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" stop-opacity="0.9" />
            <stop offset="1" stop-color="#F8F8F8" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2286_68700"
            x1="39.0092"
            y1="13.7676"
            x2="39.0092"
            y2="27.5359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" stop-opacity="0.9" />
            <stop offset="1" stop-color="#F8F8F8" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2286_68700"
            x1="25.24"
            y1="21.7988"
            x2="25.24"
            y2="39.0077"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" stop-opacity="0.9" />
            <stop offset="1" stop-color="#F8F8F8" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2286_68700"
            x1="27.5354"
            y1="39.0098"
            x2="27.5354"
            y2="48.1887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" stop-opacity="0.9" />
            <stop offset="1" stop-color="#F8F8F8" stop-opacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Partnerships",
    svg: (
      <svg
        width="47"
        height="43"
        viewBox="0 0 47 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7453 19.62C12.5948 19.62 14.2631 18.5965 15.4059 17.1417C17.1872 14.869 19.4233 12.9932 21.9711 11.6343C23.6302 10.7531 25.069 9.44056 25.7643 7.69887C26.2526 6.47865 26.5034 5.17639 26.5032 3.86208V2.40952C26.5032 1.95307 26.6845 1.51532 27.0073 1.19256C27.33 0.8698 27.7678 0.688477 28.2242 0.688477C29.5936 0.688477 30.9068 1.23245 31.8751 2.20072C32.8434 3.169 33.3874 4.48226 33.3874 5.85161C33.3874 8.49514 32.7907 10.9987 31.7283 13.236C31.1179 14.5165 31.9738 16.1779 33.392 16.1779M33.392 16.1779H40.5653C42.9197 16.1779 45.0285 17.7704 45.2786 20.1133C45.3819 21.0817 45.4347 22.0639 45.4347 23.0621C45.4442 29.3412 43.2984 35.4335 39.3559 40.3207C38.4656 41.4268 37.091 41.9936 35.6729 41.9936H26.4573C25.3489 41.9936 24.2452 41.8146 23.1919 41.4658L16.0461 39.0792C14.9931 38.729 13.8905 38.5508 12.7807 38.5515H9.07244M33.392 16.1779H28.2242M9.07244 38.5515C9.2629 39.0219 9.46943 39.4808 9.69201 39.9329C10.1441 40.8508 9.51303 41.9936 8.49187 41.9936H6.40826C4.36825 41.9936 2.47739 40.8049 1.88306 38.8544C1.08827 36.2458 0.685354 33.5337 0.687509 30.8068C0.687509 27.2431 1.36445 23.84 2.59443 20.7146C3.29661 18.9384 5.0865 17.8989 6.99801 17.8989H9.41435C10.4975 17.8989 11.1239 19.1748 10.5617 20.1019C8.60177 23.3281 7.56807 27.0318 7.57398 30.8068C7.57398 33.5467 8.10636 36.1604 9.07473 38.5515H9.07244Z"
          stroke="white"
          strokeWidth="1.37684"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Youth-Centered Curriculum",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.60938 27.5366H46.4724M8.60938 36.1418H46.4724M8.60938 44.7471H46.4724M12.912 10.3262H42.1698C43.3109 10.3262 44.4053 10.7795 45.2122 11.5864C46.0191 12.3933 46.4724 13.4877 46.4724 14.6288C46.4724 15.7699 46.0191 16.8643 45.2122 17.6712C44.4053 18.4781 43.3109 18.9314 42.1698 18.9314H12.912C11.7709 18.9314 10.6765 18.4781 9.86958 17.6712C9.06268 16.8643 8.60938 15.7699 8.60938 14.6288C8.60938 13.4877 9.06268 12.3933 9.86958 11.5864C10.6765 10.7795 11.7709 10.3262 12.912 10.3262Z"
          stroke="white"
          strokeWidth="1.10147"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Empowerment ",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0848 14.8921L30.4938 11.4831C34.3322 7.64469 39.3574 6.05254 44.6757 5.79236C46.7444 5.69117 47.7786 5.64057 48.6079 6.46997C49.4375 7.29936 49.3867 8.33364 49.2855 10.4022C49.0253 15.7205 47.4332 20.7458 43.5949 24.5841L40.1858 27.9932C37.3784 30.8005 36.5803 31.5989 37.1696 34.644C37.7513 36.9701 38.3142 39.2227 36.6228 40.9141C34.5711 42.9658 32.6995 42.9658 30.6478 40.9141L14.1638 24.4302C12.1121 22.3784 12.112 20.5069 14.1638 18.4551C15.8552 16.7637 18.1078 17.3267 20.4339 17.9083C23.4791 18.4977 24.2774 17.6995 27.0848 14.8921Z"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinejoin="round"
        />
        <path
          d="M39 16.0635H39.021"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.74219 49.3369L17.2158 37.8633"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
        <path
          d="M19.5078 49.3365L24.0973 44.7471"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
        <path
          d="M5.74219 35.568L10.3316 30.9785"
          stroke="white"
          strokeWidth="1.6522"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateActive = () => {
      const children = Array.from(scroller.children) as HTMLElement[];
      if (children.length === 0) return;
      const scrollerRect = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

      let closest = 0;
      let closestDistance = Infinity;
      children.forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const childCenter = r.left + r.width / 2;
        const dist = Math.abs(childCenter - scrollerCenter);
        if (dist < closestDistance) {
          closestDistance = dist;
          closest = idx;
        }
      });
      setActiveIndex(closest);
    };

    updateActive();
    scroller.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      scroller.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  function scrollToIndex(i: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const children = Array.from(scroller.children) as HTMLElement[];
    const idx = Math.max(0, Math.min(children.length - 1, i));
    const child = children[idx];
    if (child)
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[40vh] flex flex-col justify-center items-center ">
        {/* Vertical lines with gradients */}
        <div className="h-full w-px absolute left-[43.5%] translate-x-[40%] bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="h-full w-px absolute left-[42.5%] translate-x-[40%] bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="h-full w-px absolute right-[43.5%] translate-x-[40%] bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="h-full w-px absolute right-[42.5%] translate-x-[40%] bg-linear-to-b from-transparent via-white/10 to-transparent"></div>

        {/* Horizontal lines with gradients */}
        <div className="h-px w-screen absolute top-[22%] translate-y-[10%] bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="h-px w-screen absolute bottom-[32%] translate-y-[10%] bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="h-px w-screen absolute bottom-[5%] translate-y-[10%] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>

        <div className="flex items-center justify-center mx-auto px-4 max-w-full relative">
          <div
            ref={scrollerRef}
            className="flex gap-8 items-center md:justify-center justify-start w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory relative"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                className="flex flex-col items-center shrink-0 w-[280px] md:w-[200px] snap-center md:first:ml-0 md:last:mr-0 first:ml-[calc(50%-140px)] last:mr-[calc(50%-140px)]"
                key={index}
                initial={{ opacity: 0.3 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                viewport={{
                  amount: 0.8,
                  once: false,
                }}
              >
                <div
                  className="rounded-full flex p-10 w-[120px] h-[120px] items-center justify-center relative my-5"
                  style={{ border: "0.55px solid #FFFFFF1A" }}
                >
                  {service.svg}
                </div>
                <div className="mt-2">
                  <Text>{service.title}</Text>
                </div>
              </motion.div>
            ))}
          </div>

          {/* mobile controls: prev/next buttons and dots */}
          {activeIndex > 0 && (
            <div className="md:hidden absolute left-[36%] flex items-center z-50 pointer-events-auto">
              <button
                aria-label="Previous"
                onClick={() => scrollToIndex(activeIndex - 1)}
                className="ml-2 p-3 rounded-full bg-black/40 hover:bg-black/50 text-white shadow-lg"
              >
                <ArrowCircleLeft size="40" color="#ffffff" variant="Bulk" />
              </button>
            </div>
          )}
          {activeIndex < services.length - 1 && (
            <div className="md:hidden right-[36%] absolute flex items-center z-100 pointer-events-auto">
              <button
                aria-label="Next"
                onClick={() => scrollToIndex(activeIndex + 1)}
                className="mr-2 p-3 rounded-full bg-black/40 hover:bg-black/50 text-white shadow-lg"
              >
                <ArrowCircleRight size="40" color="#ffffff" variant="Bulk" />
              </button>
            </div>
          )}

          <div className="md:hidden absolute -bottom-5 left-0 right-0 flex items-center justify-center gap-2 z-50 pointer-events-none">
            {services.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Button title="Join our mission" />
      </div>
    </div>
  );
};

export default Services;
