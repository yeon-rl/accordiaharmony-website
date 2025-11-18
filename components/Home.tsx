"use client";

import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhyTrustUs from "./WhyTrustUs";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FAQSection from "./FAQ";
import Footer from "./Footer";
import StaticBg from "./StaticBg";
import RateWebsite from "./RateWebsite";
import Image from "next/image";
import Text from "./Text";
import Button from "./Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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

const Home = () => {
  const router = useRouter();

  return (
    <div className="text-white">
      {/* <RateWebsite /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10"
      >
        <Navbar />
      </motion.div>
      <StaticBg height="h-full!">
        <div className="w-[90%] max-w-360 mx-auto relative z-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="flex flex-col items-center justify-center max-w-5xl mx-auto space-y-5 mt-5"
          >
            {/* <motion.div
              variants={fadeInUp}
              className="bg-white px-5 py-2 rounded-full w-fit mx-auto flex items-center gap-3 mb-6"
            >
              <Image
                src="/images/users.png"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="w-[43px] h-[19px]"
              />
              <p className="text-[#262626]">5200+ Users in the United Kindom</p>
            </motion.div> */}

            <motion.div variants={fadeInUp}>
              <Text
                type="heading"
                className="text-center mt-5 md:mt-20 font-semibold! text-2xl! md:text-[48px]!"
              >
                Welcome to{" "}
                <span className="text-[#FBBF24]">Accordia Harmony C.I.C.</span>
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text className="text-center md:text-xl">
                Empowering young people to live with confidence, purpose, and
                independence. We are a United Kingdom–based Community Interest
                Company dedicated to helping young people develop the essential
                life skills and confidence they need{" "}
                <a href="https://www.accordiaharmony.org/">to</a> thrive in
                today&apos;s world.
              </Text>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center sm:flex-row md:space-x-5 gap-y-4 text-center"
            >
              <Button
                title="Join our mission"
                onClick={() => router.push("/partnership")}
                className="mx-auto!"
              />
              <Button
                title="Learn more"
                isTransparent
                onClick={() => router.push("/about")}
              />
            </motion.div>

            {/* <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3"
            >
              <p className="text-sm mt-2">Partners</p>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/3.png"
                  alt="Partners"
                  width={1000}
                  height={1000}
                  className="w-[62px] h-auto"
                />
                <Image
                  src="/images/1.png"
                  alt="Partners"
                  width={1000}
                  height={1000}
                  className="w-[188px] h-auto"
                />
                <Image
                  src="/images/2.png"
                  alt="Partners"
                  width={1000}
                  height={1000}
                  className="w-[136px] h-auto"
                />
              </div>
            </motion.div> */}
          </motion.div>

          {/* why trust us */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="flex flex-col items-center justify-center mt-20"
          >
            <motion.div variants={fadeInUp}>
              <Header number={1} title="Why Trust Us?" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center"
            >
              <Text
                type="subheading"
                className="text-center font-medium! max-w-5xl tracking-tight! leading-snug!"
              >
                A proven, practical approach to gaining skills that matter
              </Text>
              <Text className="text-center my-3 mb-8">
                We keep things lean, clear, and collaborative — from idea{" "}
                <a href="https://www.accordiaharmony.org/">to</a> launch.
              </Text>
              <div className="max-w-6xl mx-auto">
                <WhyTrustUs />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </StaticBg>
      {/* <Navbar /> */}

      <section className="w-[90%] max-w-360 mx-auto relative z-50 mt-10 sm:mt-20 md:mt-20 2xl:mt-5">
        {/* why trust us */}
        {/* <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="flex flex-col items-center justify-center "
        >
          <motion.div variants={fadeInUp}>
            <Header number={1} title="Why Trust Us?" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center"
          >
            <Text
              type="subheading"
              className="text-center font-medium! max-w-5xl tracking-tight! leading-snug!"
            >
              A proven, practical approach to gaining skills that matter
            </Text>
            <Text className="text-center my-3 mb-8">
              We keep things lean, clear, and collaborative — from idea{" "}
              <a href="https://www.accordiaharmony.org/">to</a> launch.
            </Text>
            <div className="max-w-6xl mx-auto">
              <WhyTrustUs />
            </div>
          </motion.div>
        </motion.div> */}

        {/* Products */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 items-start gap-10 max-w-6xl mx-auto my-20 md:my-32"
        >
          <motion.div
            variants={fadeInUp}
            className=" flex md:col-span-2 items-center md:items-start justify-center order-1 md:order-0"
          >
            <div className="relative w-full">
              <Image
                src="/images/phone.png"
                alt="Product 1"
                width={1000}
                height={1000}
                className="w-[400px] h-auto object-contain mx-auto md:mx-0"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className=" order-0 md:order-1 md:col-span-3"
          >
            <div className="flex items-center justify-center md:justify-start">
              <Header number={2} title="Our Products" />
            </div>
            <Text
              type="subheading"
              className="font-normal! text-2xl! md:text-[48px]! text-center md:text-left"
            >
              Empowering Futures Through Purpose-Driven Products
            </Text>
            <Text className="text-center md:text-left mt-2 md:mt-0">
              From digital platforms like LifeSkills Connect to community-led
              initiatives, Accordia builds tools that equip young people{" "}
              <a href="https://www.accordiaharmony.org/">to</a> learn, grow, and
              thrive.
            </Text>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justuify-center"
          >
            <Header number={3} title="Our Services" />
            <Text
              type="subheading"
              className="font-normal! text-2xl md:text-4xl! text-center"
            >
              Empowering Young People Through Proven Support, Real Partnerships,
              and Lifelong Guidance
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full overflow-hidden mx-auto"
          >
            <Services />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-[url('/images/grid.png')] md:py-10 my-20"
        >
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justuify-center"
            >
              <Header number={4} title="Testimonials" />
              {/* <Text
                type="subheading"
                className="font-normal! text-4xl! text-center mb-8"
              >
                Real feedback from Connect Users
              </Text> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Testimonial />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:my-20 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <Header number={5} title="FAQ" />
            <Text
              type="subheading"
              className="font-bold! max-w-3xl text-center mb-3"
            >
              Got questions ? We&apos;ve got answers
            </Text>
            <Text>
              Bringing Clarity <a href="https://www.accordiaharmony.org/">to</a>{" "}
              the Conversation
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FAQSection />
          </motion.div>
        </motion.div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Home;
