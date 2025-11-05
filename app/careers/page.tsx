import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import StaticBg from "@/components/StaticBg";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/Button";

const Careers = () => {
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
              Meet Our Team
            </Text>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 mt-14">
              {teamMembers.map((member, index) => (
                <div className="w-fit group cursor-pointer" key={index}>
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
            </div>
          </div>
        </div>
      </StaticBg>

      <section className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10 mb-20">
        <div className="my-18 md:my-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-[30%] w-full">
              <Text
                type="subheading"
                className="text-[28px]! font-bold! mt-1 text-center! md:text-left! w-full"
              >
                Join Our Mission
              </Text>
            </div>
            <div className="md:w-[70%]">
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
            </div>
          </div>
        </div>

        <div className="bg-[#101213] rounded-[14px] flex items-center flex-col justify-center p-20 space-y-5">
          <Text className="font-bold! text-[36px]!">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-28">
          <div>
            <Text className="text-[36px]! font-semibold!">
              New opportunities often arise in areas such as:
            </Text>

            <ul className="mt-5">
              {opportunities.map((opportunity, index) => (
                <li
                  className="flex items-center gap-4 my-3 py-5"
                  key={index}
                  style={{ borderTop: "1px solid #272736" }}
                >
                  <Image
                    src="/icons/icon-1.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[60px] h-[60px]"
                  />
                  <Text className="text-xl!">
                    {" "}
                    Software and product development
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/image.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div>
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
          </div>
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
          <div>
            <Text className="text-[28px]! font-semibold! mb-4">
              A Message from Our Founders
            </Text>
            <Text>
              “We believe the future belongs to those who create it. Our mission
              is to give young people the tools to do just that, and we’re
              building a team that shares that same belief.” <br /> — The
              Accordia Harmony Founders <br /> Be the First to Know <br />
              Subscribe to our updates or follow our social channels to be the
              first to hear about new roles, collaborations, and initiatives.{" "}
              <br /> Email:{" "}
              <Link href="mailto:careers@accordiaharmony.org">
                careers@accordiaharmony.org
              </Link>{" "}
              <br />
              LinkedIn: <Link href="#">
                Accordia Harmony C.I.C.
              </Link> <br /> Instagram: <Link href="#">@accordiaharmony</Link>{" "}
              <br />
              Twitter / X: <Link href="#">@accordiaharmony</Link>
            </Text>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
