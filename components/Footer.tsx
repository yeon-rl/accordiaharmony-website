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
              <Link href="/">
                <Image
                  src="/images/logowhite.png"
                  alt="Footer Logo"
                  width={1000}
                  height={1000}
                  className="w-[98px] h-[35px]"
                />
              </Link>
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
                target="_blank"
                href="https://youtube.com/@accordiaharmony?si=t3ht8cwjYsQa1laW"
                className="w-8 h-8 flex items-center justify-center transition hover:opacity-80"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/accordiaharmony/"
                className="w-8 h-8 flex items-center justify-center transition hover:opacity-80"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.681.822.897 1.382.163.422.358 1.057.412 2.227.059 1.266.07 1.646.07 4.85s-.011 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.681-1.382.897-.422.163-1.057.358-2.227.412-1.266.059-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.475-1.382-.897-.422-.422-.681-.822-.897-1.382-.163-.422-.358-1.057-.412-2.227-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.475-.96.897-1.382.422-.422.822-.681 1.382-.897.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.337 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.337-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/107981168/admin/dashboard/"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center transition hover:opacity-80"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61588426083128"
                className="w-8 h-8 flex items-center justify-center transition hover:opacity-80"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.667 4.53-4.667 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@accordiaharmony?_r=1&_t=ZN-94Sl89VRva2"
                className="w-8 h-8 flex items-center justify-center transition hover:opacity-80"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.96-1.03 1.6-.14.69-.03 1.4.27 2.02.35.79 1.05 1.45 1.9 1.73.6.21 1.26.24 1.89.15 1.07-.15 2-.85 2.45-1.83.2-.42.3-.87.31-1.33.01-4.27 0-8.54.01-12.81z" />
                </svg>
              </Link>
            </motion.div>

            <div>
              <Image
                src="/images/ico.png"
                alt="Footer Logo"
                width={1000}
                height={1000}
                className="w-20 h-auto mt-5 rounded-full"
              />
            </div>
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
          <h1 className="text-[8.5vw] md:text-[7.5vw] font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4E4F50]/50 to-[#10121380]/10 tracking-tight">
            ACCORDIA HARMONY
          </h1>
        </motion.div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-[#82888C] mt-8">
          Accordia Harmony C.I.C. | Registered in England & Wales No. 16569285
        </p>
        <motion.div
          variants={fadeInUp}
          className="relative mt-3 border-t border-gray-800/50 pt-6 flex flex-col md:flex-row items-center justify-between mx-auto text-xs text-[#82888C]"
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
