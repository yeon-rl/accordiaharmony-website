"use client";

// import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
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

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 md:pt-24 pb-10 overflow-hidden">
      {/* Upper Section */}
      <motion.div
        className="w-[90%] max-w-360 mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="py-8 flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Logo and Address */}
          <div className="flex-1">
            {/* Logo */}
            <motion.div className="mb-12" variants={fadeInUp}>
              <Image
                src="/images/logowhite.png"
                alt="Footer Logo"
                width={1000}
                height={1000}
                className="w-[98px] h-[35px]"
              />
            </motion.div>

            {/* Address */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <h3 className="text-base font-semibold text-white mb-3">
                Address
              </h3>
              <p className="text-sm text-[#82888C]">
                124 City Road, London, EC1V 2NX
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex gap-4" variants={fadeInUp}>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center transition"
              >
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
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center transition"
              >
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
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center transition"
              >
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
            </motion.div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex-1 flex gap-32 justify-end mt-8 md:mt-0">
            {/* Company Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-base font-semibold mb-6 text-white">
                Company
              </h3>
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  About US
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
                <Link
                  href="/partnership"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Partnerships
                </Link>
              </nav>
            </motion.div>

            {/* Resources Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-base font-semibold mb-6 text-white">
                Resources
              </h3>
              <nav className="space-y-4">
                <Link
                  href="/terms-of-use"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Terms of use
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Private policy
                </Link>
                <Link
                  href="/cookies"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Cookies policy
                </Link>
                <Link
                  href="/accessibility-statement"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Accessibility Statement
                </Link>
                <Link
                  href="/governance-and-transparency"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Governance and transparency
                </Link>
                <Link
                  href="/impact-and-community"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Impact and community
                </Link>
                <Link
                  href="/partnership"
                  className="block text-sm text-gray-400 hover:text-white transition"
                >
                  Partnerships and collaborations
                </Link>
              </nav>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center "
          variants={fadeInUp}
        >
          <h1 className="text-[8.5vw] md:text-[8vw] font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4E4F50]/50 to-[#10121380]/10 tracking-tight">
            ACCORDIA HARMONY
          </h1>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          className="relative mt-8 border-t border-gray-800/50 pt-6 flex flex-col md:flex-row items-center justify-between mx-auto text-xs text-[#82888C]"
        >
          <p>© 2025 Accordia Harmony. All rights reserved.</p>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookies Settings
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
