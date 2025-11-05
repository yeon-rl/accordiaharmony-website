import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="text-white ">
      <div className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10">
        <Navbar />
      </div>

      {/* Who we are */}
      <StaticBg scroll={true}>
        <div className="w-[90%] md:w-[80%] max-w-360 mx-auto relative z-50">
          <div className="mt-14 md:mt-28">
            <Text
              type="heading"
              className=" text-center text-3xl! md:text-[48px] font-semibold!"
            >
              LifeSkills Connect
            </Text>
            <Text className="text-center md:text-xl! my-3 max-w-7xl mx-auto">
              Our flagship platform is designed to equip young people aged 17–21
              with the skills they need for life and work. Courses cover
              financial literacy, career preparation, online safety, and
              personal development, all delivered through interactive, engaging
              experiences.
            </Text>

            <div className="flex flex-col gap-8 mt-8 md:mt-16">
              <div className="grid md:grid-cols-7 gap-4 md:gap-8">
                <div className="md:col-span-3 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <div className="p-5 md:p-10">
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Learning life skills module
                    </Text>
                    <Text className="text-[#545A65]">
                      Receive soft, supportive words each day to uplift your
                      mind and spirit.
                    </Text>
                  </div>

                  <div>
                    <Image
                      src="/images/lifeskill-module.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:col-span-4 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <div className="p-5 md:p-10">
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Integrated Ai
                    </Text>
                    <Text className="text-[#545A65]">
                      Stay productive with light, no-pressure to-dos that feel
                      good to complete.
                    </Text>
                  </div>

                  <div>
                    <Image
                      src="/images/integrated-ai.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-7 gap-4 md:gap-8">
                <div className="md:col-span-4 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <div className="p-5 md:p-10">
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Safety tools
                    </Text>
                    <Text className="text-[#545A65]">
                      Check in with your feelings and journal your thoughts in a
                      calming, private space.
                    </Text>
                  </div>

                  <div>
                    <Image
                      src="/images/safety-tools.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <div className="p-5 md:p-10">
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Gammified learning
                    </Text>
                    <Text className="text-[#545A65]">
                      Log your water, sleep, and wellness in one peaceful
                      overwhelm.
                    </Text>
                  </div>

                  <div>
                    <Image
                      src="/images/gammified.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StaticBg>

      {/* Product */}
      <section className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10 mb-20">
        <div className="my-18 md:my-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-[30%] w-full">
              <Text
                type="subheading"
                className="text-[28px]! font-bold! mt-1 text-center! md:text-left! w-full"
              >
                About Product
              </Text>
            </div>
            <div className="md:w-[70%]">
              <Text className="my-3 text-base! md:text-xl! text-center md:text-left">
                LifeSkills Connect is a youth platform for ages 17–21, designed
                to build real-life skills, confidence, and support beyond
                school. It offers interactive lessons, an AI mentor, and a
                supportive community covering topics like money management,
                digital safety, communication, careers, and mental well-being.
                Users learn at their own pace, earn badges, and track progress
                with safeguarding tools, multilingual access, and free or
                premium options. Our mission: to help young people gain
                practical skills, discover their potential, and step into
                adulthood with confidence.
              </Text>

              <div className="flex justify-center md:justify-start">
                <Button title="Join waiting list" className="mt-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-10">
          <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-14">
            <div className="md:w-[60%]">
              <Text className="text-[#171719] font-semibold! text-[34px]!">
                Skill Forge
              </Text>
              <Text className="text-[#545A65]">
                a modern learning environment where young people gain hands-on
                technical, creative, and vocational skills that align with
                future job markets.{" "}
              </Text>

              <ul>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Custom sleep timers</Text>
                </li>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Curated Sound Packs</Text>
                </li>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Offline Listening Mode</Text>
                </li>
              </ul>
            </div>
            <div className="md:w-[40%]">
              <Image
                src="/images/phone1.png"
                alt="LifeSkills Connect App"
                width={1000}
                height={1000}
                className="mx-auto w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row  items-center justify-between gap-5 md:gap-14">
            <div className="md:w-[40%] order-1 md:order-0">
              <Image
                src="/images/phone1.png"
                alt="LifeSkills Connect App"
                width={1000}
                height={1000}
                className="mx-auto w-full h-auto"
              />
            </div>
            <div className="md:w-[60%] order-0 md:order-1">
              <Text className="text-[#171719] font-semibold! text-[34px]!">
                Playtogether
              </Text>
              <Text className="text-[#545A65]">
                A safe and inspiring online community where young people can
                connect, collaborate, and grow together. Playground encourages
                teamwork, self-expression, and shared learning in a supportive
                environment.
              </Text>

              <ul>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Custom sleep timers</Text>
                </li>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Curated Sound Packs</Text>
                </li>
                <li className="flex items-center gap-3 my-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_2299_68954)">
                      <circle
                        cx="8.58333"
                        cy="8.58333"
                        r="8.58333"
                        fill="url(#paint0_linear_2299_68954)"
                      />
                      <path
                        d="M12.6228 6.19141L7.56473 11.2494L5.26562 8.95033"
                        stroke="white"
                        strokeWidth="1.50208"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_2299_68954"
                        x="0"
                        y="-0.858333"
                        width="17.1641"
                        height="18.0253"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-0.858333" />
                        <feGaussianBlur stdDeviation="1.2875" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_2299_68954"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2299_68954"
                        x1="8.58333"
                        y1="17.1667"
                        x2="8.58333"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.00213802" stopColor="#FEB954" />
                        <stop offset="0.172524" stopColor="#E14747" />
                        <stop offset="0.564941" stopColor="#171719" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Text className="text-[#545A65]">Offline Listening Mode</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
