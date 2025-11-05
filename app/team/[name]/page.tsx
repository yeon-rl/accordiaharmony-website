"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Xrp } from "iconsax-reactjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const moreTeam = [
    {
      name: "Priya Shah",
      role: "Head of Product",
      image: "/images/teamImage1.png",
    },
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "/images/teamImage1.png",
    },
    {
      name: "Emily Chen",
      role: "Marketing Manager",
      image: "/images/teamImage1.png",
    },
  ];

  return (
    <div className="text-white">
      <div className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10">
        <Navbar />
      </div>

      {/* Who we are */}
      <StaticBg scroll={true}>
        <div className="w-[90%] md:w-[80%] max-w-360 mx-auto relative z-50">
          <div className="mt-14 md:mt-28">
            <div className="bg-white rounded-lg p-5 md:p-6 flex flex-col md:flex-row gap-5 md:gap-10 items-center relative ">
              <Image
                src="/images/teamRec.png"
                alt="Team Member Background"
                width={1000}
                height={1000}
                className="w-20 h-20 absolute top-0 right-0"
              />
              <div className="bg-[url('/images/teamPersonBg.png')] bg-no-repeat bg-cover relative rounded-lg overflow-hidden flex md:w-[40%]">
                <Image
                  src="/images/teamImage1.png"
                  alt="Team Member"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                  priority={true}
                />
              </div>
              <div className="md:w-[50%]">
                <Text className="text-[#171719] font-semibold! text-[36px]!">
                  Alex Carter
                </Text>
                <Text className="text-[#545A65]">Co-founder & CEO</Text>

                <div className=" flex items-center gap-4 my-5 md:my-8">
                  <Link href="#">
                    <div className="bg-[#4285F4] rounded-full w-fit p-2">
                      <Instagram
                        size="32"
                        color="CurrentColor"
                        className="text-white w-6 h-6"
                        variant="Outline"
                      />
                    </div>
                  </Link>

                  <Link href="#">
                    <div className="bg-[#4285F4] rounded-full w-fit p-2">
                      <Xrp
                        size="32"
                        color="CurrentColor"
                        className="text-white w-6 h-6"
                        variant="Outline"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="bg-[#4285F4] rounded-full w-fit p-2">
                      <svg
                        width="24"
                        height="24"
                        className="w-6 h-6"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.7998 2.51465C9.79996 2.51465 10.7595 2.91198 11.4668 3.61914C12.1741 4.32643 12.5713 5.28588 12.5713 6.28613V10.6865H10.0576V6.28613C10.0576 5.95285 9.92504 5.6332 9.68945 5.39746C9.45369 5.1617 9.13322 5.0293 8.7998 5.0293C8.46656 5.02942 8.14678 5.16181 7.91113 5.39746C7.67554 5.6332 7.54297 5.95284 7.54297 6.28613V10.6865H5.0293V6.28613C5.0293 5.28588 5.4265 4.32643 6.13379 3.61914C6.84094 2.9121 7.79982 2.51478 8.7998 2.51465ZM2.51367 10.6855H0V3.14258H2.51367V10.6855ZM1.25684 0C1.951 0 2.51344 0.562725 2.51367 1.25684C2.51367 1.95114 1.95114 2.51465 1.25684 2.51465C0.562598 2.51457 0 1.95109 0 1.25684C0.000231194 0.562775 0.56274 8.1542e-05 1.25684 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="bg-[#4285F4] rounded-full w-fit p-2">
                      <Facebook
                        size="32"
                        color="CurrentColor"
                        className="text-white w-6 h-6"
                        variant="Bold"
                      />
                    </div>
                  </Link>
                </div>

                <div>
                  <Text className="text-[#171719] font-semibold!">
                    About Alex Carter
                  </Text>
                  <Text className="text-[#545A65] mt-5">
                    With a passion for health, technology, and innovation, Alex
                    Carter co-founded the fitness app to bridge the gap between
                    everyday users and expert-level wellness guidance. Drawing
                    from over a decade of experience in fitness tech and
                    entrepreneurship, Alex leads the vision and growth of the
                    company. His mission is to empower people to take control of
                    their health with smart tools, intuitive design, and
                    science-backed strategies. When he&apos;s not building
                    better user experiences, you’ll find him hiking trails or
                    testing new training routines.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StaticBg>

      <section className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10 mb-20">
        <Text className="text-3xl! md:text-[41px]! text-center my-16 font-semibold!">
          Meet our more team
        </Text>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {moreTeam.map((member, index) => (
            <div
              className="bg-white rounded-xl w-full relative group cursor-pointer"
              key={index}
              onClick={() =>
                router.push(
                  `/team/${member.name.replace(" ", "-").toLowerCase()}`
                )
              }
            >
              <div className="bg-[#E9EAEE] rounded-b-full absolute py-3 md:py-5 px-2 md:px-3 right-5 md:right-10 top-0">
                <svg
                  width="15"
                  height="23"
                  viewBox="0 0 15 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.26825 6.09418L3.25084 5.11251L8.60277 10.4626C8.68904 10.5483 8.75751 10.6503 8.80423 10.7625C8.85095 10.8748 8.875 10.9953 8.875 11.1169C8.875 11.2385 8.85095 11.3589 8.80423 11.4712C8.75751 11.5835 8.68904 11.6854 8.60277 11.7712L3.25084 17.124L2.26918 16.1424L7.29234 11.1183L2.26825 6.09418Z"
                    fill="#7D8492"
                  />
                  <path
                    d="M5.97138 6.09418L6.95397 5.11251L12.3059 10.4626C12.3922 10.5483 12.4606 10.6503 12.5074 10.7625C12.5541 10.8748 12.5781 10.9953 12.5781 11.1169C12.5781 11.2385 12.5541 11.3589 12.5074 11.4712C12.4606 11.5835 12.3922 11.6854 12.3059 11.7712L6.95397 17.124L5.9723 16.1424L10.9955 11.1183L5.97138 6.09418Z"
                    fill="#7D8492"
                  />
                </svg>
              </div>
              <div className="p-3 md:p-5">
                <Text className="text-[#171719] font-semibold!">
                  Priya Shah
                </Text>
                <Text className="text-[#545A65]">Head of Product</Text>
              </div>

              <div className="bg-[url('/images/teamPersonBg.png')] bg-no-repeat bg-cover relative rounded-lg overflow-hidden flex grayscale md:h-[350px] transition-all duration-300 group-hover:grayscale-0">
                <Image
                  src="/images/teamImage1.png"
                  alt="Team Member"
                  width={1000}
                  height={1000}
                  className="w-full h-fit"
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
