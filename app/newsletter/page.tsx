import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";

const Newsletter = () => {
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
    </div>
  );
};

export default Newsletter;
