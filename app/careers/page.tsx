"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import StaticBg from "@/components/StaticBg";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
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

const Careers = () => {
  const router = useRouter();

  const teamMembers = [
    {
      name: "Anna Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Anna Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Anthony Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Williams Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Janet Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Janet Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Janet Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    {
      name: "Janet Miller",
      position: "CEO Accordia Harmony",
      imageSrc: "/images/teamImage1.png",
      socials: {
        linkedin: "#",
        email: "#",
        Instagram: "#",
        x: "#",
      },
    },
    // Add more team members as needed
  ];

  const opportunities = [
    {
      icon: "/icons/icon-1.png",
      description: "Software and product development",
    },
    {
      icon: "/icons/icon-2.png",
      description: "Digital design and user experience",
    },
    {
      icon: "/icons/icon-3.png",
      description: "Content creation and curriculum design",
    },
    {
      icon: "/icons/icon-4.png",
      description: "Youth engagement and community programmes",
    },
    {
      icon: "/icons/icon-5.png",
      description: "Operations, marketing, and strategy",
    },
  ];

  return (
    <div className="text-white ">
      <motion.div
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      {/* Who we are */}
      <StaticBg scroll={true}>
        <div className="w-[90%] md:w-[80%] max-w-360 mx-auto relative z-50">
          <motion.div
            className="mt-14 md:mt-28"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Text
                type="heading"
                className=" text-center text-3xl! md:text-[48px] font-semibold!"
              >
                Meet Our Team
              </Text>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 mt-14"
            >
              {teamMembers.map((member, index) => (
                <div
                  className="w-fit group cursor-pointer"
                  key={index}
                  onClick={() =>
                    router.push(
                      `/team/${member.name.replace(" ", "-").toLowerCase()}`
                    )
                  }
                >
                  <div className="bg-[#E1EBED] rounded-xl w-full md:h-[400px] flex flex-col justify-end">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={1000}
                      height={1000}
                      className="w-full md:grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Text className="text-lg! font-medium!">
                        {member.name}
                      </Text>
                      <Text className="text-sm!">{member.position}</Text>
                    </div>
                    <div className="flex items-center gap-3 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link href={member.socials.x}>
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6574 14.0398L8.76676 6.35391L13.5925 1.04531C13.7017 0.922284 13.7579 0.761195 13.7491 0.59697C13.7403 0.432746 13.6671 0.278621 13.5453 0.168012C13.4236 0.0574036 13.2632 -0.000774875 13.0989 0.00609048C12.9346 0.0129558 12.7796 0.0843115 12.6675 0.204687L8.07067 5.26094L4.90738 0.289844C4.85098 0.201058 4.77307 0.127946 4.68089 0.0772796C4.58871 0.0266134 4.48523 3.26018e-05 4.38004 7.39335e-08H0.63004C0.517978 -5.44246e-05 0.407963 0.0300214 0.311514 0.087078C0.215066 0.144135 0.135732 0.226073 0.081819 0.324314C0.0279064 0.422555 0.00139888 0.533484 0.00507179 0.645485C0.00874469 0.757486 0.042463 0.86644 0.102696 0.960938L4.99332 8.64609L0.16754 13.9586C0.111186 14.0191 0.0674071 14.0902 0.0387413 14.1678C0.0100754 14.2454 -0.00290772 14.3279 0.000544813 14.4105C0.00399734 14.4932 0.0238169 14.5743 0.0588543 14.6492C0.0938916 14.7241 0.14345 14.7914 0.204657 14.847C0.265865 14.9026 0.337504 14.9455 0.415422 14.9733C0.49334 15.001 0.575988 15.013 0.658575 15.0085C0.741163 15.0041 0.822047 14.9833 0.89654 14.9474C0.971033 14.9114 1.03765 14.8611 1.09254 14.7992L5.68942 9.74297L8.8527 14.7141C8.90956 14.8021 8.98767 14.8745 9.07982 14.9244C9.17197 14.9744 9.27521 15.0004 9.38004 15H13.13C13.242 15 13.3519 14.9699 13.4482 14.9128C13.5445 14.8558 13.6238 14.774 13.6777 14.6759C13.7315 14.5778 13.7581 14.467 13.7545 14.3551C13.751 14.2432 13.7174 14.1343 13.6574 14.0398ZM9.72301 13.75L1.76832 1.25H4.03395L11.9918 13.75H9.72301Z"
                            fill="white"
                          />
                        </svg>
                      </Link>

                      <Link href={member.socials.linkedin}>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V15C0 15.3315 0.131696 15.6495 0.366116 15.8839C0.600537 16.1183 0.918479 16.25 1.25 16.25H15C15.3315 16.25 15.6495 16.1183 15.8839 15.8839C16.1183 15.6495 16.25 15.3315 16.25 15V1.25C16.25 0.918479 16.1183 0.600537 15.8839 0.366116C15.6495 0.131696 15.3315 0 15 0ZM15 15H1.25V1.25H15V15ZM5.625 6.875V11.875C5.625 12.0408 5.55915 12.1997 5.44194 12.3169C5.32473 12.4342 5.16576 12.5 5 12.5C4.83424 12.5 4.67527 12.4342 4.55806 12.3169C4.44085 12.1997 4.375 12.0408 4.375 11.875V6.875C4.375 6.70924 4.44085 6.55027 4.55806 6.43306C4.67527 6.31585 4.83424 6.25 5 6.25C5.16576 6.25 5.32473 6.31585 5.44194 6.43306C5.55915 6.55027 5.625 6.70924 5.625 6.875ZM12.5 9.0625V11.875C12.5 12.0408 12.4342 12.1997 12.3169 12.3169C12.1997 12.4342 12.0408 12.5 11.875 12.5C11.7092 12.5 11.5503 12.4342 11.4331 12.3169C11.3158 12.1997 11.25 12.0408 11.25 11.875V9.0625C11.25 8.6481 11.0854 8.25067 10.7924 7.95765C10.4993 7.66462 10.1019 7.5 9.6875 7.5C9.2731 7.5 8.87567 7.66462 8.58265 7.95765C8.28962 8.25067 8.125 8.6481 8.125 9.0625V11.875C8.125 12.0408 8.05915 12.1997 7.94194 12.3169C7.82473 12.4342 7.66576 12.5 7.5 12.5C7.33424 12.5 7.17527 12.4342 7.05806 12.3169C6.94085 12.1997 6.875 12.0408 6.875 11.875V6.875C6.87578 6.72191 6.93271 6.57443 7.03501 6.46053C7.13731 6.34664 7.27785 6.27425 7.42998 6.2571C7.58211 6.23995 7.73524 6.27923 7.86033 6.3675C7.98541 6.45576 8.07376 6.58686 8.10859 6.73594C8.5314 6.44912 9.02434 6.28289 9.53449 6.25509C10.0446 6.2273 10.5527 6.33899 11.0042 6.57817C11.4556 6.81736 11.8334 7.175 12.097 7.61269C12.3605 8.05038 12.4998 8.55159 12.5 9.0625ZM5.9375 4.6875C5.9375 4.87292 5.88252 5.05418 5.7795 5.20835C5.67649 5.36252 5.53007 5.48268 5.35877 5.55364C5.18746 5.62459 4.99896 5.64316 4.8171 5.60699C4.63525 5.57081 4.4682 5.48152 4.33709 5.35041C4.20598 5.2193 4.11669 5.05225 4.08051 4.8704C4.04434 4.68854 4.06291 4.50004 4.13386 4.32873C4.20482 4.15743 4.32498 4.01101 4.47915 3.908C4.63332 3.80498 4.81458 3.75 5 3.75C5.24864 3.75 5.4871 3.84877 5.66291 4.02459C5.83873 4.2004 5.9375 4.43886 5.9375 4.6875Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </StaticBg>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10 mb-20"
      >
        <div className="my-18 md:my-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <motion.div className="md:w-[30%] w-full" variants={fadeInUp}>
              <Text
                type="subheading"
                className="text-[28px]! font-bold! mt-1 text-center! md:text-left! w-full"
              >
                Join Our Mission
              </Text>
            </motion.div>
            <motion.div className="md:w-[70%]" variants={fadeInUp}>
              <Text className="my-3 text-base! md:text-xl! text-center md:text-left">
                At Accordia Harmony C.I.C., we believe in the power of people
                who care about impact. <br /> We bring together creative
                thinkers, developers, educators, and strategists who are
                passionate about empowering young people through innovation and
                collaboration. <br />
                Joining Accordia Harmony means being part of a purpose-driven
                culture where ideas are valued, voices are heard, and
                contributions make a real difference. Whether your expertise
                lies in education, technology, design, or social innovation,
                you’ll find a space to grow, lead, and make lasting change. If
                you share our passion for empowering the next generation,
                explore opportunities to join our team and help shape the future
                of youth empowerment.
              </Text>

              <div className="flex justify-center md:justify-start">
                <Button title="Partner with us" className="mt-5" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="bg-[#101213] rounded-[14px] flex items-center flex-col justify-center p-10 md:p-20 space-y-5"
          variants={fadeInUp}
        >
          <Text className="font-bold! text-[36px]! text-center leading-tight! tracking-tight!">
            We’re not hiring right now!
          </Text>
          <div className="max-w-3xl">
            <Text className="text-center">
              Although there are no current vacancies at Accordia Harmony
              C.I.C., we are continually expanding our projects, partnerships,
              and platforms.
            </Text>
          </div>

          <Button title="View positions" className="mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-28">
          <motion.div variants={fadeInUp}>
            <Text className="text-[36px]! font-semibold! leading-tight! tracking-tight!">
              New opportunities often arise in areas such as:
            </Text>

            <ul className="mt-5">
              {opportunities.map((opportunity, index) => (
                <li
                  className="flex items-center gap-4 md:my-3 py-3 md:py-5"
                  key={index}
                  style={{ borderTop: "1px solid #272736" }}
                >
                  <Image
                    src={opportunity.icon}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-10 md:w-[60px] h-10 md:h-[60px]"
                  />
                  <Text className="text-base! md:text-xl!">
                    {" "}
                    {opportunity.description}
                  </Text>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/images/image.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="flex flex-col space-y-10">
          <motion.div variants={fadeInUp}>
            <Text className="text-[28px]! font-semibold! mb-4">
              Stay Connected
            </Text>
            <Text>
              If you would like to be considered for future roles, please send
              your CV and a short statement about your interests and expertise
              to careers@accordiaharmony.org. <br /> We regularly review
              expressions of interest and contact suitable candidates as
              opportunities become available. You can also follow us on
              LinkedIn, Instagram, and X (Twitter) to stay updated on new
              projects, roles, and announcements.
            </Text>
          </motion.div>
          <div>
            <Text className="text-[28px]! font-semibold! mb-4">
              Our Culture
            </Text>
            <Text>
              Accordia Harmony C.I.C. is built on collaboration, creativity, and
              trust. <br /> We value people who care about impact, think
              independently, and work with integrity. <br /> We celebrate
              diversity and inclusion in all forms, and we believe that everyone
              deserves a seat at the table. Whether you are a recent graduate,
              an experienced professional, or an innovator exploring new ideas,
              there is a place for you in our vision of positive change.
            </Text>
          </div>
          <motion.div variants={fadeInUp}>
            <Text className="text-[28px]! font-semibold! mb-4">
              A Message from Our Founders
            </Text>
            <Text>
              “We believe the future belongs to those who create it. Our mission
              is to give young people the tools to do just that, and we&apos;re
              building a team that shares that same belief.” <br />{" "}
              <i> — The Accordia Harmony Founders </i> <br /> <br />{" "}
              <Text className="font-semibold! text-xl!">
                Be the First to Know
              </Text>{" "}
              Subscribe to our updates or follow our social channels to be the
              first to hear about new roles, collaborations, and initiatives.{" "}
              <br />
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.48387 0C1.82511 0 1.19333 0.261693 0.727509 0.727509C0.261693 1.19332 0 1.82511 0 2.48387V11.5161C0 12.1749 0.261693 12.8067 0.727509 13.2725C1.19333 13.7383 1.82511 14 2.48387 14H16.9355C17.5942 14 18.226 13.7383 18.6918 13.2725C19.1577 12.8067 19.4194 12.1749 19.4194 11.5161V2.48387C19.4194 1.82511 19.1577 1.19332 18.6918 0.727509C18.226 0.261693 17.5942 0 16.9355 0H2.48387ZM5.58194 3.73574C5.43469 3.63966 5.25586 3.60458 5.08324 3.63793C4.91061 3.67129 4.75771 3.77045 4.65685 3.91446C4.556 4.05848 4.51508 4.23606 4.54276 4.40969C4.57043 4.58331 4.66453 4.73938 4.80516 4.8449L9.32129 8.00619C9.43514 8.08586 9.57073 8.12859 9.70968 8.12859C9.84863 8.12859 9.98422 8.08586 10.0981 8.00619L14.6142 4.8449C14.6903 4.79527 14.7556 4.73084 14.8062 4.65545C14.8569 4.58007 14.8919 4.49526 14.9091 4.40608C14.9263 4.31691 14.9255 4.22517 14.9065 4.13634C14.8876 4.04751 14.851 3.96339 14.7989 3.88899C14.7468 3.81459 14.6802 3.75143 14.6032 3.70327C14.5262 3.6551 14.4403 3.62291 14.3506 3.60861C14.2609 3.59432 14.1693 3.5982 14.0811 3.62004C13.9929 3.64188 13.9101 3.68123 13.8374 3.73574L9.70968 6.62516L5.58194 3.73574Z"
                    fill="#FFFFFF"
                  />
                </svg>{" "}
                <Link href="mailto:careers@accordiaharmony.org">
                  careers@accordiaharmony.org
                </Link>{" "}
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V16C0 16.3536 0.140476 16.6928 0.390524 16.9428C0.640573 17.1929 0.979711 17.3333 1.33333 17.3333H16C16.3536 17.3333 16.6928 17.1929 16.9428 16.9428C17.1929 16.6928 17.3333 16.3536 17.3333 16V1.33333C17.3333 0.979711 17.1929 0.640573 16.9428 0.390524C16.6928 0.140476 16.3536 0 16 0ZM16 16H1.33333V1.33333H16V16ZM6 7.33333V12.6667C6 12.8435 5.92976 13.013 5.80474 13.1381C5.67971 13.2631 5.51014 13.3333 5.33333 13.3333C5.15652 13.3333 4.98695 13.2631 4.86193 13.1381C4.7369 13.013 4.66667 12.8435 4.66667 12.6667V7.33333C4.66667 7.15652 4.7369 6.98695 4.86193 6.86193C4.98695 6.7369 5.15652 6.66667 5.33333 6.66667C5.51014 6.66667 5.67971 6.7369 5.80474 6.86193C5.92976 6.98695 6 7.15652 6 7.33333ZM13.3333 9.66667V12.6667C13.3333 12.8435 13.2631 13.013 13.1381 13.1381C13.013 13.2631 12.8435 13.3333 12.6667 13.3333C12.4899 13.3333 12.3203 13.2631 12.1953 13.1381C12.0702 13.013 12 12.8435 12 12.6667V9.66667C12 9.22464 11.8244 8.80072 11.5118 8.48815C11.1993 8.17559 10.7754 8 10.3333 8C9.8913 8 9.46738 8.17559 9.15482 8.48815C8.84226 8.80072 8.66667 9.22464 8.66667 9.66667V12.6667C8.66667 12.8435 8.59643 13.013 8.4714 13.1381C8.34638 13.2631 8.17681 13.3333 8 13.3333C7.82319 13.3333 7.65362 13.2631 7.52859 13.1381C7.40357 13.013 7.33333 12.8435 7.33333 12.6667V7.33333C7.33416 7.17004 7.39489 7.01272 7.50401 6.89123C7.61313 6.76975 7.76304 6.69253 7.92531 6.67424C8.08758 6.65595 8.25092 6.69785 8.38435 6.792C8.51777 6.88614 8.61201 7.02599 8.64917 7.185C9.10015 6.87906 9.62596 6.70175 10.1701 6.6721C10.7143 6.64245 11.2562 6.76159 11.7378 7.01672C12.2194 7.27185 12.6223 7.65333 12.9034 8.1202C13.1845 8.58707 13.3332 9.1217 13.3333 9.66667ZM6.33333 5C6.33333 5.19778 6.27468 5.39112 6.1648 5.55557C6.05492 5.72002 5.89874 5.84819 5.71602 5.92388C5.53329 5.99957 5.33222 6.01937 5.13824 5.98078C4.94426 5.9422 4.76608 5.84696 4.62623 5.70711C4.48637 5.56725 4.39113 5.38907 4.35255 5.19509C4.31396 5.00111 4.33377 4.80004 4.40945 4.61732C4.48514 4.43459 4.61331 4.27841 4.77776 4.16853C4.94221 4.05865 5.13555 4 5.33333 4C5.59855 4 5.8529 4.10536 6.04044 4.29289C6.22798 4.48043 6.33333 4.73478 6.33333 5Z"
                    fill="white"
                  />
                </svg>
                <Link href="#">Accordia Harmony C.I.C.</Link>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 4.66667C7.87554 4.66667 7.10218 4.90126 6.44439 5.34079C5.78659 5.78031 5.2739 6.40503 4.97115 7.13593C4.6684 7.86684 4.58918 8.6711 4.74353 9.44703C4.89787 10.223 5.27883 10.9357 5.83824 11.4951C6.39765 12.0545 7.11038 12.4355 7.8863 12.5898C8.66223 12.7441 9.4665 12.6649 10.1974 12.3622C10.9283 12.0594 11.553 11.5467 11.9925 10.8889C12.4321 10.2312 12.6667 9.45779 12.6667 8.66667C12.6656 7.60614 12.2438 6.58936 11.4939 5.83946C10.744 5.08955 9.72719 4.66777 8.66667 4.66667ZM8.66667 11.3333C8.13925 11.3333 7.62368 11.1769 7.18515 10.8839C6.74661 10.5909 6.40482 10.1744 6.20299 9.68715C6.00115 9.19989 5.94834 8.66371 6.05124 8.14643C6.15413 7.62914 6.40811 7.15399 6.78105 6.78105C7.15399 6.40811 7.62914 6.15413 8.14643 6.05124C8.66371 5.94834 9.19989 6.00115 9.68715 6.20299C10.1744 6.40482 10.5909 6.74661 10.8839 7.18515C11.1769 7.62368 11.3333 8.13925 11.3333 8.66667C11.3333 9.37391 11.0524 10.0522 10.5523 10.5523C10.0522 11.0524 9.37391 11.3333 8.66667 11.3333ZM12.6667 0H4.66667C3.4294 0.00132352 2.24318 0.493414 1.3683 1.3683C0.493414 2.24318 0.00132352 3.4294 0 4.66667V12.6667C0.00132352 13.9039 0.493414 15.0902 1.3683 15.965C2.24318 16.8399 3.4294 17.332 4.66667 17.3333H12.6667C13.9039 17.332 15.0902 16.8399 15.965 15.965C16.8399 15.0902 17.332 13.9039 17.3333 12.6667V4.66667C17.332 3.4294 16.8399 2.24318 15.965 1.3683C15.0902 0.493414 13.9039 0.00132352 12.6667 0ZM16 12.6667C16 13.5507 15.6488 14.3986 15.0237 15.0237C14.3986 15.6488 13.5507 16 12.6667 16H4.66667C3.78261 16 2.93477 15.6488 2.30964 15.0237C1.68452 14.3986 1.33333 13.5507 1.33333 12.6667V4.66667C1.33333 3.78261 1.68452 2.93477 2.30964 2.30964C2.93477 1.68452 3.78261 1.33333 4.66667 1.33333H12.6667C13.5507 1.33333 14.3986 1.68452 15.0237 2.30964C15.6488 2.93477 16 3.78261 16 4.66667V12.6667ZM14 4.33333C14 4.53111 13.9413 4.72445 13.8315 4.8889C13.7216 5.05335 13.5654 5.18153 13.3827 5.25721C13.2 5.3329 12.9989 5.3527 12.8049 5.31412C12.6109 5.27553 12.4327 5.18029 12.2929 5.04044C12.153 4.90059 12.0578 4.7224 12.0192 4.52842C11.9806 4.33444 12.0004 4.13338 12.0761 3.95065C12.1518 3.76792 12.28 3.61174 12.4444 3.50186C12.6089 3.39198 12.8022 3.33333 13 3.33333C13.2652 3.33333 13.5196 3.43869 13.7071 3.62623C13.8946 3.81376 14 4.06812 14 4.33333Z"
                    fill="white"
                  />
                </svg>
                <Link href="#">@accordiaharmony</Link>{" "}
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5679 14.9758L9.35121 6.7775L14.4987 1.115C14.6151 0.98377 14.6751 0.811942 14.6657 0.636768C14.6563 0.461595 14.5782 0.297196 14.4484 0.179213C14.3185 0.0612305 14.1474 -0.000826533 13.9722 0.00649651C13.7969 0.0138195 13.6316 0.0899323 13.512 0.218333L8.60871 5.61167L5.23454 0.309167C5.17437 0.214462 5.09128 0.136475 4.99295 0.0824315C4.89462 0.0283876 4.78424 3.47752e-05 4.67204 7.88624e-08H0.672042C0.55251 -5.80529e-05 0.435161 0.0320228 0.332282 0.0928832C0.229404 0.153744 0.14478 0.241145 0.0872736 0.345935C0.0297669 0.450725 0.00149214 0.569049 0.0054099 0.688517C0.00932767 0.807985 0.0452939 0.924203 0.109543 1.025L5.32621 9.2225L0.178709 14.8892C0.118598 14.9537 0.0719009 15.0296 0.041324 15.1123C0.0107471 15.1951 -0.00310156 15.2831 0.000581134 15.3712C0.00426383 15.4594 0.0254047 15.5459 0.0627779 15.6258C0.100151 15.7057 0.153013 15.7774 0.218301 15.8368C0.283589 15.8961 0.360004 15.9419 0.443117 15.9715C0.52623 16.0011 0.614387 16.0139 0.70248 16.0091C0.790573 16.0044 0.87685 15.9822 0.956309 15.9439C1.03577 15.9055 1.10683 15.8518 1.16538 15.7858L6.06871 10.3925L9.44288 15.695C9.50354 15.7889 9.58685 15.8661 9.68514 15.9194C9.78344 15.9727 9.89356 16.0004 10.0054 16H14.0054C14.1248 16 14.242 15.9679 14.3447 15.907C14.4475 15.8462 14.532 15.7589 14.5895 15.6543C14.647 15.5496 14.6753 15.4314 14.6715 15.3121C14.6677 15.1927 14.6319 15.0766 14.5679 14.9758ZM10.3712 14.6667L1.88621 1.33333H4.30288L12.7912 14.6667H10.3712Z"
                    fill="white"
                  />
                </svg>
                <Link href="#">@accordiaharmony</Link>
              </div>
            </Text>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Careers;
