"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import StaticBg from "../../components/StaticBg";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import FAQSection from "@/components/FAQ";
import { useRouter } from "next/navigation";

const coreValues = [
  {
    icon: (
      <svg
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.62098 6.83049V7.66883C7.62234 8.07509 7.46201 8.4664 7.17534 8.75444C6.88865 9.04384 6.49871 9.20554 6.09244 9.20689H5.22287H5.22423C4.75275 9.21505 4.34516 9.53434 4.22422 9.98951C4.10194 10.4433 4.29623 10.9229 4.69977 11.1648C6.01638 12.0113 6.80713 13.4732 6.79353 15.0386C6.79353 15.3171 6.90359 15.5834 7.09924 15.7804C7.29626 15.9761 7.56255 16.0861 7.84109 16.0861C10.1305 15.8728 8.13321 11.5779 7.54761 10.9977C8.86557 10.4148 9.71612 9.10912 9.71476 7.6689V5.78436C9.71612 5.50583 9.60606 5.23952 9.40905 5.04251C9.21204 4.8455 8.94574 4.73544 8.66856 4.7368H2.89946V1.1879C2.90354 0.83871 3.05843 0.507193 3.32611 0.282982C3.59377 0.057436 3.94705 -0.0403907 4.29213 0.0153176L15.5354 1.9936C16.1006 2.09142 16.5136 2.58327 16.5096 3.15667V14.6622C16.5408 17.4122 13.39 19.1199 13.7038 22.2097V23.8945L3.43348 23.8959V22.7858C3.43756 20.9557 2.7093 19.199 1.41308 17.9068C0.505455 17.0074 -0.00404541 15.7818 2.41933e-05 14.5046V8.01414C0.00410041 7.35789 0.536725 6.82937 1.19297 6.83072L7.62098 6.83049Z"
          fill="#4285F4"
        />
      </svg>
    ),
    title: "Empowerment",
    text: "We help young people realise their potential and take control of their futures.",
  },
  {
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.147e-07"
          width="51.6667"
          height="51.6667"
          rx="25.8333"
          fill="#F4F4F4"
        />
        <path
          d="M27.669 22.8257C27.669 23.8391 26.8478 24.6602 25.8345 24.6602C24.8212 24.6602 24 23.8391 24 22.8257C24 21.8124 24.8212 20.9912 25.8345 20.9912C26.8478 20.9912 27.669 21.8124 27.669 22.8257Z"
          fill="#4285F4"
        />
        <path
          d="M25.4149 14.8367C21.1376 15.0409 17.6369 18.5635 17.4536 22.8352C17.3487 25.231 18.2507 27.4063 19.7652 28.9939C20.6988 29.969 21.3639 31.1953 21.579 32.5318C21.6161 32.7567 21.6369 32.9718 21.6369 33.1717H30.0231C30.0231 32.9718 30.0439 32.7578 30.081 32.5318C30.3016 31.1952 30.9666 29.9689 31.9002 28.9883C33.3361 27.4836 34.2163 25.4557 34.2163 23.2129C34.2163 18.4433 30.2328 14.6016 25.4163 14.8364L25.4149 14.8367ZM29.5765 22.0864C29.6136 22.2807 29.6289 22.4849 29.6289 22.6891C29.6289 22.8933 29.6136 23.0975 29.5765 23.2919C29.5448 23.4808 29.6343 23.6697 29.7807 23.7898L30.105 24.0409C30.2568 24.161 30.2994 24.3762 30.2 24.5498L29.6234 25.5457C29.5295 25.7182 29.3188 25.787 29.1408 25.7138L28.7422 25.5566C28.5642 25.4834 28.36 25.5249 28.2071 25.6505C27.9036 25.8918 27.5683 26.0905 27.2003 26.2325C27.0169 26.3002 26.8804 26.4574 26.8542 26.6518L26.7908 27.0711C26.7646 27.2655 26.5965 27.4064 26.4032 27.4064H25.2501C25.0557 27.4064 24.8886 27.2644 24.8624 27.0711L24.7991 26.6518C24.7729 26.4574 24.6364 26.3002 24.453 26.2325C24.0861 26.0905 23.7508 25.8918 23.4462 25.6505C23.2944 25.5249 23.0902 25.4823 22.9111 25.5566L22.5125 25.7138C22.3345 25.787 22.1249 25.7193 22.0299 25.5457L21.4533 24.5498C21.3539 24.3773 21.3954 24.1621 21.5483 24.0409L21.8726 23.7898C22.0189 23.6697 22.1085 23.4807 22.0768 23.2919C22.0397 23.0975 22.0244 22.8933 22.0244 22.6891C22.0244 22.4849 22.0397 22.2796 22.0768 22.0864C22.1085 21.8974 22.0189 21.7085 21.8726 21.5884L21.5483 21.3373C21.3965 21.2172 21.3539 21.002 21.4533 20.8284L22.0299 19.8325C22.1238 19.66 22.3345 19.5912 22.5125 19.6644L22.9111 19.8216C23.0891 19.8948 23.2933 19.8533 23.4462 19.7277C23.7497 19.4864 24.085 19.2877 24.453 19.1457C24.6364 19.078 24.7729 18.9208 24.7991 18.7264L24.8624 18.3071C24.8886 18.1127 25.0568 17.9719 25.2501 17.9719H26.4032C26.5976 17.9719 26.7646 18.1138 26.7908 18.3071L26.8542 18.7264C26.8804 18.9208 27.0169 19.078 27.2003 19.1457C27.5672 19.2877 27.9025 19.4864 28.2071 19.7277C28.3589 19.8533 28.5631 19.8959 28.7422 19.8216L29.1408 19.6644C29.3188 19.5912 29.5284 19.6589 29.6234 19.8325L30.2 20.8284C30.2994 21.001 30.2579 21.2161 30.105 21.3373L29.7807 21.5884C29.6343 21.7085 29.5448 21.8975 29.5765 22.0864Z"
          fill="#4285F4"
        />
        <path
          d="M30.0269 33.1719V34.2202C30.0269 34.7967 29.5552 35.2685 28.9786 35.2685H28.7165C28.7165 36.1388 28.0144 36.8409 27.1441 36.8409H24.5234C23.6531 36.8409 22.951 36.1388 22.951 35.2685H22.6889C22.1124 35.2685 21.6406 34.7967 21.6406 34.2202V33.1719H30.0269Z"
          fill="#4285F4"
        />
      </svg>
    ),
    title: "Integrity",
    text: "We act with honesty, transparency, and respect in every relationship.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.625 0C9.3258 0 7.07822 0.681794 5.1665 1.95917C3.25478 3.23654 1.76477 5.05211 0.884905 7.1763C0.00503689 9.30049 -0.225177 11.6379 0.223376 13.8929C0.671929 16.1479 1.7791 18.2193 3.40489 19.8451C5.03067 21.4709 7.10205 22.5781 9.35708 23.0266C11.6121 23.4752 13.9495 23.245 16.0737 22.3651C18.1979 21.4852 20.0135 19.9952 21.2908 18.0835C22.5682 16.1718 23.25 13.9242 23.25 11.625C23.25 8.54186 22.0252 5.58499 19.8451 3.40488C17.665 1.22477 14.7081 0 11.625 0ZM11.625 4.35937C11.9124 4.35937 12.1934 4.4446 12.4323 4.60427C12.6713 4.76394 12.8575 4.99089 12.9675 5.25641C13.0775 5.52194 13.1063 5.81411 13.0502 6.09599C12.9941 6.37787 12.8557 6.63679 12.6525 6.84001C12.4493 7.04324 12.1904 7.18163 11.9085 7.2377C11.6266 7.29377 11.3344 7.26499 11.0689 7.15501C10.8034 7.04503 10.5764 6.85878 10.4168 6.61981C10.2571 6.38085 10.1719 6.0999 10.1719 5.8125C10.1719 5.42711 10.325 5.0575 10.5975 4.78498C10.87 4.51247 11.2396 4.35937 11.625 4.35937ZM18.4422 8.6634C16.7329 9.37911 14.9238 9.82776 13.0781 9.9936V12.744L15.8935 17.8114C15.9868 17.98 16.0094 18.1787 15.9562 18.3639C15.9031 18.5492 15.7786 18.7057 15.6101 18.7992C15.4416 18.8926 15.2429 18.9154 15.0576 18.8624C14.8724 18.8094 14.7157 18.6851 14.6221 18.5167L11.625 13.1214L8.62792 18.5167C8.53428 18.6851 8.37762 18.8094 8.19236 18.8624C8.0071 18.9154 7.80839 18.8926 7.63989 18.7992C7.47139 18.7057 7.34689 18.5492 7.29374 18.3639C7.24059 18.1787 7.26314 17.98 7.35643 17.8114L10.1719 12.744V9.9936C8.32624 9.82776 6.51708 9.37911 4.8078 8.6634C4.63023 8.58933 4.48928 8.44785 4.41589 8.26999C4.34249 8.09214 4.34264 7.89244 4.41629 7.71469C4.48995 7.53695 4.6311 7.39567 4.80878 7.32186C4.98646 7.24805 5.18617 7.24773 5.36408 7.32097C7.33865 8.18367 9.4702 8.62899 11.625 8.62899C13.7798 8.62899 15.9114 8.18367 17.8859 7.32097C17.9741 7.28419 18.0687 7.26516 18.1643 7.26497C18.2598 7.26479 18.3545 7.28346 18.4428 7.31991C18.5311 7.35637 18.6114 7.40988 18.679 7.4774C18.7466 7.54492 18.8003 7.62511 18.8368 7.71339C18.8734 7.80167 18.8922 7.8963 18.8922 7.99185C18.8922 8.08741 18.8733 8.18202 18.8366 8.27026C18.7999 8.35851 18.7462 8.43866 18.6786 8.50612C18.6109 8.57358 18.5306 8.62702 18.4422 8.6634Z"
          fill="#4285F4"
        />
      </svg>
    ),
    title: "Inclusion",
    text: "We celebrate diversity and ensure that every young person feels seen and valued.",
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.03704 0H4.01852C2.95281 0 1.9305 0.423552 1.17662 1.17662C0.423552 1.9305 0 2.95281 0 4.01852C0 8.29583 0 15.8153 0 20.0926C0 21.1583 0.423552 22.1806 1.17662 22.9345C1.9305 23.6876 2.95281 24.1111 4.01852 24.1111C8.29583 24.1111 15.8153 24.1111 20.0926 24.1111C21.1583 24.1111 22.1806 23.6876 22.9345 22.9345C23.6876 22.1806 24.1111 21.1583 24.1111 20.0926V4.01852C24.1111 2.95281 23.6876 1.9305 22.9345 1.17662C22.1806 0.423552 21.1583 0 20.0926 0H16.0741V6.02778H16.8625C17.4733 6.02778 18.0319 6.37417 18.3027 6.9215C18.5744 7.46962 18.5117 8.12303 18.1412 8.60927L13.3342 14.9183C13.0304 15.3178 12.5571 15.5517 12.0556 15.5517C11.554 15.5517 11.0807 15.3178 10.7769 14.9183L5.96991 8.60927C5.5994 8.12303 5.53671 7.46962 5.80837 6.9215C6.07921 6.37417 6.63779 6.02778 7.2486 6.02778H8.03704V0ZM8.03704 20.0926H16.0741C16.5177 20.0926 16.8778 19.7325 16.8778 19.2889C16.8778 18.8452 16.5177 18.4852 16.0741 18.4852H8.03704C7.59339 18.4852 7.23333 18.8452 7.23333 19.2889C7.23333 19.7325 7.59339 20.0926 8.03704 20.0926Z"
          fill="#4285F4"
        />
      </svg>
    ),
    title: "Innovation",
    text: "We apply creativity and technology to design real-world solutions that create social change.",
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.2197 18.1473C10.4645 18.3672 5.74361 13.6462 5.96442 7.89201C-0.0336085 9.62861 -2.04126 17.225 2.42316 21.6883C6.90018 26.1653 14.4881 24.1252 16.2195 18.1471L16.2197 18.1473ZM7.89168 5.96395C9.62828 -0.0340808 17.2246 -2.04066 21.688 2.42269C26.1513 6.88605 24.1437 14.4825 18.1457 16.219C18.3676 10.4648 13.6467 5.74395 7.89142 5.96368L7.89168 5.96395ZM7.6593 9.5229L7.59231 7.59266C9.72877 7.41681 11.9051 8.06998 13.6174 9.5229H7.6593ZM16.452 14.5881L16.518 16.5184C14.3815 16.6942 12.2052 16.041 10.4929 14.5881H16.452ZM9.03239 12.9803C8.62834 12.3983 8.30908 11.7765 8.07147 11.1307H15.0784C15.4825 11.7127 15.8017 12.3344 16.0393 12.9803H9.03239Z"
          fill="#4285F4"
        />
      </svg>
    ),
    title: "Purpose",
    text: "Every initiative we deliver is guided by one question: how does this improve lives?",
  },
];

