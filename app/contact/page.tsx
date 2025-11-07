"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

interface FormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      console.log("Submitting form data:", data);
      const response = await fetch("https://formspree.io/f/xqagrvdq", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          _subject: "New Contact Inquiry Request from Website",
          type: "Contact Form",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const responseData = await response.json();
      console.log("Formspree response:", responseData);

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset(); // Reset form after successful submission
      } else {
        console.error("Formspree error:", responseData);
        throw new Error(responseData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

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
                className=" text-center text-3xl! md:text-[48px]! font-semibold!"
              >
                Contact Us
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text className="text-center">
                Have a question, idea, or partnership proposal? <br /> We would
                love to hear from you.
              </Text>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-5 mt-10">
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#FFFFFF0D] rounded-xl p-8 shadow-lg xl:col-span-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2">First name</label>
                      <input
                        type="text"
                        placeholder="Ex. John"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                          errors.firstName ? "border-red-500 border" : ""
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last name</label>
                      <input
                        type="text"
                        placeholder="Ex. Alex"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                          errors.lastName ? "border-red-500 border" : ""
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm mb-2">Phone number</label>
                    <input
                      type="tel"
                      placeholder="Ex.(225) 444-2586"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\d\s()-]+$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                        errors.phone ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm mb-2">Email address</label>
                    <input
                      type="email"
                      placeholder="Ex. john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                        errors.email ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm mb-2">
                      Leave us a message
                    </label>
                    <textarea
                      placeholder="Write Your Message here..."
                      rows={4}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                        errors.message ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-white text-black cursor-pointer font-medium py-3 rounded-lg transition hover:bg-gray-100"
                  >
                    Submit
                  </button>
                </motion.div>
                <motion.div variants={fadeInUp} className="xl:col-span-3">
                  <Image
                    src="/images/contactImage.png"
                    alt="Contact Illustration"
                    width={1000}
                    height={1000}
                    className="w-full h-auto "
                  />
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </StaticBg>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="w-[90%] max-w-360 mx-auto relative z-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-20">
          <motion.div
            variants={fadeInUp}
            className="flex justify-between bg-[#FDFDFD1A] rounded-xl p-5"
          >
            <div className="flex gap-3">
              <div className="bg-white rounded-full shrink-0 p-3 w-fit h-fit flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4722 10.476C19.6077 8.75397 19.2815 7.02694 18.5272 5.473C17.2785 6.65939 15.8025 7.58058 14.1882 8.181C14.318 9.77433 14.2461 11.3777 13.9742 12.953C15.9386 12.4582 17.8 11.6196 19.4722 10.476ZM12.3852 13.274C12.7046 11.747 12.8162 10.1839 12.7172 8.627C11.7652 8.854 10.7722 8.974 9.75116 8.974C8.73016 8.974 7.73716 8.854 6.78516 8.627C6.68841 10.1839 6.80006 11.7467 7.11716 13.274C8.86297 13.5416 10.6394 13.5416 12.3852 13.274ZM7.52316 14.843C9.00334 15.0181 10.499 15.0181 11.9792 14.843C11.4704 16.4806 10.7195 18.0328 9.75116 19.448C8.78284 18.0328 8.03185 16.4806 7.52316 14.843ZM5.52816 12.954C5.2548 11.3782 5.18289 9.77397 5.31416 8.18C3.69945 7.57972 2.22308 6.65853 0.974163 5.472C0.219979 7.02633 -0.105892 8.75372 0.0301634 10.476C1.7023 11.6196 3.56369 12.4592 5.52816 12.954ZM19.1072 12.476C18.6023 14.1869 17.6383 15.7269 16.32 16.9287C15.0017 18.1305 13.3794 18.9481 11.6292 19.293C12.5057 17.8193 13.1747 16.2316 13.6172 14.575C15.5467 14.1706 17.3997 13.4624 19.1072 12.477V12.476ZM0.395163 12.476C2.07716 13.447 3.92516 14.164 5.88516 14.575C6.32767 16.2316 6.99665 17.8193 7.87316 19.293C6.12305 18.9482 4.50081 18.1307 3.18251 16.9291C1.8642 15.7275 0.900214 14.1878 0.395163 12.477V12.476ZM11.6292 0.154C14.1069 0.641008 16.2992 2.06983 17.7452 4.14C16.6778 5.21838 15.4037 6.07007 13.9992 6.644C13.6207 4.35182 12.8169 2.15064 11.6292 0.154ZM9.75116 0C11.2106 2.1321 12.1694 4.56636 12.5562 7.121C11.6592 7.351 10.7192 7.474 9.75116 7.474C8.78316 7.474 7.84316 7.352 6.94616 7.121C7.33285 4.56635 8.29172 2.13208 9.75116 0ZM7.87316 0.154C6.68539 2.15063 5.88157 4.35181 5.50316 6.644C4.09862 6.0701 2.82448 5.2184 1.75716 4.14C3.2032 2.07013 5.39556 0.640661 7.87316 0.154Z"
                    fill="#4285F4"
                  />
                </svg>
              </div>

              <div className="flex flex-col space-y-2">
                <Text>Socials</Text>
                <div className="flex items-center gap-3">
                  <Link href="#" className="">
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
                  </Link>
                  <Link href="">
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
                  </Link>
                  <Link href="#">
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
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full p-2 w-fit flex items-center h-fit shrink-0 justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 3.125V11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 7.5H11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-between bg-[#FDFDFD1A] rounded-xl p-5"
          >
            <div className="flex gap-3">
              <div className="bg-white rounded-full shrink-0 p-3 w-fit h-fit flex items-center justify-center">
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
                    fill="#4285F4"
                  />
                </svg>
              </div>

              <div className="flex flex-col space-y-2">
                <Text>Send us email</Text>
                <Text>info@accordiaharmony.org</Text>
              </div>
            </div>

            <div className="bg-white rounded-full p-2 w-fit flex items-center h-fit shrink-0 justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 3.125V11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 7.5H11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-between bg-[#FDFDFD1A] rounded-xl p-5"
          >
            <div className="flex gap-3">
              <div className="bg-white rounded-full shrink-0 p-3 w-fit h-fit flex items-center justify-center">
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.06006 20.077L9.04967 20.0789L8.98261 20.1119L8.96372 20.1157L8.9505 20.1119L8.88344 20.0789C8.87337 20.0757 8.86581 20.0773 8.86078 20.0836L8.857 20.0931L8.84094 20.4973L8.84567 20.5162L8.85511 20.5284L8.95333 20.5983L8.9675 20.6021L8.97883 20.5983L9.07705 20.5284L9.08839 20.5133L9.09217 20.4973L9.07611 20.094C9.07359 20.0839 9.06824 20.0783 9.06006 20.077ZM9.31033 19.9703L9.29806 19.9722L9.12333 20.06L9.11389 20.0694L9.11106 20.0798L9.12806 20.4859L9.13278 20.4973L9.14033 20.5039L9.33017 20.5917C9.34213 20.5949 9.35126 20.5924 9.35756 20.5842L9.36133 20.5709L9.32922 19.9911C9.32607 19.9797 9.31978 19.9728 9.31033 19.9703ZM8.63505 19.9722C8.63089 19.9696 8.62592 19.9688 8.62117 19.9699C8.61642 19.9709 8.61226 19.9738 8.60956 19.9778L8.60389 19.9911L8.57178 20.5709C8.57241 20.5823 8.57776 20.5898 8.58783 20.5936L8.602 20.5917L8.79183 20.5039L8.80128 20.4963L8.80506 20.4859L8.82111 20.0798L8.81828 20.0685L8.80883 20.0591L8.63505 19.9722Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.5 0C10.7543 0 12.9163 0.895533 14.5104 2.48959C16.1045 4.08365 17 6.24566 17 8.5C17 11.4032 15.4171 13.7794 13.7492 15.4842C12.9159 16.3267 12.0067 17.0905 11.033 17.7659L10.6307 18.0398L10.4418 18.1654L10.0857 18.3921L9.76839 18.5857L9.3755 18.8143C9.10882 18.9665 8.80706 19.0466 8.5 19.0466C8.19294 19.0466 7.89118 18.9665 7.6245 18.8143L7.23161 18.5857L6.7405 18.2835L6.55917 18.1654L6.17194 17.9076C5.12156 17.1969 4.14319 16.3853 3.25078 15.4842C1.58289 13.7785 0 11.4032 0 8.5C0 6.24566 0.895533 4.08365 2.48959 2.48959C4.08365 0.895533 6.24566 0 8.5 0ZM8.5 5.66667C8.12792 5.66667 7.75949 5.73995 7.41573 5.88234C7.07197 6.02473 6.75963 6.23343 6.49653 6.49653C6.23343 6.75963 6.02473 7.07198 5.88234 7.41573C5.73995 7.75949 5.66667 8.12792 5.66667 8.5C5.66667 8.87208 5.73995 9.24051 5.88234 9.58427C6.02473 9.92803 6.23343 10.2404 6.49653 10.5035C6.75963 10.7666 7.07197 10.9753 7.41573 11.1177C7.75949 11.26 8.12792 11.3333 8.5 11.3333C9.25145 11.3333 9.97212 11.0348 10.5035 10.5035C11.0348 9.97212 11.3333 9.25145 11.3333 8.5C11.3333 7.74855 11.0348 7.02788 10.5035 6.49653C9.97212 5.96518 9.25145 5.66667 8.5 5.66667Z"
                    fill="#4285F4"
                  />
                </svg>
              </div>

              <div className="flex flex-col space-y-2">
                <Text>Location</Text>
                <Text>124 City Road, London, EC1V</Text>
              </div>
            </div>

            <div className="bg-white rounded-full p-2 w-fit flex items-center h-fit shrink-0 justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 3.125V11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 7.5H11.875"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
