"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
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

const Newsletter = () => {
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
        <div className="w-[90%] max-w-360 mx-auto relative z-50">
          <motion.div className="mt-14 mb-6" variants={fadeInUp}>
            <Text
              type="heading"
              className=" text-center text-3xl! md:text-[48px] font-semibold!"
            >
              News & Insights
            </Text>
            <Text className="text-center md:text-xl! my-3 max-w-7xl mx-auto">
              Welcome to the Accordia Harmony C.I.C. News and Insights Hub, a
              space where ideas meet impact.
            </Text>

            <hr className="w-10 border border-slate-400 mx-auto" />

            <motion.div variants={fadeInUp}>
              <Image
                src="/images/newsletterImage.png"
                alt="Newsletter "
                width={1000}
                height={1000}
                className="w-full h-auto mt-10 rounded-xl shadow-lg"
              />

              <motion.div
                variants={fadeInUp}
                className="px-5 md:px-10 flex flex-col gap-5 md:gap-10 mt-5 md:mt-10"
              >
                <div>
                  <div>
                    <Text className="text-[23px]! font-semibold! mb-3">
                      Sharing Ideas, Stories and Progress
                    </Text>
                    <Text>
                      Here, we share the latest updates, thought pieces and
                      inspiring stories from our journey to empower young people
                      aged 17 to 21. This section reflects our growth, our
                      values and the partnerships that continue to shape our
                      work. It is where we celebrate progress, explore
                      innovation and highlight the people and projects driving
                      real change.
                    </Text>
                  </div>
                </div>
                <div>
                  <Text className="text-[23px]! font-semibold! mb-3">
                    Our Purpose
                  </Text>
                  <Text>
                    The News and Insights section exists to keep our community
                    informed, engaged and inspired. It captures the latest
                    developments across our platforms including LifeSkills
                    Connect, Skill Forge and Playground, while also exploring
                    wider conversations around youth development, education,
                    technology and social impact. <br /> We believe that sharing
                    knowledge helps create stronger communities. Every article,
                    announcement and interview is written to encourage learning,
                    spark curiosity and invite collaboration from those who
                    believe in a better future for young people.
                  </Text>
                </div>

                <div>
                  <Image
                    src="/images/newsletterImage.png"
                    alt="Newsletter "
                    width={1000}
                    height={1000}
                    className="w-full h-auto mt-10 rounded-xl shadow-lg"
                  />
                </div>

                <div>
                  <div>
                    <Text className="text-[23px]! font-semibold! mb-3">
                      Project Updates
                    </Text>
                    <Text>
                      Follow the progress of our flagship initiatives, upcoming
                      platform launches and new feature releases. Learn how we
                      continue to improve LifeSkills Connect, prepare for the
                      introduction of Skill Forge and shape Playground into a
                      thriving digital community.
                    </Text>
                  </div>
                </div>

                <div>
                  <Image
                    src="/images/newsletterImage.png"
                    alt="Newsletter "
                    width={1000}
                    height={1000}
                    className="w-full h-auto mt-10 rounded-xl shadow-lg"
                  />
                </div>

                <div>
                  <div>
                    <Text className="text-[23px]! font-semibold! mb-3">
                      How to Start a Digital Detox
                    </Text>
                    <ul className="list-disc pl-8 flex flex-col gap-3">
                      <li>
                        Schedule device-free time daily, especially in the
                        morning and before bed
                      </li>
                      <li>Turn off non-essential notifications</li>
                      <li>
                        Replace scrolling with mindful activities like
                        journaling, walking, or stretching
                      </li>
                      <li>
                        Use “Do Not Disturb” mode or app blockers when focusing
                      </li>
                      <li>Try a screen-free day once a week</li>
                    </ul>

                    <Text className="mt-3">
                      You don’t need to go off the grid. Even small breaks can
                      lead to big benefits.
                    </Text>
                  </div>
                </div>

                <div className="bg-white h-20 w-full rounded-xl"></div>

                <div>
                  <Text className="text-[23px]! font-semibold! mb-3">
                    Impact on user experience
                  </Text>
                  <Text>
                    A digital detox positively impacts user experience by
                    reducing mental fatigue, improving focus, and enhancing
                    emotional well-being. By encouraging screen-free moments,
                    the app promotes healthier habits, better sleep, and deeper
                    mindfulness. Users feel more present, energized, and
                    productive—leading to greater satisfaction and long-term
                    engagement with their wellness journey.
                  </Text>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </StaticBg>

      <Footer />
    </div>
  );
};

export default Newsletter;