const About = () => {
  const router = useRouter();

  return (
    <div className="text-white ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10"
      >
        <Navbar />
      </motion.div>

      {/* Who we are */}
      <StaticBg height="h-fit!">
        <div className="w-[90%] max-w-360 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-16 md:my-32 relative z-50"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=""
            >
              <Header number={1} title="Who We Are" />
              <div>
                <Text type="subheading">Who We Are</Text>
                <Text className="my-3 text-base">
                  Accordia Harmony C.I.C. is a United Kingdom–based Community
                  Interest Company dedicated to empowering young people with
                  confidence, life skills, and knowledge they need to thrive.{" "}
                  <br /> <br /> We create solutions that make learning
                  practical, engaging, and relevant. Our focus is on bridging
                  the gap between classroom education and the realities of
                  everyday life, preparing young people for independence,
                  employment, and personal growth.
                </Text>
                <Text className="my-5 text-base">
                  Our approach combines innovation, technology, and social
                  purpose to build tools that make a lasting impact. We work
                  collaboratively with educators, youth organisations, and
                  community partners to ensure that our programmes truly reflect
                  the needs of young people today.
                  <br />
                </Text>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/whoWeAreImage.png"
                alt="About Hero"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </StaticBg>

      <section className="w-[90%] max-w-360 mx-auto relative z-50">
        {/* Our Purpose */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10 relative z-50 "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-0"
          >
            <Image
              src="/images/purposeImage.png"
              alt="About Hero"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-0 md:order-1"
          >
            {/* <Header number={2} title="Our Purpose" /> */}
            <div>
              <Text type="subheading" className="text-3xl! md:text-[41px]!">
                We exist to make opportunity accessible.
              </Text>
              <Text className="my-3 text-base">
                Accordia Harmony C.I.C. was founded to address a simple truth:
                many young people Lack practical skills or confidence to
                navigate adulthood successfully. <br /> Through our platforms,
                we create spaces where young people can learn about finance,
                wellbeing, careers, relationships, and digital safety in a way
                that feels relatable and empowering. <br /> <br /> Our goal is
                not just to teach skills, but to help young people discover who
                they are, what they can achieve, and how they can contribute
                positively to the world around them
              </Text>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="my-18 md:my-32"
        >
          <div className="flex flex-col md:flex-row items-start justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[30%]"
            >
              <Text type="subheading" className="text-[28px]! font-bold! mt-1">
                Our mission
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-[70%]"
            >
              <Text className="my-3 text-base! md:text-[25px]!">
                Our mission is to prepare young people for independent living
                and lifelong success by equipping them with the tools,
                confidence, and mindset they need to lead purposeful lives.{" "}
              </Text>
            </motion.div>
          </div>
        </motion.div>

        {/* Get In Touch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-32"
        >
          <div className="bg-[url('/images/ctabanner.png')] bg-cover bg-no-repeat bg-center rounded-2xl p-8 md:p-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text type="heading" className="font-bold max-w-lg">
                Get Latest Update from our news letter
              </Text>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 flex items-center cursor-pointer justify-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full bg-gradient-to-b from-[#1b1b1b] to-[#0d0d0d] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.08),inset_-2px_-2px_6px_rgba(0,0,0,0.6)] text-white font-semibold text-lg"
              onClick={() => router.push("/newsletter")}
            >
              <span className="text-2xl leading-none">•</span>
              <span className="tracking-wide text-sm md:text-base">
                Learn&nbsp;More
              </span>
            </motion.button>

            <div className="absolute bottom-0 right-[13%]">
              <Image
                src="/images/megaphone.png"
                alt="About Hero"
                width={1000}
                height={1000}
                className="w-[297px] h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div>
          <div className=" text-white md:py-20 my-20 ">
            <div className="text-center mb-16">
              <Text
                type="subheading"
                className="font-bold tracking-tight text-3xl!"
              >
                Our Core Values
              </Text>
            </div>

            <div className=" mx-auto space-y-5">
              {/* Top row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-5">
                {coreValues.slice(0, 3).map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#FFFFFF12] border-none text-left w-full rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300 shadow-none h-[260px] flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="flex flex-col gap-4 h-full">
                          <div className="bg-[#F4F4F4] w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                            {value.icon}
                          </div>
                          <Text className="text-xl font-bold! text-white shrink-0">
                            {value.title}
                          </Text>
                          <Text className="text-white text-sm leading-relaxed">
                            {value.text}
                          </Text>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Bottom row - 2 cards */}
              <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
                {coreValues.slice(3).map((value, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 3) * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#FFFFFF12] border-none text-left w-full rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300 shadow-none h-[260px] flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="flex flex-col gap-4 h-full">
                          <div className="bg-[#F4F4F4] w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                            {value.icon}
                          </div>
                          <Text className="text-xl font-bold! text-white shrink-0">
                            {value.title}
                          </Text>
                          <Text className="text-white text-sm leading-relaxed">
                            {value.text}
                          </Text>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 relative z-50 "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/storyImage.png"
              alt="About Hero"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=""
          >
            {/* <Header number={2} title="Our Purpose" /> */}
            <div>
              <Text type="subheading" className=" text-3xl! md:text-[41px]!">
                Our story
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                Our founders brought together their experience in technology,
                education, and social development to create something different:
                a company that uses innovation for good. Guided by a shared
                purpose, they combined their knowledge and expertise to build an
                organisation that empowers rather than disrupts, supports rather
                than replaces, and connects rather than divides. Their vision
                was simple yet powerful: to harness the potential of technology
                to create real opportunities for young people and lasting
                benefits for communities.
              </Text>
            </div>
          </motion.div>
        </motion.div>

        {/* our services */}
        <div className="flex items-center justify-center mt-20 md:mt-40">
          <Header number={2} title="Our Services" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 relative z-50 "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-[40%]"
          >
            <Image
              src="/images/serve.png"
              alt="About Hero"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-[55%]"
          >
            {/* <Header number={2} title="Our Purpose" /> */}
            <div>
              <Text type="subheading" className=" text-3xl! md:text-[41px]!">
                Empowering Futures Through Purpose-Driven Products
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                From digital platforms like LifeSkills Connect to community-led
                initiatives, Accordia builds tools that equip young people to
                learn, grow, and thrive.
              </Text>

              <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
                <button className="cursor-pointer">
                  <svg
                    width="118"
                    height="34"
                    viewBox="0 0 118 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M113.333 34H4.35897C1.96263 34 0 32.0864 0 29.75V4.25C0 1.91357 1.96263 3.8147e-06 4.35897 3.8147e-06H113.333C115.73 3.8147e-06 117.692 1.91357 117.692 4.25V29.75C117.692 32.0864 115.73 34 113.333 34Z"
                      fill="white"
                    />
                    <path
                      d="M113.333 0.681066C115.352 0.681066 116.994 2.28225 116.994 4.25V29.75C116.994 31.7178 115.352 33.3189 113.333 33.3189H4.35897C2.34077 33.3189 0.698525 31.7178 0.698525 29.75V4.25C0.698525 2.28225 2.34077 0.681066 4.35897 0.681066H113.333ZM113.333 3.8147e-06H4.35897C1.96263 3.8147e-06 0 1.91357 0 4.25V29.75C0 32.0864 1.96263 34 4.35897 34H113.333C115.73 34 117.692 32.0864 117.692 29.75V4.25C117.692 1.91357 115.73 3.8147e-06 113.333 3.8147e-06Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M8.44336 6.40757C8.18727 6.66894 8.03906 7.07588 8.03906 7.60288V26.4006C8.03906 26.9276 8.18727 27.3346 8.44336 27.5959L8.50656 27.6533L19.3103 17.1239V16.8753L8.50656 6.34594L8.44336 6.40757Z"
                      fill="black"
                    />
                    <path
                      d="M24.2144 20.6357L20.6172 17.1242V16.8756L24.2188 13.364L24.2994 13.4097L28.5647 15.7759C29.7819 16.4474 29.7819 17.5524 28.5647 18.2281L24.2994 20.5901L24.2144 20.6357Z"
                      fill="black"
                    />
                    <path
                      d="M23.6429 21.2439L19.9607 17.6537L9.09375 28.25C9.49804 28.6644 10.1573 28.7144 10.9071 28.3L23.6429 21.2439Z"
                      fill="black"
                    />
                    <path
                      d="M23.6429 12.7555L10.9071 5.69946C10.1573 5.28933 9.49804 5.33927 9.09375 5.75364L19.9607 16.3457L23.6429 12.7555Z"
                      fill="black"
                    />
                    <path
                      d="M41.3343 8.7069C41.3343 9.41665 41.1164 9.98509 40.687 10.409C40.1933 10.9116 39.5504 11.1645 38.7625 11.1645C38.0095 11.1645 37.3666 10.9073 36.8391 10.4005C36.3106 9.88627 36.0469 9.25515 36.0469 8.49971C36.0469 7.74427 36.3106 7.11315 36.8391 6.60315C37.3666 6.09209 38.0095 5.83496 38.7625 5.83496C39.1374 5.83496 39.4948 5.9104 39.8359 6.05065C40.1759 6.19196 40.4527 6.38321 40.6532 6.61909L40.1977 7.06746C39.8479 6.66477 39.3717 6.46609 38.7625 6.46609C38.2133 6.46609 37.7371 6.65309 37.3328 7.03027C36.9328 7.40852 36.7323 7.89834 36.7323 8.49971C36.7323 9.10109 36.9328 9.59515 37.3328 9.9734C37.7371 10.3463 38.2133 10.5376 38.7625 10.5376C39.3455 10.5376 39.8359 10.3463 40.2228 9.96915C40.4778 9.71946 40.6227 9.37521 40.6609 8.93534H38.7625V8.32121H41.2951C41.3256 8.45402 41.3343 8.58259 41.3343 8.7069Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M45.3571 6.57796H42.9781V8.19296H45.1228V8.80708H42.9781V10.4221H45.3571V11.0479H42.3047V5.95215H45.3571V6.57796Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M48.1873 11.0479H47.5139V6.57796H46.0547V5.95215H49.6476V6.57796H48.1873V11.0479Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M52.25 11.0479V5.95215H52.9224V11.0479H52.25Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M55.9061 11.0479H55.238V6.57796H53.7734V5.95215H57.3707V6.57796H55.9061V11.0479Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M64.1688 10.392C63.6534 10.9073 63.0148 11.1645 62.2531 11.1645C61.487 11.1645 60.8484 10.9073 60.3329 10.392C59.8186 9.87777 59.5625 9.24665 59.5625 8.49971C59.5625 7.75277 59.8186 7.12165 60.3329 6.6074C60.8484 6.09209 61.487 5.83496 62.2531 5.83496C63.0104 5.83496 63.649 6.09209 64.1645 6.61165C64.6832 7.13015 64.9393 7.75702 64.9393 8.49971C64.9393 9.24665 64.6832 9.87777 64.1688 10.392ZM60.831 9.9649C61.2189 10.3463 61.6908 10.5376 62.2531 10.5376C62.811 10.5376 63.2872 10.3463 63.6708 9.9649C64.0577 9.58346 64.2538 9.09365 64.2538 8.49971C64.2538 7.90577 64.0577 7.41596 63.6708 7.03452C63.2872 6.65309 62.811 6.46184 62.2531 6.46184C61.6908 6.46184 61.2189 6.65309 60.831 7.03452C60.4441 7.41596 60.248 7.90577 60.248 8.49971C60.248 9.09365 60.4441 9.58346 60.831 9.9649Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M65.8828 11.0479V5.95215H66.7001L69.2414 9.91527H69.2708L69.2414 8.93565V5.95215H69.9138V11.0479H69.212L66.5508 6.88927H66.5214L66.5508 7.87315V11.0479H65.8828Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.0348718"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M59.4025 18.4896C57.3549 18.4896 55.6821 20.0089 55.6821 22.1053C55.6821 24.1846 57.3549 25.7199 59.4025 25.7199C61.4545 25.7199 63.1273 24.1846 63.1273 22.1053C63.1273 20.0089 61.4545 18.4896 59.4025 18.4896ZM59.4025 24.2961C58.279 24.2961 57.3124 23.3919 57.3124 22.1053C57.3124 20.8016 58.279 19.9133 59.4025 19.9133C60.526 19.9133 61.497 20.8016 61.497 22.1053C61.497 23.3919 60.526 24.2961 59.4025 24.2961ZM51.285 18.4896C49.233 18.4896 47.5646 20.0089 47.5646 22.1053C47.5646 24.1846 49.233 25.7199 51.285 25.7199C53.3359 25.7199 55.0054 24.1846 55.0054 22.1053C55.0054 20.0089 53.3359 18.4896 51.285 18.4896ZM51.285 24.2961C50.1604 24.2961 49.1905 23.3919 49.1905 22.1053C49.1905 20.8016 50.1604 19.9133 51.285 19.9133C52.4085 19.9133 53.3752 20.8016 53.3752 22.1053C53.3752 23.3919 52.4085 24.2961 51.285 24.2961ZM41.6255 19.5978V21.1341H45.3884C45.2784 21.9926 44.9841 22.6238 44.533 23.0636C43.9837 23.5949 43.1283 24.1846 41.6255 24.1846C39.3098 24.1846 37.4965 22.3624 37.4965 20.1046C37.4965 17.8468 39.3098 16.0246 41.6255 16.0246C42.8777 16.0246 43.7887 16.5016 44.4611 17.12L45.5715 16.0373C44.6311 15.1618 43.38 14.4893 41.6255 14.4893C38.45 14.4893 35.7812 17.0085 35.7812 20.1046C35.7812 23.2007 38.45 25.7199 41.6255 25.7199C43.3419 25.7199 44.6311 25.1716 45.6445 24.1431C46.683 23.1306 47.0067 21.7068 47.0067 20.5572C47.0067 20.2002 46.9762 19.8719 46.9217 19.5978H41.6255ZM81.1244 20.7888C80.8182 19.9803 79.8734 18.4896 77.9489 18.4896C76.0418 18.4896 74.4541 19.9548 74.4541 22.1053C74.4541 24.1304 76.0255 25.7199 78.1319 25.7199C79.8352 25.7199 80.8182 24.7073 81.2224 24.1176L79.9584 23.2963C79.5366 23.8977 78.9623 24.2961 78.1319 24.2961C77.307 24.2961 76.7153 23.9274 76.336 23.2007L81.2955 21.2L81.1244 20.7888ZM76.068 21.9926C76.0255 20.5986 77.1784 19.8846 78.0044 19.8846C78.6518 19.8846 79.201 20.2002 79.3841 20.6518L76.068 21.9926ZM72.037 25.4999H73.6673V14.8749H72.037V25.4999ZM69.3671 19.2949H69.3126C68.9465 18.8721 68.248 18.4896 67.3631 18.4896C65.5062 18.4896 63.8084 20.0791 63.8084 22.1169C63.8084 24.1431 65.5062 25.7199 67.3631 25.7199C68.248 25.7199 68.9465 25.3342 69.3126 24.8986H69.3671V25.4171C69.3671 26.7994 68.6098 27.5421 67.3882 27.5421C66.3921 27.5421 65.7743 26.8408 65.5193 26.2511L64.1015 26.8281C64.5101 27.7864 65.5923 28.9658 67.3882 28.9658C69.2996 28.9658 70.9124 27.8693 70.9124 25.2014V18.7095H69.3671V19.2949ZM67.5026 24.2961C66.3791 24.2961 65.4386 23.3792 65.4386 22.1169C65.4386 20.843 66.3791 19.9133 67.5026 19.9133C68.6098 19.9133 69.4827 20.843 69.4827 22.1169C69.4827 23.3792 68.6098 24.2961 67.5026 24.2961ZM88.7569 14.8749H84.8578V25.4999H86.4837V21.4741H88.7569C90.5626 21.4741 92.3335 20.2002 92.3335 18.174C92.3335 16.1489 90.5583 14.8749 88.7569 14.8749ZM88.7994 19.9962H86.4837V16.3529H88.7994C90.0134 16.3529 90.7065 17.3357 90.7065 18.174C90.7065 18.9964 90.0134 19.9962 88.7994 19.9962ZM98.8501 18.4694C97.6754 18.4694 96.4538 18.9751 95.9514 20.0961L97.3942 20.6858C97.7048 20.0961 98.2758 19.9048 98.8796 19.9048C99.723 19.9048 100.578 20.3989 100.592 21.2712V21.3828C100.297 21.217 99.6674 20.9716 98.8926 20.9716C97.3387 20.9716 95.7553 21.8056 95.7553 23.3622C95.7553 24.7859 97.0281 25.7029 98.4589 25.7029C99.553 25.7029 100.157 25.2216 100.536 24.6616H100.592V25.4829H102.162V21.4072C102.162 19.5234 100.719 18.4694 98.8501 18.4694ZM98.654 24.2919C98.1222 24.2919 97.3812 24.0348 97.3812 23.3919C97.3812 22.5696 98.3053 22.254 99.1051 22.254C99.8211 22.254 100.157 22.4081 100.592 22.611C100.464 23.5949 99.5955 24.2919 98.654 24.2919ZM107.883 18.7021L106.014 23.308H105.959L104.026 18.7021H102.273L105.176 25.1387L103.52 28.7204H105.219L109.692 18.7021H107.883ZM93.2271 25.4999H94.8573V14.8749H93.2271V25.4999Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button className="cursor-pointer">
                  <svg
                    width="118"
                    height="34"
                    viewBox="0 0 118 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M117.041 30.079C117.041 31.8909 115.543 33.3586 113.689 33.3586H4.01207C2.15977 33.3586 0.65625 31.8909 0.65625 30.079V3.92546C0.65625 2.11441 2.15977 0.641602 4.01207 0.641602H113.689C115.543 0.641602 117.04 2.11441 117.04 3.92546L117.041 30.079Z"
                      fill="white"
                    />
                    <path
                      d="M113.333 0.681061C115.352 0.681061 116.994 2.28225 116.994 4.25V29.75C116.994 31.7178 115.352 33.3189 113.333 33.3189H4.35897C2.34077 33.3189 0.698525 31.7178 0.698525 29.75V4.25C0.698525 2.28225 2.34077 0.681061 4.35897 0.681061H113.333ZM113.333 0H4.35897C1.96263 0 0 1.91356 0 4.25V29.75C0 32.0864 1.96263 34 4.35897 34H113.333C115.73 34 117.692 32.0864 117.692 29.75V4.25C117.692 1.91356 115.73 0 113.333 0Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M26.2698 16.8171C26.2445 14.0776 28.5704 12.7448 28.6768 12.6827C27.3595 10.8102 25.3178 10.5543 24.6003 10.5339C22.8855 10.358 21.2221 11.5344 20.3485 11.5344C19.4576 11.5344 18.1124 10.5509 16.6626 10.5798C14.7969 10.6079 13.0516 11.661 12.0944 13.2964C10.1189 16.631 11.5922 21.5312 13.4849 24.2266C14.4317 25.5466 15.538 27.0205 16.986 26.9687C18.4027 26.9117 18.9319 26.0881 20.6415 26.0881C22.3354 26.0881 22.8323 26.9687 24.3091 26.9355C25.8295 26.9117 26.7867 25.6095 27.7004 24.2776C28.7945 22.7646 29.2339 21.2745 29.2513 21.198C29.2156 21.1861 26.2985 20.1007 26.2698 16.8171Z"
                      fill="black"
                    />
                    <path
                      d="M23.48 8.76081C24.242 7.83176 24.7633 6.56781 24.6186 5.28516C23.5158 5.33276 22.1366 6.02891 21.3424 6.93756C20.6397 7.73826 20.012 9.05066 20.1742 10.2849C21.413 10.375 22.6849 9.67541 23.48 8.76081Z"
                      fill="black"
                    />
                    <path
                      d="M42.7632 8.50691C42.7632 9.50736 42.4554 10.2605 41.8408 10.7662C41.2715 11.2329 40.4625 11.4666 39.4146 11.4666C38.895 11.4666 38.4504 11.4445 38.0781 11.4003V5.93396C38.5637 5.85746 39.0868 5.81836 39.6517 5.81836C40.6499 5.81836 41.4023 6.03001 41.9097 6.45331C42.4781 6.93186 42.7632 7.61611 42.7632 8.50691ZM41.7998 8.53156C41.7998 7.88301 41.6237 7.38576 41.2715 7.03896C40.9193 6.69301 40.4049 6.51961 39.7276 6.51961C39.4399 6.51961 39.1949 6.53831 38.9918 6.57741V10.7331C39.1042 10.7501 39.31 10.7577 39.609 10.7577C40.3082 10.7577 40.8478 10.5682 41.2279 10.1891C41.608 9.80996 41.7998 9.25746 41.7998 8.53156Z"
                      fill="black"
                    />
                    <path
                      d="M47.8688 9.381C47.8688 9.99725 47.6884 10.5022 47.3274 10.8983C46.9491 11.3054 46.4478 11.5086 45.8219 11.5086C45.2186 11.5086 44.7382 11.3139 44.3799 10.9229C44.0225 10.5328 43.8438 10.0406 43.8438 9.4473C43.8438 8.8268 44.0277 8.31765 44.3973 7.9224C44.767 7.52715 45.2639 7.3291 45.8899 7.3291C46.4931 7.3291 46.9779 7.52375 47.3449 7.9139C47.6936 8.293 47.8688 8.7826 47.8688 9.381ZM46.9212 9.4099C46.9212 9.04015 46.8392 8.7231 46.6762 8.45875C46.4844 8.13915 46.2115 7.97935 45.8567 7.97935C45.4897 7.97935 45.2107 8.13915 45.0189 8.45875C44.855 8.7231 44.774 9.04525 44.774 9.42605C44.774 9.7958 44.8559 10.1129 45.0189 10.3772C45.2168 10.6968 45.4923 10.8566 45.848 10.8566C46.1967 10.8566 46.4705 10.6943 46.6675 10.3687C46.8366 10.0993 46.9212 9.77965 46.9212 9.4099Z"
                      fill="black"
                    />
                    <path
                      d="M54.72 7.41113L53.4341 11.418H52.5972L52.0645 9.67808C51.9294 9.24373 51.8195 8.81193 51.7341 8.38353H51.7175C51.6382 8.82383 51.5283 9.25478 51.3871 9.67808L50.8213 11.418H49.9748L48.7656 7.41113H49.7045L50.1692 9.31598C50.2817 9.76648 50.3741 10.1957 50.4482 10.602H50.4648C50.5328 10.2671 50.6452 9.84043 50.8039 9.32448L51.3871 7.41198H52.1316L52.6904 9.28368C52.8256 9.74013 52.9354 10.1796 53.02 10.6029H53.0453C53.1072 10.1906 53.2004 9.75118 53.3242 9.28368L53.8229 7.41198H54.72V7.41113Z"
                      fill="black"
                    />
                    <path
                      d="M59.4538 11.4182H58.5402V9.1232C58.5402 8.416 58.2647 8.0624 57.712 8.0624C57.4408 8.0624 57.222 8.1593 57.052 8.35395C56.8838 8.5486 56.7983 8.7781 56.7983 9.04075V11.4173H55.8847V8.55625C55.8847 8.20435 55.8734 7.8227 55.8516 7.4096H56.6545L56.6972 8.03605H56.7225C56.8288 7.8414 56.9875 7.68075 57.1959 7.5524C57.4435 7.4028 57.7207 7.32715 58.0241 7.32715C58.4077 7.32715 58.7267 7.44785 58.9804 7.6901C59.296 7.98675 59.4538 8.4296 59.4538 9.0178V11.4182Z"
                      fill="black"
                    />
                    <path
                      d="M61.9753 11.4177H61.0625V5.57227H61.9753V11.4177Z"
                      fill="black"
                    />
                    <path
                      d="M67.3532 9.381C67.3532 9.99725 67.1727 10.5022 66.8118 10.8983C66.4335 11.3054 65.9313 11.5086 65.3062 11.5086C64.7021 11.5086 64.2217 11.3139 63.8643 10.9229C63.5068 10.5328 63.3281 10.0406 63.3281 9.4473C63.3281 8.8268 63.5121 8.31765 63.8817 7.9224C64.2514 7.52715 64.7483 7.3291 65.3734 7.3291C65.9775 7.3291 66.4614 7.52375 66.8293 7.9139C67.178 8.293 67.3532 8.7826 67.3532 9.381ZM66.4047 9.4099C66.4047 9.04015 66.3227 8.7231 66.1597 8.45875C65.9688 8.13915 65.695 7.97935 65.3411 7.97935C64.9732 7.97935 64.6942 8.13915 64.5033 8.45875C64.3394 8.7231 64.2583 9.04525 64.2583 9.42605C64.2583 9.7958 64.3403 10.1129 64.5033 10.3772C64.7012 10.6968 64.9767 10.8566 65.3324 10.8566C65.6811 10.8566 65.954 10.6943 66.151 10.3687C66.321 10.0993 66.4047 9.77965 66.4047 9.4099Z"
                      fill="black"
                    />
                    <path
                      d="M71.7801 11.4176H70.9597L70.8917 10.9561H70.8665C70.5857 11.3241 70.1856 11.5086 69.666 11.5086C69.278 11.5086 68.9642 11.387 68.7279 11.1456C68.5135 10.9263 68.4062 10.6535 68.4062 10.3296C68.4062 9.84 68.6155 9.46685 69.0366 9.20845C69.4568 8.95005 70.0478 8.8234 70.8089 8.82935V8.75455C70.8089 8.2267 70.5247 7.9632 69.9554 7.9632C69.55 7.9632 69.1926 8.06265 68.884 8.25985L68.6983 7.67505C69.0801 7.4447 69.5518 7.3291 70.108 7.3291C71.182 7.3291 71.7208 7.8816 71.7208 8.9866V10.4622C71.7208 10.8626 71.7409 11.1813 71.7801 11.4176ZM70.8316 10.0406V9.42265C69.8238 9.40565 69.3199 9.6751 69.3199 10.2302C69.3199 10.4393 69.3774 10.5957 69.4951 10.7002C69.6128 10.8048 69.7628 10.8566 69.9415 10.8566C70.142 10.8566 70.3294 10.7946 70.5003 10.6713C70.672 10.5472 70.7775 10.39 70.8168 10.197C70.8263 10.1537 70.8316 10.101 70.8316 10.0406Z"
                      fill="black"
                    />
                    <path
                      d="M76.9699 11.4177H76.1592L76.1165 10.7743H76.0912C75.8323 11.2639 75.3911 11.5087 74.7713 11.5087C74.2761 11.5087 73.8637 11.3191 73.5368 10.94C73.2099 10.5609 73.0469 10.0688 73.0469 9.46442C73.0469 8.81587 73.2238 8.29057 73.5795 7.88937C73.9239 7.51537 74.3458 7.32837 74.848 7.32837C75.3998 7.32837 75.786 7.50942 76.0057 7.87237H76.0232V5.57227H76.9377V10.3382C76.9377 10.7284 76.9482 11.0879 76.9699 11.4177ZM76.0232 9.72792V9.05982C76.0232 8.94422 76.0145 8.85072 75.9979 8.77932C75.9465 8.56512 75.8357 8.38492 75.6675 8.23957C75.4975 8.09422 75.2926 8.02112 75.0564 8.02112C74.7155 8.02112 74.4487 8.15287 74.2526 8.41722C74.0582 8.68157 73.9596 9.01902 73.9596 9.43127C73.9596 9.82737 74.0529 10.1487 74.2404 10.396C74.4383 10.6595 74.705 10.7913 75.0389 10.7913C75.3388 10.7913 75.5786 10.6816 75.7608 10.4615C75.9369 10.2583 76.0232 10.0135 76.0232 9.72792Z"
                      fill="black"
                    />
                    <path
                      d="M84.7829 9.381C84.7829 9.99725 84.6024 10.5022 84.2415 10.8983C83.8631 11.3054 83.3627 11.5086 82.7359 11.5086C82.1335 11.5086 81.6531 11.3139 81.294 10.9229C80.9365 10.5328 80.7578 10.0406 80.7578 9.4473C80.7578 8.8268 80.9418 8.31765 81.3114 7.9224C81.681 7.52715 82.178 7.3291 82.8048 7.3291C83.4072 7.3291 83.8928 7.52375 84.2589 7.9139C84.6077 8.293 84.7829 8.7826 84.7829 9.381ZM83.8361 9.4099C83.8361 9.04015 83.7542 8.7231 83.5911 8.45875C83.3985 8.13915 83.1265 7.97935 82.7708 7.97935C82.4046 7.97935 82.1257 8.13915 81.933 8.45875C81.7691 8.7231 81.688 9.04525 81.688 9.42605C81.688 9.7958 81.77 10.1129 81.933 10.3772C82.1309 10.6968 82.4064 10.8566 82.7621 10.8566C83.1108 10.8566 83.3854 10.6943 83.5824 10.3687C83.7507 10.0993 83.8361 9.77965 83.8361 9.4099Z"
                      fill="black"
                    />
                    <path
                      d="M89.6951 11.4182H88.7824V9.1232C88.7824 8.416 88.5069 8.0624 87.9533 8.0624C87.6822 8.0624 87.4633 8.1593 87.2942 8.35395C87.1251 8.5486 87.0405 8.7781 87.0405 9.04075V11.4173H86.126V8.55625C86.126 8.20435 86.1155 7.8227 86.0938 7.4096H86.8958L86.9385 8.03605H86.9638C87.071 7.8414 87.2297 7.68075 87.4372 7.5524C87.6856 7.4028 87.962 7.32715 88.2663 7.32715C88.649 7.32715 88.9681 7.44785 89.2217 7.6901C89.5382 7.98675 89.6951 8.4296 89.6951 9.0178V11.4182Z"
                      fill="black"
                    />
                    <path
                      d="M95.8467 8.07824H94.8406V10.0247C94.8406 10.5194 95.0193 10.7668 95.3733 10.7668C95.5372 10.7668 95.6732 10.7532 95.7804 10.7251L95.804 11.4009C95.6235 11.4672 95.3864 11.5003 95.0943 11.5003C94.7334 11.5003 94.4527 11.3932 94.2495 11.179C94.0455 10.9648 93.9444 10.6044 93.9444 10.0987V8.07824H93.3438V7.41099H93.9444V6.67659L94.8397 6.41309V7.41014H95.8458V8.07824H95.8467Z"
                      fill="black"
                    />
                    <path
                      d="M100.679 11.4177H99.764V9.13972C99.764 8.42147 99.4885 8.06192 98.9367 8.06192C98.513 8.06192 98.2235 8.27017 98.0649 8.68667C98.0378 8.77422 98.0221 8.88132 98.0221 9.00712V11.4169H97.1094V5.57227H98.0221V7.98712H98.0396C98.3273 7.54767 98.7396 7.32837 99.2741 7.32837C99.6524 7.32837 99.9654 7.44907 100.214 7.69132C100.523 7.99307 100.679 8.44187 100.679 9.03517V11.4177Z"
                      fill="black"
                    />
                    <path
                      d="M105.669 9.22444C105.669 9.38424 105.657 9.51854 105.635 9.62819H102.895C102.907 10.0243 103.038 10.326 103.292 10.5351C103.524 10.7221 103.823 10.8156 104.189 10.8156C104.594 10.8156 104.964 10.7527 105.297 10.6261L105.44 11.2449C105.05 11.4098 104.592 11.4922 104.061 11.4922C103.424 11.4922 102.923 11.3095 102.56 10.944C102.196 10.5785 102.016 10.088 102.016 9.47264C102.016 8.86829 102.184 8.36509 102.523 7.96389C102.877 7.53549 103.356 7.32129 103.96 7.32129C104.551 7.32129 105 7.53549 105.303 7.96389C105.548 8.30389 105.669 8.72464 105.669 9.22444ZM104.798 8.99409C104.804 8.72974 104.744 8.50194 104.621 8.30984C104.462 8.06249 104.22 7.93839 103.893 7.93839C103.595 7.93839 103.352 8.05909 103.166 8.30134C103.015 8.49429 102.925 8.72464 102.895 8.99409H104.798Z"
                      fill="black"
                    />
                    <path
                      d="M46.7712 26.7786H44.7913L43.7068 23.4559H39.9372L38.9041 26.7786H36.9766L40.7113 15.4668H43.0181L46.7712 26.7786ZM43.3799 22.0619L42.3991 19.1082C42.2954 18.8064 42.101 18.0958 41.8142 16.9772H41.7793C41.6651 17.4583 41.4811 18.1689 41.2283 19.1082L40.265 22.0619H43.3799Z"
                      fill="black"
                    />
                    <path
                      d="M56.3766 22.5996C56.3766 23.9868 55.9921 25.0833 55.2232 25.8882C54.5345 26.6048 53.6792 26.9626 52.6584 26.9626C51.5564 26.9626 50.7648 26.5767 50.2827 25.8049H50.2478V30.1017H48.3892V21.3067C48.3892 20.4346 48.3656 19.5396 48.3203 18.6216H49.9549L50.0587 19.9144H50.0935C50.7134 18.9403 51.6541 18.4541 52.9164 18.4541C53.9033 18.4541 54.7271 18.8341 55.3862 19.5948C56.047 20.3564 56.3766 21.3577 56.3766 22.5996ZM54.483 22.6659C54.483 21.872 54.3 21.2175 53.9321 20.7024C53.5302 20.1652 52.9905 19.8966 52.314 19.8966C51.8554 19.8966 51.4387 20.0462 51.0665 20.3411C50.6933 20.6386 50.4492 21.0271 50.335 21.5082C50.2775 21.7326 50.2487 21.9162 50.2487 22.0607V23.4207C50.2487 24.014 50.4353 24.5146 50.8084 24.9235C51.1815 25.3323 51.6663 25.5363 52.2626 25.5363C52.9626 25.5363 53.5075 25.2728 53.8972 24.7475C54.2877 24.2214 54.483 23.5278 54.483 22.6659Z"
                      fill="black"
                    />
                    <path
                      d="M66.0007 22.5996C66.0007 23.9868 65.6162 25.0833 64.8464 25.8882C64.1586 26.6048 63.3034 26.9626 62.2825 26.9626C61.1805 26.9626 60.389 26.5767 59.9077 25.8049H59.8729V30.1017H58.0142V21.3067C58.0142 20.4346 57.9906 19.5396 57.9453 18.6216H59.5799L59.6837 19.9144H59.7185C60.3375 18.9403 61.2782 18.4541 62.5414 18.4541C63.5274 18.4541 64.3513 18.8341 65.0121 19.5948C65.6703 20.3564 66.0007 21.3577 66.0007 22.5996ZM64.1072 22.6659C64.1072 21.872 63.9232 21.2175 63.5553 20.7024C63.1534 20.1652 62.6155 19.8966 61.9381 19.8966C61.4787 19.8966 61.0629 20.0462 60.6897 20.3411C60.3166 20.6386 60.0734 21.0271 59.9592 21.5082C59.9025 21.7326 59.8729 21.9162 59.8729 22.0607V23.4207C59.8729 24.014 60.0594 24.5146 60.4308 24.9235C60.8039 25.3315 61.2886 25.5363 61.8867 25.5363C62.5868 25.5363 63.1316 25.2728 63.5213 24.7475C63.9119 24.2214 64.1072 23.5278 64.1072 22.6659Z"
                      fill="black"
                    />
                    <path
                      d="M76.7522 23.6061C76.7522 24.5683 76.4096 25.3512 75.7218 25.9555C74.9659 26.616 73.9137 26.9458 72.5615 26.9458C71.3131 26.9458 70.3123 26.7112 69.5547 26.2411L69.9854 24.7307C70.8014 25.2118 71.6967 25.4532 72.6722 25.4532C73.3723 25.4532 73.9172 25.2985 74.3086 24.9908C74.6983 24.6831 74.8927 24.27 74.8927 23.7549C74.8927 23.2959 74.7323 22.9091 74.4106 22.5955C74.0906 22.2818 73.5562 21.9903 72.81 21.7208C70.7787 20.9822 69.7639 19.9001 69.7639 18.4772C69.7639 17.5473 70.1196 16.7849 70.8319 16.1916C71.5415 15.5974 72.4883 15.3008 73.6722 15.3008C74.7279 15.3008 75.6049 15.4801 76.305 15.838L75.8403 17.3153C75.1865 16.9685 74.4472 16.7951 73.6199 16.7951C72.966 16.7951 72.4552 16.9523 72.089 17.2651C71.7795 17.5448 71.6243 17.8856 71.6243 18.2894C71.6243 18.7365 71.8013 19.1062 72.157 19.3969C72.4665 19.6655 73.0288 19.9562 73.8448 20.2699C74.843 20.6617 75.5762 21.1199 76.0478 21.6452C76.5177 22.1688 76.7522 22.8241 76.7522 23.6061Z"
                      fill="black"
                    />
                    <path
                      d="M82.8995 19.9822H80.8507V23.9423C80.8507 24.9496 81.2117 25.4528 81.9353 25.4528C82.2674 25.4528 82.5429 25.4247 82.7608 25.3686L82.8123 26.7448C82.4461 26.8782 81.964 26.9454 81.3668 26.9454C80.6328 26.9454 80.0591 26.7269 79.645 26.2909C79.2327 25.854 79.0252 25.1213 79.0252 24.0919V19.9805H77.8047V18.6205H79.0252V17.127L80.8507 16.5898V18.6205H82.8995V19.9822Z"
                      fill="black"
                    />
                    <path
                      d="M92.1471 22.6328C92.1471 23.8866 91.7792 24.9159 91.0452 25.7209C90.2754 26.5496 89.2536 26.9627 87.9799 26.9627C86.7525 26.9627 85.7752 26.5658 85.0464 25.7719C84.3175 24.978 83.9531 23.9758 83.9531 22.768C83.9531 21.504 84.328 20.4687 85.0804 19.6638C85.831 18.858 86.844 18.4551 88.1177 18.4551C89.3452 18.4551 90.3329 18.852 91.0783 19.6468C91.7914 20.4177 92.1471 21.4131 92.1471 22.6328ZM90.2187 22.6915C90.2187 21.9392 90.0539 21.2941 89.72 20.756C89.3304 20.1049 88.7733 19.7802 88.0514 19.7802C87.3043 19.7802 86.7368 20.1058 86.3471 20.756C86.0132 21.2949 85.8484 21.9503 85.8484 22.7255C85.8484 23.4777 86.0132 24.1229 86.3471 24.6601C86.749 25.3112 87.3104 25.6359 88.0349 25.6359C88.7445 25.6359 89.3016 25.3044 89.7035 24.6431C90.0461 24.0948 90.2187 23.4429 90.2187 22.6915Z"
                      fill="black"
                    />
                    <path
                      d="M98.1868 20.2153C98.0028 20.1822 97.8066 20.1652 97.6009 20.1652C96.9471 20.1652 96.4414 20.4057 96.0857 20.8877C95.7762 21.3127 95.6211 21.8499 95.6211 22.4984V26.7782H93.7632L93.7807 21.1903C93.7807 20.2502 93.7571 19.3942 93.7109 18.6224H95.3299L95.3979 20.183H95.4493C95.6455 19.6467 95.9549 19.2149 96.3786 18.891C96.7927 18.5995 97.24 18.4541 97.7221 18.4541C97.8938 18.4541 98.049 18.466 98.1868 18.4873V20.2153Z"
                      fill="black"
                    />
                    <path
                      d="M106.497 22.3146C106.497 22.6393 106.475 22.913 106.429 23.1366H100.853C100.875 23.9424 101.144 24.5586 101.662 24.9836C102.132 25.3636 102.74 25.554 103.486 25.554C104.312 25.554 105.065 25.4256 105.742 25.1681L106.033 26.4261C105.242 26.7627 104.307 26.9301 103.229 26.9301C101.932 26.9301 100.913 26.5578 100.172 25.8141C99.433 25.0703 99.0625 24.0716 99.0625 22.8187C99.0625 21.5887 99.4069 20.5645 100.096 19.7476C100.818 18.8755 101.794 18.4395 103.021 18.4395C104.227 18.4395 105.14 18.8755 105.76 19.7476C106.25 20.4404 106.497 21.2972 106.497 22.3146ZM104.725 21.8446C104.737 21.3074 104.616 20.8433 104.364 20.4514C104.042 19.9474 103.548 19.6958 102.883 19.6958C102.275 19.6958 101.781 19.9414 101.403 20.4344C101.094 20.8263 100.91 21.2963 100.853 21.8437H104.725V21.8446Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[url('/images/grid.png')] my-20 md:my-40">
        <div className="w-[90%] max-w-360 mx-auto">
          {/* <Text
            type="heading"
            className="font-bold! text-left text-2xl! md:text-[38px]! md:text-center"
          >
            Encouraged by its success, we are expanding our ecosystem through
            new initiatives such as:
          </Text> */}

          <div className="grid grid-cols-2 gap-5 md:gap-10 my-5 md:my-20">
            <div>
              <Text className="border p-2 rounded-full w-fit px-3">
                Skill Forge:
              </Text>
              <Text className=" my-5 md:my-10">
                a modern learning environment where young people gain hands-on
                technical, creative, and vocational skills that align with
                future job markets.{" "}
              </Text>
            </div>
            <div>
              <Text className="border p-2 rounded-full w-fit px-3">
                Playtogether:
              </Text>
              <Text className="my-5 md:my-10">
                A safe and engaging digital community where young people can
                connect, collaborate, and grow together through social learning
                and interactive challenges.
              </Text>
            </div>
          </div>

          <div>
            <Image
              src="/images/fullImage.png"
              alt="Skill Forge"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* our commitment */}
      <section className="w-[90%] max-w-360 mx-auto my-20 md:my-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-20 md:mt-32 relative z-50 md:px-8">
          <div className="">
            <div>
              <Text type="subheading">
                Our commitment as a Community Interest Company
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                As a registered Community Interest Company (C.I.C.), Accordia
                Harmony reinvests its profits back into the community and the
                development of youth-focused initiatives. Our commitment is not
                only to innovate but also to measure social impact. Every
                project we deliver is designed to improve the lives of young
                people, strengthen communities, and build pathways to long-term
                opportunity.
              </Text>
            </div>
          </div>
          <div>
            <Image
              src="/images/lastImage.png"
              alt="About Hero"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="my-20 md:my-40">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-[50%]">
              <Text type="heading" className="text-[34px]! font-semibold!">
                Looking ahead
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                Accordia Harmony C.I.C. continues to grow as a trusted name in
                youth empowerment and digital learning. <br /> We are building
                partnerships, expanding access, and designing new ways for young
                people to learn, connect, and succeed. Our journey is just
                beginning, and the future we’re shaping is one built on
                collaboration, creativity, and purpose.
              </Text>
            </div>
            <div className="md:w-[40%] flex  items-center gap-5 my-5 md:my-0">
              <Button
                title="Explore our products"
                className="text-sm! px-5!"
                onClick={() => router.push("/services")}
              />
              <Button
                title="Join our team"
                isTransparent
                className="text-sm! px-5!"
                onClick={() => router.push("/careers")}
              />
            </div>
          </div>
        </div>

        <div className="md:my-40 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Header number={6} title="FAQ" />
            <Text
              type="subheading"
              className="font-bold! max-w-3xl text-center mb-3"
            >
              Got questions ? We’ve got answers
            </Text>
            <Text>Bringing Clarity to the Conversation</Text>
          </div>
          <FAQSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
