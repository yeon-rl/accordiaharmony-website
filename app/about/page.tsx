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
            className="grid grid-cols-1 md:grid-cols-2 items-start gap-5 md:gap-10 mt-16 md:my-32 relative z-50"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=""
            >
              {/* <Header number={1} title="Who We Are" /> */}
              <div>
                <Text type="subheading" className="text-3xl! md:text-6xl!">
                  Who We Are
                </Text>
                <Text className="my-3 text-base">
                  Accordia Harmony C.I.C. is{" "}
                  <a href="https://www.accordiaharmony.org/about">a</a> United
                  Kingdom–based Community Interest Company dedicated to
                  empowering young people with confidence, life skills, and
                  knowledge they need to thrive. <br /> <br /> We create
                  solutions that make learning practical, engaging, and
                  relevant. Our focus is on bridging the gap between classroom
                  education and the realities of everyday life, preparing young
                  people for independence, employment, and personal growth.
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
          className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-5 md:gap-10 relative z-50 "
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
              <Text
                type="subheading"
                className="text-2xl! md:text-[41px]! mt-5 md:mt-0"
              >
                We exist to make opportunity accessible.
              </Text>
              <Text className="my-3 text-base">
                Accordia Harmony C.I.C. was founded to address a simple truth:
                many young people Lack practical skills or confidence to
                navigate adulthood successfully. <br /> Through our platforms,
                we create spaces where young people can learn about finance,
                wellbeing, careers, relationships, and digital safety in a way
                that feels relatable and empowering. <br /> <br /> Our goal{" "}
                <a href="https://www.accordiaharmony.org/about">is</a> not just
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
                Get latest update from our newsletter
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

            <div className="absolute bottom-3 md:bottom-0 right-[10%] md:right-[13%]">
              <Image
                src="/images/megaphone.png"
                alt="About Hero"
                width={1000}
                height={1000}
                className=" w-[100px] md:w-[297px] h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div>
          <div className=" text-white md:py-20 md:mt-0 my-20 ">
            <div className="text-center mb-10">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 relative z-50 "
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
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5 md:gap-10 relative z-50 "
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
              <Text
                type="subheading"
                className=" text-3xl! md:text-[50px]! text-center md:text-left"
              >
                Empowering Futures Through Purpose-Driven Products
              </Text>
              <Text className="my-3 text-base! md:text-3xl! text-center md:text-left">
                From digital platforms like LifeSkills Connect{" "}
                <a href="https://www.accordiaharmony.org/about">to</a>{" "}
                community-led initiatives, Accordia builds tools that equip
                young people to learn, grow, and thrive.
              </Text>

              <div className="flex items-center justify-center md:justify-start gap-3 mt-10">
                <button className="cursor-pointer">
                  <svg
                    width="180"
                    height="52"
                    viewBox="0 0 180 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M179 46.0034C179 48.7745 176.709 51.0192 173.874 51.0192H6.13243C3.2995 51.0192 1 48.7745 1 46.0034V6.00382C1 3.23398 3.2995 0.981445 6.13243 0.981445H173.873C176.709 0.981445 178.999 3.23398 178.999 6.00382L179 46.0034Z"
                      fill="white"
                    />
                    <path
                      d="M173.333 1.04163C176.42 1.04163 178.932 3.49051 178.932 6.5V45.5C178.932 48.5095 176.42 50.9584 173.333 50.9584H6.66667C3.58 50.9584 1.06833 48.5095 1.06833 45.5V6.5C1.06833 3.49051 3.58 1.04163 6.66667 1.04163H173.333ZM173.333 3.8147e-06H6.66667C3.00167 3.8147e-06 0 2.92663 0 6.5V45.5C0 49.0734 3.00167 52 6.66667 52H173.333C176.998 52 180 49.0734 180 45.5V6.5C180 2.92663 176.998 3.8147e-06 173.333 3.8147e-06Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M40.1695 25.7191C40.1308 21.5292 43.6881 19.4908 43.8508 19.3959C41.8361 16.532 38.7135 16.1407 37.6161 16.1095C34.9935 15.8404 32.4495 17.6396 31.1135 17.6396C29.7508 17.6396 27.6935 16.1355 25.4761 16.1797C22.6228 16.2226 19.9535 17.8333 18.4895 20.3345C15.4681 25.4344 17.7215 32.9289 20.6161 37.0512C22.0641 39.0701 23.7561 41.3243 25.9708 41.245C28.1375 41.1579 28.9468 39.8982 31.5615 39.8982C34.1521 39.8982 34.9121 41.245 37.1708 41.1943C39.4961 41.1579 40.9601 39.1663 42.3575 37.1292C44.0308 34.8152 44.7028 32.5363 44.7295 32.4193C44.6748 32.4011 40.2135 30.741 40.1695 25.7191Z"
                      fill="black"
                    />
                    <path
                      d="M35.9028 13.3977C37.0681 11.9768 37.8655 10.0437 37.6441 8.08203C35.9575 8.15483 33.8481 9.21953 32.6335 10.6092C31.5588 11.8338 30.5988 13.841 30.8468 15.7286C32.7415 15.8664 34.6868 14.7965 35.9028 13.3977Z"
                      fill="black"
                    />
                    <path
                      d="M65.3997 13.0113C65.3997 14.5414 64.9291 15.6932 63.989 16.4667C63.1184 17.1804 61.881 17.5379 60.2784 17.5379C59.4837 17.5379 58.8037 17.5041 58.2344 17.4365V9.07621C58.977 8.95921 59.777 8.89941 60.641 8.89941C62.1677 8.89941 63.3184 9.22311 64.0944 9.87051C64.9637 10.6024 65.3997 11.6489 65.3997 13.0113ZM63.9264 13.049C63.9264 12.0571 63.657 11.2966 63.1184 10.7662C62.5797 10.2371 61.793 9.97191 60.757 9.97191C60.317 9.97191 59.9424 10.0005 59.6317 10.0603V16.416C59.8037 16.442 60.1184 16.4537 60.5757 16.4537C61.645 16.4537 62.4704 16.1638 63.0517 15.584C63.6331 15.0042 63.9264 14.1592 63.9264 13.049Z"
                      fill="black"
                    />
                    <path
                      d="M73.2107 14.3482C73.2107 15.2907 72.9347 16.0629 72.3827 16.6687C71.804 17.2914 71.0374 17.6021 70.08 17.6021C69.1574 17.6021 68.4227 17.3044 67.8747 16.7064C67.328 16.1097 67.0547 15.357 67.0547 14.4496C67.0547 13.5006 67.336 12.7219 67.9014 12.1174C68.4667 11.5129 69.2267 11.21 70.184 11.21C71.1067 11.21 71.848 11.5077 72.4094 12.1044C72.9427 12.6842 73.2107 13.433 73.2107 14.3482ZM71.7614 14.3924C71.7614 13.8269 71.636 13.342 71.3867 12.9377C71.0934 12.4489 70.676 12.2045 70.1334 12.2045C69.572 12.2045 69.1454 12.4489 68.852 12.9377C68.6014 13.342 68.4774 13.8347 68.4774 14.4171C68.4774 14.9826 68.6027 15.4675 68.852 15.8718C69.1547 16.3606 69.576 16.605 70.12 16.605C70.6534 16.605 71.072 16.3567 71.3734 15.8588C71.632 15.4467 71.7614 14.9579 71.7614 14.3924Z"
                      fill="black"
                    />
                    <path
                      d="M83.6848 11.334L81.7181 17.4622H80.4381L79.6235 14.8011C79.4168 14.1368 79.2488 13.4764 79.1181 12.8212H79.0928C78.9715 13.4946 78.8035 14.1537 78.5875 14.8011L77.7221 17.4622H76.4275L74.5781 11.334H76.0141L76.7248 14.2473C76.8968 14.9363 77.0381 15.5928 77.1515 16.2142H77.1768C77.2808 15.702 77.4528 15.0494 77.6955 14.2603L78.5875 11.3353H79.7261L80.5808 14.1979C80.7875 14.896 80.9555 15.5681 81.0848 16.2155H81.1235C81.2181 15.585 81.3608 14.9129 81.5501 14.1979L82.3128 11.3353H83.6848V11.334Z"
                      fill="black"
                    />
                    <path
                      d="M90.9312 17.463H89.5339V13.953C89.5339 12.8714 89.1125 12.3306 88.2672 12.3306C87.8525 12.3306 87.5179 12.4788 87.2579 12.7765C87.0005 13.0742 86.8699 13.4252 86.8699 13.8269V17.4617H85.4725V13.0859C85.4725 12.5477 85.4552 11.964 85.4219 11.3322H86.6499L86.7152 12.2903H86.7539C86.9165 11.9926 87.1592 11.7469 87.4779 11.5506C87.8565 11.3218 88.2805 11.2061 88.7445 11.2061C89.3312 11.2061 89.8192 11.3907 90.2072 11.7612C90.6899 12.2149 90.9312 12.8922 90.9312 13.7918V17.463Z"
                      fill="black"
                    />
                    <path
                      d="M94.7866 17.4626H93.3906V8.52246H94.7866V17.4626Z"
                      fill="black"
                    />
                    <path
                      d="M103.008 14.3482C103.008 15.2907 102.732 16.0629 102.18 16.6687C101.601 17.2914 100.833 17.6021 99.8769 17.6021C98.9529 17.6021 98.2182 17.3044 97.6716 16.7064C97.1249 16.1097 96.8516 15.357 96.8516 14.4496C96.8516 13.5006 97.1329 12.7219 97.6982 12.1174C98.2636 11.5129 99.0236 11.21 99.9796 11.21C100.904 11.21 101.644 11.5077 102.206 12.1044C102.74 12.6842 103.008 13.433 103.008 14.3482ZM101.557 14.3924C101.557 13.8269 101.432 13.342 101.182 12.9377C100.89 12.4489 100.472 12.2045 99.9302 12.2045C99.3676 12.2045 98.9409 12.4489 98.6489 12.9377C98.3982 13.342 98.2742 13.8347 98.2742 14.4171C98.2742 14.9826 98.3996 15.4675 98.6489 15.8718C98.9516 16.3606 99.3729 16.605 99.9169 16.605C100.45 16.605 100.868 16.3567 101.169 15.8588C101.429 15.4467 101.557 14.9579 101.557 14.3924Z"
                      fill="black"
                    />
                    <path
                      d="M109.769 17.463H108.515L108.411 16.7571H108.372C107.943 17.32 107.331 17.6021 106.536 17.6021C105.943 17.6021 105.463 17.4162 105.101 17.047C104.773 16.7116 104.609 16.2943 104.609 15.799C104.609 15.0502 104.929 14.4795 105.573 14.0843C106.216 13.6891 107.12 13.4954 108.284 13.5045V13.3901C108.284 12.5828 107.849 12.1798 106.979 12.1798C106.359 12.1798 105.812 12.3319 105.34 12.6335L105.056 11.7391C105.64 11.3868 106.361 11.21 107.212 11.21C108.855 11.21 109.679 12.055 109.679 13.745V16.0018C109.679 16.6141 109.709 17.1016 109.769 17.463ZM108.319 15.357V14.4119C106.777 14.3859 106.007 14.798 106.007 15.6469C106.007 15.9667 106.095 16.2059 106.275 16.3658C106.455 16.5257 106.684 16.605 106.957 16.605C107.264 16.605 107.551 16.5101 107.812 16.3216C108.075 16.1318 108.236 15.8913 108.296 15.5962C108.311 15.5299 108.319 15.4493 108.319 15.357Z"
                      fill="black"
                    />
                    <path
                      d="M117.711 17.4626H116.471L116.406 16.4785H116.367C115.971 17.2273 115.296 17.6017 114.348 17.6017C113.591 17.6017 112.96 17.3118 112.46 16.732C111.96 16.1522 111.711 15.3995 111.711 14.4752C111.711 13.4833 111.982 12.6799 112.526 12.0663C113.052 11.4943 113.698 11.2083 114.466 11.2083C115.31 11.2083 115.9 11.4852 116.236 12.0403H116.263V8.52246H117.662V15.8116C117.662 16.4083 117.678 16.9582 117.711 17.4626ZM116.263 14.8782V13.8564C116.263 13.6796 116.25 13.5366 116.224 13.4274C116.146 13.0998 115.976 12.8242 115.719 12.6019C115.459 12.3796 115.146 12.2678 114.784 12.2678C114.263 12.2678 113.855 12.4693 113.555 12.8736C113.258 13.2779 113.107 13.794 113.107 14.4245C113.107 15.0303 113.25 15.5217 113.536 15.9C113.839 16.303 114.247 16.5045 114.758 16.5045C115.216 16.5045 115.583 16.3368 115.862 16.0001C116.131 15.6894 116.263 15.315 116.263 14.8782Z"
                      fill="black"
                    />
                    <path
                      d="M129.664 14.3482C129.664 15.2907 129.388 16.0629 128.836 16.6687C128.257 17.2914 127.492 17.6021 126.533 17.6021C125.612 17.6021 124.877 17.3044 124.328 16.7064C123.781 16.1097 123.508 15.357 123.508 14.4496C123.508 13.5006 123.789 12.7219 124.354 12.1174C124.92 11.5129 125.68 11.21 126.638 11.21C127.56 11.21 128.302 11.5077 128.862 12.1044C129.396 12.6842 129.664 13.433 129.664 14.3482ZM128.216 14.3924C128.216 13.8269 128.09 13.342 127.841 12.9377C127.546 12.4489 127.13 12.2045 126.586 12.2045C126.026 12.2045 125.6 12.4489 125.305 12.9377C125.054 13.342 124.93 13.8347 124.93 14.4171C124.93 14.9826 125.056 15.4675 125.305 15.8718C125.608 16.3606 126.029 16.605 126.573 16.605C127.106 16.605 127.526 16.3567 127.828 15.8588C128.085 15.4467 128.216 14.9579 128.216 14.3924Z"
                      fill="black"
                    />
                    <path
                      d="M137.18 17.463H135.784V13.953C135.784 12.8714 135.363 12.3306 134.516 12.3306C134.101 12.3306 133.767 12.4788 133.508 12.7765C133.249 13.0742 133.12 13.4252 133.12 13.8269V17.4617H131.721V13.0859C131.721 12.5477 131.705 11.964 131.672 11.3322H132.899L132.964 12.2903H133.003C133.167 11.9926 133.409 11.7469 133.727 11.5506C134.107 11.3218 134.529 11.2061 134.995 11.2061C135.58 11.2061 136.068 11.3907 136.456 11.7612C136.94 12.2149 137.18 12.8922 137.18 13.7918V17.463Z"
                      fill="black"
                    />
                    <path
                      d="M146.578 12.3553H145.039V15.3323C145.039 16.0889 145.313 16.4672 145.854 16.4672C146.105 16.4672 146.313 16.4464 146.477 16.4035L146.513 17.437C146.237 17.5384 145.874 17.5891 145.427 17.5891C144.875 17.5891 144.446 17.4253 144.135 17.0977C143.823 16.7701 143.669 16.2189 143.669 15.4454V12.3553H142.75V11.3348H143.669V10.2116L145.038 9.80859V11.3335H146.577V12.3553H146.578Z"
                      fill="black"
                    />
                    <path
                      d="M153.982 17.4626H152.583V13.9786C152.583 12.8801 152.162 12.3302 151.318 12.3302C150.67 12.3302 150.227 12.6487 149.985 13.2857C149.943 13.4196 149.919 13.5834 149.919 13.7758V17.4613H148.523V8.52246H149.919V12.2158H149.946C150.386 11.5437 151.017 11.2083 151.834 11.2083C152.413 11.2083 152.891 11.3929 153.271 11.7634C153.745 12.2249 153.982 12.9113 153.982 13.8187V17.4626Z"
                      fill="black"
                    />
                    <path
                      d="M161.611 14.1089C161.611 14.3533 161.593 14.5587 161.559 14.7264H157.369C157.387 15.3322 157.587 15.7937 157.975 16.1135C158.33 16.3995 158.787 16.5425 159.347 16.5425C159.967 16.5425 160.533 16.4463 161.042 16.2526L161.261 17.199C160.665 17.4512 159.963 17.5773 159.151 17.5773C158.178 17.5773 157.411 17.2978 156.857 16.7388C156.299 16.1798 156.023 15.4297 156.023 14.4885C156.023 13.5642 156.281 12.7946 156.799 12.181C157.341 11.5258 158.073 11.1982 158.997 11.1982C159.901 11.1982 160.587 11.5258 161.051 12.181C161.426 12.701 161.611 13.3445 161.611 14.1089ZM160.278 13.7566C160.289 13.3523 160.197 13.0039 160.007 12.7101C159.765 12.3318 159.395 12.142 158.895 12.142C158.439 12.142 158.067 12.3266 157.783 12.6971C157.551 12.9922 157.414 13.3445 157.369 13.7566H160.278Z"
                      fill="black"
                    />
                    <path
                      d="M71.5269 40.9557H68.4989L66.8402 35.874H61.0749L59.4949 40.9557H56.5469L62.2589 23.6553H65.7869L71.5269 40.9557ZM66.3402 33.742L64.8402 29.2245C64.6815 28.763 64.3842 27.6762 63.9455 25.9654H63.8922C63.7175 26.7012 63.4362 27.788 63.0495 29.2245L61.5762 33.742H66.3402Z"
                      fill="black"
                    />
                    <path
                      d="M86.2198 34.5647C86.2198 36.6863 85.6318 38.3633 84.4558 39.5944C83.4024 40.6903 82.0944 41.2376 80.5331 41.2376C78.8478 41.2376 77.6371 40.6474 76.8998 39.467H76.8464V46.0385H74.0038V32.5874C74.0038 31.2536 73.9678 29.8847 73.8984 28.4807H76.3984L76.5571 30.458H76.6104C77.5584 28.9682 78.9971 28.2246 80.9278 28.2246C82.4371 28.2246 83.6971 28.8057 84.7051 29.9692C85.7158 31.134 86.2198 32.6654 86.2198 34.5647ZM83.3238 34.6661C83.3238 33.4519 83.0438 32.4509 82.4811 31.6631C81.8664 30.8415 81.0411 30.4307 80.0064 30.4307C79.3051 30.4307 78.6678 30.6595 78.0984 31.1106C77.5278 31.5656 77.1544 32.1597 76.9798 32.8955C76.8918 33.2387 76.8478 33.5195 76.8478 33.7405V35.8205C76.8478 36.7279 77.1331 37.4936 77.7038 38.1189C78.2744 38.7442 79.0158 39.0562 79.9278 39.0562C80.9984 39.0562 81.8318 38.6532 82.4278 37.8498C83.0251 37.0451 83.3238 35.9843 83.3238 34.6661Z"
                      fill="black"
                    />
                    <path
                      d="M100.929 34.5647C100.929 36.6863 100.341 38.3633 99.164 39.5944C98.112 40.6903 96.804 41.2376 95.2427 41.2376C93.5574 41.2376 92.3467 40.6474 91.6107 39.467H91.5574V46.0385H88.7147V32.5874C88.7147 31.2536 88.6787 29.8847 88.6094 28.4807H91.1094L91.268 30.458H91.3214C92.268 28.9682 93.7067 28.2246 95.6387 28.2246C97.1467 28.2246 98.4067 28.8057 99.4174 29.9692C100.424 31.134 100.929 32.6654 100.929 34.5647ZM98.0334 34.6661C98.0334 33.4519 97.752 32.4509 97.1894 31.6631C96.5747 30.8415 95.752 30.4307 94.716 30.4307C94.0134 30.4307 93.3774 30.6595 92.8067 31.1106C92.236 31.5656 91.864 32.1597 91.6894 32.8955C91.6027 33.2387 91.5574 33.5195 91.5574 33.7405V35.8205C91.5574 36.7279 91.8427 37.4936 92.4107 38.1189C92.9814 38.7429 93.7227 39.0562 94.6374 39.0562C95.708 39.0562 96.5414 38.6532 97.1374 37.8498C97.7347 37.0451 98.0334 35.9843 98.0334 34.6661Z"
                      fill="black"
                    />
                    <path
                      d="M117.383 36.1037C117.383 37.5753 116.859 38.7726 115.807 39.6969C114.651 40.707 113.042 41.2114 110.974 41.2114C109.064 41.2114 107.534 40.8526 106.375 40.1337L107.034 37.8236C108.282 38.5594 109.651 38.9286 111.143 38.9286C112.214 38.9286 113.047 38.692 113.646 38.2214C114.242 37.7508 114.539 37.119 114.539 36.3312C114.539 35.6292 114.294 35.0377 113.802 34.558C113.312 34.0783 112.495 33.6324 111.354 33.2203C108.247 32.0906 106.695 30.4357 106.695 28.2595C106.695 26.8373 107.239 25.6712 108.328 24.7638C109.414 23.8551 110.862 23.4014 112.672 23.4014C114.287 23.4014 115.628 23.6757 116.699 24.223L115.988 26.4824C114.988 25.952 113.858 25.6868 112.592 25.6868C111.592 25.6868 110.811 25.9273 110.251 26.4057C109.778 26.8334 109.54 27.3547 109.54 27.9722C109.54 28.656 109.811 29.2215 110.355 29.6661C110.828 30.0769 111.688 30.5215 112.936 31.0012C114.463 31.6005 115.584 32.3012 116.306 33.1046C117.024 33.9054 117.383 34.9077 117.383 36.1037Z"
                      fill="black"
                    />
                    <path
                      d="M126.784 30.5604H123.651V36.6171C123.651 38.1576 124.203 38.9272 125.31 38.9272C125.818 38.9272 126.239 38.8843 126.572 38.7985L126.651 40.9032C126.091 41.1073 125.354 41.21 124.44 41.21C123.318 41.21 122.44 40.8759 121.807 40.209C121.176 39.5408 120.859 38.4202 120.859 36.8459V30.5578H118.992V28.4778H120.859V26.1937L123.651 25.3721V28.4778H126.784V30.5604Z"
                      fill="black"
                    />
                    <path
                      d="M140.923 34.6151C140.923 36.5326 140.36 38.1069 139.237 39.338C138.06 40.6055 136.497 41.2373 134.549 41.2373C132.672 41.2373 131.177 40.6302 130.063 39.416C128.948 38.2018 128.391 36.6691 128.391 34.8218C128.391 32.8887 128.964 31.3053 130.115 30.0742C131.263 28.8418 132.812 28.2256 134.76 28.2256C136.637 28.2256 138.148 28.8327 139.288 30.0482C140.379 31.2273 140.923 32.7496 140.923 34.6151ZM137.973 34.7048C137.973 33.5543 137.721 32.5676 137.211 31.7447C136.615 30.7489 135.763 30.2523 134.659 30.2523C133.516 30.2523 132.648 30.7502 132.052 31.7447C131.541 32.5689 131.289 33.5712 131.289 34.7568C131.289 35.9073 131.541 36.894 132.052 37.7156C132.667 38.7114 133.525 39.208 134.633 39.208C135.719 39.208 136.571 38.701 137.185 37.6896C137.709 36.8511 137.973 35.854 137.973 34.7048Z"
                      fill="black"
                    />
                    <path
                      d="M150.158 30.9182C149.877 30.8675 149.577 30.8415 149.262 30.8415C148.262 30.8415 147.489 31.2094 146.945 31.9465C146.471 32.5965 146.234 33.4181 146.234 34.41V40.9555H143.392L143.419 32.4093C143.419 30.9715 143.383 29.6624 143.312 28.482H145.789L145.893 30.8688H145.971C146.271 30.0485 146.745 29.3881 147.393 28.8928C148.026 28.4469 148.71 28.2246 149.447 28.2246C149.71 28.2246 149.947 28.2428 150.158 28.2753V30.9182Z"
                      fill="black"
                    />
                    <path
                      d="M162.878 34.1279C162.878 34.6245 162.845 35.0431 162.774 35.385H154.246C154.28 36.6174 154.692 37.5599 155.484 38.2099C156.202 38.791 157.132 39.0822 158.273 39.0822C159.536 39.0822 160.688 38.8859 161.724 38.492L162.169 40.416C160.958 40.9308 159.529 41.1869 157.88 41.1869C155.896 41.1869 154.338 40.6175 153.205 39.48C152.074 38.3425 151.508 36.815 151.508 34.8988C151.508 33.0177 152.034 31.4512 153.089 30.2019C154.193 28.8681 155.685 28.2012 157.562 28.2012C159.406 28.2012 160.802 28.8681 161.75 30.2019C162.501 31.2614 162.878 32.5718 162.878 34.1279ZM160.168 33.409C160.186 32.5874 160.001 31.8776 159.616 31.2783C159.124 30.5074 158.368 30.1226 157.35 30.1226C156.421 30.1226 155.665 30.4983 155.088 31.2523C154.614 31.8516 154.333 32.5705 154.246 33.4077H160.168V33.409Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button className="cursor-pointer">
                  <svg
                    width="180"
                    height="52"
                    viewBox="0 0 180 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M173.333 52H6.66667C3.00167 52 0 49.0734 0 45.5V6.5C0 2.92663 3.00167 1.90735e-06 6.66667 1.90735e-06H173.333C176.998 1.90735e-06 180 2.92663 180 6.5V45.5C180 49.0734 176.998 52 173.333 52Z"
                      fill="white"
                    />
                    <path
                      d="M173.333 1.04162C176.42 1.04162 178.932 3.4905 178.932 6.5V45.5C178.932 48.5095 176.42 50.9584 173.333 50.9584H6.66667C3.58 50.9584 1.06833 48.5095 1.06833 45.5V6.5C1.06833 3.4905 3.58 1.04162 6.66667 1.04162H173.333ZM173.333 1.90735e-06H6.66667C3.00167 1.90735e-06 0 2.92663 0 6.5V45.5C0 49.0734 3.00167 52 6.66667 52H173.333C176.998 52 180 49.0734 180 45.5V6.5C180 2.92663 176.998 1.90735e-06 173.333 1.90735e-06Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M13.9152 9.80044C13.5235 10.2002 13.2969 10.8226 13.2969 11.6286V40.3781C13.2969 41.1841 13.5235 41.8064 13.9152 42.2062L14.0119 42.2939L30.5352 26.1902V25.8099L14.0119 9.7062L13.9152 9.80044Z"
                      fill="url(#paint0_linear_2948_73665)"
                    />
                    <path
                      d="M36.0329 31.5615L30.5312 26.1909V25.8106L36.0396 20.44L36.1629 20.5099L42.6862 24.1288C44.5479 25.1558 44.5479 26.8458 42.6862 27.8793L36.1629 31.4916L36.0329 31.5615Z"
                      fill="url(#paint1_linear_2948_73665)"
                    />
                    <path
                      d="M36.1657 31.4912L30.5341 26.0003L13.9141 42.2065C14.5324 42.8402 15.5407 42.9166 16.6874 42.2828L36.1657 31.4912Z"
                      fill="url(#paint2_linear_2948_73665)"
                    />
                    <path
                      d="M36.1657 20.5091L16.6874 9.7175C15.5407 9.09025 14.5324 9.16663 13.9141 9.80038L30.5341 26L36.1657 20.5091Z"
                      fill="url(#paint3_linear_2948_73665)"
                    />
                    <path
                      d="M63.2195 13.3172C63.2195 14.4027 62.8861 15.2721 62.2295 15.9204C61.4745 16.6891 60.4911 17.0758 59.2861 17.0758C58.1345 17.0758 57.1511 16.6826 56.3445 15.9074C55.5361 15.1209 55.1328 14.1557 55.1328 13.0003C55.1328 11.8449 55.5361 10.8797 56.3445 10.0997C57.1511 9.31806 58.1345 8.9248 59.2861 8.9248C59.8595 8.9248 60.4061 9.04018 60.9278 9.25468C61.4478 9.4708 61.8711 9.7633 62.1778 10.1241L61.4811 10.8098C60.9461 10.1939 60.2178 9.89006 59.2861 9.89006C58.4461 9.89006 57.7178 10.1761 57.0995 10.7529C56.4878 11.3314 56.1811 12.0806 56.1811 13.0003C56.1811 13.9201 56.4878 14.6757 57.0995 15.2542C57.7178 15.8246 58.4461 16.1171 59.2861 16.1171C60.1778 16.1171 60.9278 15.8246 61.5195 15.2477C61.9095 14.8658 62.1311 14.3393 62.1895 13.6666H59.2861V12.7273H63.1595C63.2061 12.9304 63.2195 13.1271 63.2195 13.3172Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M69.3636 10.0606H65.7253V12.5306H69.0053V13.4699H65.7253V15.9399H69.3636V16.897H64.6953V9.10352H69.3636V10.0606Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M73.6992 16.897H72.6692V10.0606H70.4375V9.10352H75.9325V10.0606H73.6992V16.897Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M79.9141 16.897V9.10352H80.9424V16.897H79.9141Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M85.496 16.897H84.4744V10.0606H82.2344V9.10352H87.736V10.0606H85.496V16.897Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M98.1388 15.8944C97.3504 16.6826 96.3737 17.0758 95.2087 17.0758C94.0371 17.0758 93.0604 16.6826 92.2721 15.8944C91.4854 15.1079 91.0938 14.1427 91.0938 13.0003C91.0938 11.8579 91.4854 10.8927 92.2721 10.1062C93.0604 9.31805 94.0371 8.9248 95.2087 8.9248C96.3671 8.9248 97.3438 9.31805 98.1321 10.1127C98.9254 10.9057 99.3171 11.8644 99.3171 13.0003C99.3171 14.1427 98.9254 15.1079 98.1388 15.8944ZM93.0338 15.2412C93.6271 15.8246 94.3487 16.1171 95.2087 16.1171C96.0621 16.1171 96.7904 15.8246 97.3771 15.2412C97.9688 14.6578 98.2687 13.9087 98.2687 13.0003C98.2687 12.0919 97.9688 11.3428 97.3771 10.7594C96.7904 10.1761 96.0621 9.88355 95.2087 9.88355C94.3487 9.88355 93.6271 10.1761 93.0338 10.7594C92.4421 11.3428 92.1421 12.0919 92.1421 13.0003C92.1421 13.9087 92.4421 14.6578 93.0338 15.2412Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M100.766 16.897V9.10352H102.016L105.902 15.1648H105.947L105.902 13.6665V9.10352H106.931V16.897H105.857L101.787 10.5368H101.742L101.787 12.0415V16.897H100.766Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.16"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M90.8454 28.2783C87.7137 28.2783 85.1554 30.602 85.1554 33.8082C85.1554 36.9883 87.7137 39.3364 90.8454 39.3364C93.9837 39.3364 96.5421 36.9883 96.5421 33.8082C96.5421 30.602 93.9837 28.2783 90.8454 28.2783ZM90.8454 37.1589C89.1271 37.1589 87.6487 35.776 87.6487 33.8082C87.6487 31.8143 89.1271 30.4558 90.8454 30.4558C92.5637 30.4558 94.0487 31.8143 94.0487 33.8082C94.0487 35.776 92.5637 37.1589 90.8454 37.1589ZM78.4304 28.2783C75.2921 28.2783 72.7404 30.602 72.7404 33.8082C72.7404 36.9883 75.2921 39.3364 78.4304 39.3364C81.5671 39.3364 84.1204 36.9883 84.1204 33.8082C84.1204 30.602 81.5671 28.2783 78.4304 28.2783ZM78.4304 37.1589C76.7104 37.1589 75.2271 35.776 75.2271 33.8082C75.2271 31.8143 76.7104 30.4558 78.4304 30.4558C80.1487 30.4558 81.6271 31.8143 81.6271 33.8082C81.6271 35.776 80.1487 37.1589 78.4304 37.1589ZM63.6571 29.9732V32.3229H69.4121C69.2437 33.6359 68.7937 34.6012 68.1037 35.2739C67.2637 36.0864 65.9554 36.9883 63.6571 36.9883C60.1154 36.9883 57.3421 34.2014 57.3421 30.7483C57.3421 27.2952 60.1154 24.5083 63.6571 24.5083C65.5721 24.5083 66.9654 25.2379 67.9937 26.1837L69.6921 24.5278C68.2537 23.1888 66.3404 22.1602 63.6571 22.1602C58.8004 22.1602 54.7188 26.013 54.7188 30.7483C54.7188 35.4835 58.8004 39.3364 63.6571 39.3364C66.2821 39.3364 68.2537 38.4979 69.8037 36.9249C71.3921 35.3763 71.8871 33.1988 71.8871 31.4405C71.8871 30.8945 71.8404 30.3924 71.7571 29.9732H63.6571ZM124.067 31.7948C123.599 30.5582 122.154 28.2783 119.21 28.2783C116.294 28.2783 113.865 30.5192 113.865 33.8082C113.865 36.9054 116.269 39.3364 119.49 39.3364C122.095 39.3364 123.599 37.7878 124.217 36.8859L122.284 35.6298C121.639 36.5495 120.76 37.1589 119.49 37.1589C118.229 37.1589 117.324 36.595 116.744 35.4835L124.329 32.4237L124.067 31.7948ZM116.334 33.6359C116.269 31.5039 118.032 30.4119 119.295 30.4119C120.285 30.4119 121.125 30.8945 121.405 31.5852L116.334 33.6359ZM110.169 39H112.662V22.75H110.169V39ZM106.085 29.51H106.002C105.442 28.8633 104.374 28.2783 103.02 28.2783C100.18 28.2783 97.5837 30.7093 97.5837 33.826C97.5837 36.9249 100.18 39.3364 103.02 39.3364C104.374 39.3364 105.442 38.7465 106.002 38.0803H106.085V38.8733C106.085 40.9874 104.927 42.1233 103.059 42.1233C101.535 42.1233 100.59 41.0508 100.2 40.1489L98.0321 41.0313C98.6571 42.497 100.312 44.3008 103.059 44.3008C105.982 44.3008 108.449 42.6238 108.449 38.5434V28.6147H106.085V29.51ZM103.234 37.1589C101.515 37.1589 100.077 35.7565 100.077 33.826C100.077 31.8777 101.515 30.4558 103.234 30.4558C104.927 30.4558 106.262 31.8777 106.262 33.826C106.262 35.7565 104.927 37.1589 103.234 37.1589ZM135.74 22.75H129.777V39H132.264V32.8429H135.74C138.502 32.8429 141.21 30.8945 141.21 27.7957C141.21 24.6984 138.495 22.75 135.74 22.75ZM135.805 30.5825H132.264V25.0104H135.805C137.662 25.0104 138.722 26.5135 138.722 27.7957C138.722 29.0534 137.662 30.5825 135.805 30.5825ZM151.177 28.2474C149.38 28.2474 147.512 29.0209 146.744 30.7353L148.95 31.6372C149.425 30.7353 150.299 30.4428 151.222 30.4428C152.512 30.4428 153.82 31.1984 153.84 32.5325V32.7032C153.39 32.4497 152.427 32.0743 151.242 32.0743C148.865 32.0743 146.444 33.3499 146.444 35.7305C146.444 37.908 148.39 39.3104 150.579 39.3104C152.252 39.3104 153.175 38.5743 153.755 37.7179H153.84V38.974H156.242V32.7405C156.242 29.8594 154.035 28.2474 151.177 28.2474ZM150.877 37.1524C150.064 37.1524 148.93 36.7592 148.93 35.776C148.93 34.5183 150.344 34.0357 151.567 34.0357C152.662 34.0357 153.175 34.2713 153.84 34.5817C153.645 36.0864 152.317 37.1524 150.877 37.1524ZM164.992 28.6033L162.134 35.6477H162.049L159.094 28.6033H156.412L160.852 38.4475L158.319 43.9254H160.917L167.759 28.6033H164.992ZM142.577 39H145.07V22.75H142.577V39Z"
                      fill="black"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2948_73665"
                        x1="29.0681"
                        y1="40.6775"
                        x2="7.258"
                        y2="18.3081"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00A0FF" />
                        <stop offset="0.0066" stop-color="#00A1FF" />
                        <stop offset="0.2601" stop-color="#00BEFF" />
                        <stop offset="0.5122" stop-color="#00D2FF" />
                        <stop offset="0.7604" stop-color="#00DFFF" />
                        <stop offset="1" stop-color="#00E3FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2948_73665"
                        x1="45.1104"
                        y1="25.999"
                        x2="12.8479"
                        y2="25.999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFE000" />
                        <stop offset="0.4087" stop-color="#FFBD00" />
                        <stop offset="0.7754" stop-color="#FFA500" />
                        <stop offset="1" stop-color="#FF9C00" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2948_73665"
                        x1="33.1034"
                        y1="23.0154"
                        x2="3.52709"
                        y2="-7.31927"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF3A44" />
                        <stop offset="1" stop-color="#C31162" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_2948_73665"
                        x1="9.73046"
                        y1="51.7709"
                        x2="22.9376"
                        y2="38.2253"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#32A071" />
                        <stop offset="0.0685" stop-color="#2DA771" />
                        <stop offset="0.4762" stop-color="#15CF74" />
                        <stop offset="0.8009" stop-color="#06E775" />
                        <stop offset="1" stop-color="#00F076" />
                      </linearGradient>
                    </defs>
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
              <Text className="border p-2 rounded-full w-fit px-3 md:text-3xl!">
                Skill Forge:
              </Text>
              <Text className=" my-5 md:my-5 md:text-3xl!">
                a modern learning environment where young people gain hands-on
                technical, creative, and{" "}
                <a href="https://www.accordiaharmony.org/about">vocational</a>{" "}
                skills that align with future job markets.{" "}
              </Text>
            </div>
            <div>
              <Text className="border p-2 rounded-full w-fit px-3 md:text-3xl!">
                PlayTogether:
              </Text>
              <Text className="my-5 md:my-5 md:text-3xl!">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-20 md:mt-32 relative z-50 ">
          <div className="">
            <div>
              <Text type="subheading">
                Our commitment as a Community Interest Company
              </Text>
              <Text className="my-3 text-base! md:text-xl!">
                As a registered Community Interest Company (C.I.C.), Accordia
                Harmony reinvests its profits back into the community and the
                development of youth-focused initiatives. Our commitment is not
                only to innovate but also to measure{" "}
                <a href="https://www.accordiaharmony.org/about">Social</a>
                impact. Every project we deliver is designed to improve the
                lives of young people, strengthen communities, and build
                pathways to long-term opportunity.
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
            <Text>
              Bringing Clarity to{" "}
              <a href="https://www.accordiaharmony.org/about">the</a>{" "}
              Conversation
            </Text>
          </div>
          <FAQSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
