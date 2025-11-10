"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const Products = () => {
  return (
    <div className="text-white ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10"
      >
        <Navbar />
      </motion.div>

      {/* Who we are */}
      <StaticBg scroll={true}>
        <div className="w-[90%] md:w-[80%] max-w-360 mx-auto relative z-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mt-14 md:mt-28"
          >
            <motion.div variants={fadeInUp}>
              <Text
                type="heading"
                className=" text-center text-3xl! md:text-[48px] font-semibold!"
              >
                LifeSkills Connect
              </Text>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Text className="text-center md:text-xl! my-3 max-w-7xl mx-auto">
                Our flagship platform is designed to equip young people aged
                17–21 with the skills they need for life and work. Courses cover
                financial literacy, career preparation, online safety, and
                personal development, all delivered through interactive,
                engaging experiences.
              </Text>
            </motion.div>

            <div className="flex flex-col gap-8 mt-8 md:mt-16">
              <div className="grid md:grid-cols-7 gap-4 md:gap-8">
                <div className="md:col-span-3 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <motion.div className="p-5 md:p-10" variants={fadeInUp}>
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Learning life skills module
                    </Text>
                    <Text className="text-[#545A65]">
                      Learning modules the help you prepare for the future
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Image
                      src="/images/lifeskill-module.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-4 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <motion.div className="p-5 md:p-10" variants={fadeInUp}>
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Integrated Ai
                    </Text>
                    <Text className="text-[#545A65]">
                      Stay productive with light, no-pressure to-dos that feel
                      good to complete.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Image
                      src="/images/integrated-ai.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="grid md:grid-cols-7 gap-4 md:gap-8">
                <div className="md:col-span-4 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <motion.div className="p-5 md:p-10" variants={fadeInUp}>
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Safety tools
                    </Text>
                    <Text className="text-[#545A65]">
                      Check in with your feelings and journal your thoughts in a
                      calming, private space.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Image
                      src="/images/safety-tools.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-3 bg-white rounded-xl text-[#545A65] flex flex-col justify-between overflow-hidden">
                  <motion.div className="p-5 md:p-10" variants={fadeInUp}>
                    <Text className="text-[#545A65] font-bold! text-xl! mb-2">
                      Gammified learning
                    </Text>
                    <Text className="text-[#545A65]">
                      Log your water, sleep, and wellness in one peaceful
                      overwhelm.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Image
                      src="/images/gammified.png"
                      alt="LifeSkills Connect App"
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </StaticBg>

      {/* Product */}
      <motion.div
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10 mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="my-18 md:my-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <motion.div className="md:w-[30%] w-full" variants={fadeInUp}>
              <Text
                type="subheading"
                className="text-[28px]! font-bold! mt-1 text-center! md:text-left! w-full"
              >
                About Product
              </Text>
            </motion.div>
            <motion.div className="md:w-[70%]" variants={fadeInUp}>
              <Text className="my-3 text-base! md:text-xl! text-center md:text-left">
                &quot;LifeSkills Connect <br /> is our flagship digital platform
                created to equip young people aged 17 to 21 with the essential
                skills, confidence, and knowledge they need for life and work.
                It bridges the gap between school and adulthood by offering
                engaging, interactive, and practical learning experiences that
                prepare users for real-world challenges.
                <br /> <br />
                The platform combines guided lessons, an AI-powered mentor, and
                a supportive online community where learners can explore vital
                topics such as financial literacy, career preparation, digital
                safety, communication, personal development, and mental
                well-being. Each course is designed to make learning flexible
                and relatable, allowing users to study at their own pace, earn
                badges, and track progress through personalised dashboards.
              </Text>

              <div className="flex justify-center md:justify-start">
                <Button title="Join waiting list" className="mt-5" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-10">
          <Text className="font-bold! text-center" type="heading">
            Our Upcoming Services
          </Text>
          <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-14">
            <motion.div className="md:w-[60%]" variants={fadeInUp}>
              <Text className="text-[#171719] font-semibold! text-[34px]!">
                Skill Forge
              </Text>
              <Text className="text-[#545A65]">
                Is a practical learning and innovation hub created to inspire
                growth, creativity, and hands-on learning. It provides a space
                where learners can explore technical, digital, and vocational
                skills that encourage self-discovery and personal development.
                <br /> <br />
                The platform focuses on building creative confidence and
                practical ability through projects, guided workshops, and
                collaboration with experienced mentors. Every experience is
                designed to help individuals unlock their potential, think
                critically, and create meaningful work that reflects their
                talents and ambitions.
                <br /> <br />
                Skill Forge represents a new approach to learning, one that
                values creativity, problem-solving, and purpose. It empowers
                people to develop skills that shape their future, enhance their
                confidence, and support lifelong growth.”Under it instead of
                “join the waiting list” it should “register” once you click on
                the register it should have a form box to collect your data such
                as your first and last name and your email.
              </Text>

              <button className="bg-[#4285F4] py-3 px-10 cursor-pointer rounded-md mt-5">
                Register
              </button>
            </motion.div>
            <motion.div className="md:w-[40%]" variants={fadeInUp}>
              <Image
                src="/images/phone1.png"
                alt="LifeSkills Connect App"
                width={1000}
                height={1000}
                className="mx-auto w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row  items-center justify-between gap-5 md:gap-14">
            <motion.div
              className="md:w-[40%] order-1 md:order-0"
              variants={fadeInUp}
            >
              <Image
                src="/images/playtogether.png"
                alt="LifeSkills Connect App"
                width={1000}
                height={1000}
                className="mx-auto w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="md:w-[60%] order-0 md:order-1"
              variants={fadeInUp}
            >
              <Text className="text-[#171719] font-semibold! text-[34px]!">
                Playtogether
              </Text>
              <Text className="text-[#545A65]">
                Is a community-focused initiative that promotes learning,
                connection, and personal growth through the power of play. It
                provides a vibrant and inclusive environment where individuals
                come together to develop strategic thinking, teamwork, and
                problem-solving skills through engaging board games and group
                activities
                <br /> <br />
                The platform introduces tournaments and interactive sessions in
                classic games such as chess, scrabble, and monopoly, encouraging
                friendly competition that builds focus, patience, and critical
                thinking. While PlayTogether celebrates fun and creativity, it
                also reinforces important educational and life skills such as
                communication, resilience, and decision-making.
                <br /> <br />
                More than a gaming experience, PlayTogether serves as a bridge
                between recreation and personal development. It creates a safe,
                balanced, and inspiring space where participants can enjoy
                healthy competition, make meaningful connections, and learn the
                value of collaboration through play.
              </Text>

              <button className="bg-[#4285F4] py-3 px-10 cursor-pointer rounded-md mt-5">
                Register
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Products;
