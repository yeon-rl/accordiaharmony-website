import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhyTrustUs from "./WhyTrustUs";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FAQSection from "./FAQ";
import Footer from "./Footer";
import StaticBg from "./StaticBg";
import Image from "next/image";
import Text from "./Text";
import Button from "./Button";

const Home = () => {
  return (
    <div className="text-white ">
      <div className="w-[90%] max-w-360 mx-auto pt-10">
        <Navbar />
      </div>
      <StaticBg>
        <div className="w-[90%] max-w-360 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-180 mx-auto space-y-5 mt-32">
            <div className="bg-white px-5 py-2 rounded-full w-fit mx-auto flex items-center gap-3 mb-6">
              <Image
                src="/images/users.png"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="w-[43px] h-[19px]"
              />
              <p className="text-[#262626]">5200+ Users in the United Kindom</p>
            </div>

            <Text type="heading" className="text-center">
              Welcome to Accordia Harmony C.I.C.
            </Text>
            <Text className="text-center">
              Empowering young people to live with confidence, purpose, and
              independence. We are a United Kingdom–based Community Interest
              Company dedicated to helping young people aged 17 to 21 develop
              the essential life skills and confidence they need to thrive in
              today’s world.
            </Text>

            <div className="flex space-x-5">
              <Button title="Join our mission" />
              <Button title="Learn more" isTransparent />
            </div>

            <div className="flex items-center space-x-3">
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
            </div>
          </div>
        </div>
      </StaticBg>
      {/* <Navbar /> */}

      <section className="w-[90%] max-w-360 mx-auto relative z-100">
        {/* why trust us */}
        <div className="flex flex-col items-center justify-center -mt-40">
          <Header number={3} title="Why Trust Us?" />

          <div>
            <Text
              type="subheading"
              className="text-center font-medium! max-w-5xl tracking-tight! leading-snug!"
            >
              A proven, practical approach to gaining skills that matter
            </Text>
            <Text className="text-center my-3 mb-8">
              We keep things lean, clear, and collaborative — from idea to
              launch.
            </Text>
            <div className="max-w-5xl mx-auto">
              <WhyTrustUs />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center gap-10 max-w-5xl mx-auto my-48">
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src="/images/phone.png"
                alt="Product 1"
                width={1000}
                height={1000}
                className="w-[400px] h-auto object-contain ml-auto"
              />
            </div>
          </div>
          <div className="w-1/2">
            <Header number={2} title="Our Products" />
            <Text type="subheading" className="font-normal! text-4xl!">
              Empowering Futures Through Purpose-Driven Products
            </Text>
            <Text>
              From digital platforms like LifeSkills Connect to community-led
              initiatives, Accordia builds tools that equip young people to
              learn, grow, and thrive.
            </Text>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justuify-center">
            <Header number={2} title="Our Services" />
            <Text
              type="subheading"
              className="font-normal! text-4xl! text-center"
            >
              Empowering Young People Through Proven Support, Real Partnerships,
              and Lifelong Guidance
            </Text>
          </div>

          <div className="max-w-5xl mx-auto">
            <Services />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[url('/images/grid.png')] py-20 my-32">
          {/* Testimonial */}
          <div>
            <div className="flex flex-col items-center justuify-center">
              <Header number={5} title="Testimonials" />
              <Text
                type="subheading"
                className="font-normal! text-4xl! text-center mb-8"
              >
                Real feedback from Connect Users
              </Text>
            </div>
            <Testimonial />
          </div>
        </div>
        {/* FAQ */}
        <div className="my-40 w-[90%] max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Header number={6} title="FAQ" />
            <Text
              type="subheading"
              className="font-normal! max-w-3xl text-center mb-3"
            >
              Got questions ? We’ve got answers
            </Text>
            <Text>Bringing Clarity to the Conversation</Text>
          </div>
          <FAQSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
