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
                  <br /> We create solutions that make learning practical,
                  engaging, and relevant. Our focus is on bridging the gap
                  between classroom education and the realities of everyday
                  life, preparing young people for independence, employment, and
                  personal growth.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 relative z-50 "
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
            <Header number={2} title="Our Purpose" />
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
                that feels relatable and empowering. <br /> Our goal is not just
                to teach skills, but to help young people discover who they are,
                what they can achieve, and how they can contribute positively to
                the world around them
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
                {/* <br /> We aim to make learning meaningful, inclusive, and
                accessible through innovative digital platforms that encourage
                growth, self-belief, and community connection. */}
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
                Our Story
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                Our founders brought together their experience in technology,
                education, and social development to create something different:
                a company that uses innovation for good.
                {/* <br /> This vision led
                to the creation of LifeSkills Connect, our flagship digital
                platform, which equips young people with the skills and
                confidence to live independently and make informed choices. */}
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[url('/images/grid.png')] my-20 md:my-40">
        <div className="w-[90%] max-w-360 mx-auto">
          <Text
            type="heading"
            className="font-bold! text-left text-2xl! md:text-[38px]! md:text-center"
          >
            Encouraged by its success, we are expanding our ecosystem through
            new initiatives such as:
          </Text>

          <div className="grid grid-cols-2 gap-5 md:gap-10 my-5 md:my-20">
            <div>
              <Text className="border p-2 rounded-full w-fit px-3">
                Skills Forge:
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
                Our Commitment as a Community Interest Company
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
                Looking Ahead
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
              <Button title="Explore our products" className="text-sm! px-5!" />
              <Button
                title="Join our team"
                isTransparent
                className="text-sm! px-5!"
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
