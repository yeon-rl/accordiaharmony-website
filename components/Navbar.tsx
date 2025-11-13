"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  {
    label: "Contact Us",
    href: "#",
    dropdownItems: [
      { label: "Partnerships", href: "/partnership" },
      { label: "Inquiries", href: "/contact" },
    ],
  },
  { label: "Newsletter", href: "/newsletter" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* desktop Navbar */}
      <nav
        className="relative z-100 items-center justify-between bg-[#1B365D66] px-4 py-4 backdrop-blur-md rounded-[23.54px] hidden md:flex"
        style={{
          boxShadow: "0px 13.91px 23.97px 0px #00000033",
          backdropFilter: "blur(402.8999938964844px)",
        }}
      >
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <ul className="flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.dropdownItems ? (
                <div className="relative">
                  <button
                    className={`flex items-center space-x-1 ${
                      pathname === link.href ? "font-bold" : "font-normal"
                    } text-base`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1B365D] ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm ${
                              pathname === item.href
                                ? "bg-[#2C4B7C] text-white"
                                : "text-gray-100 hover:bg-[#2C4B7C]"
                            }`}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "font-bold text-base"
                      : "font-normal text-base"
                  }
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div>
          <Button
            title="Join our mission"
            nav
            onClick={() => router.push("/partnership")}
          />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden relative z-100">
        <div className="flex items-center justify-between px-4 py-4 bg-[#1B365D66] backdrop-blur-md rounded-[23.54px]">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* Hamburger Button */}
          <motion.button
            className="flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-white mb-1.5 block"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-white mb-1.5 block"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-white block"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
                style={{ zIndex: 40 }}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  bounce: 0,
                }}
                className="fixed top-0 right-0 h-dvh w-full bg-[#060610]/98 backdrop-blur-md overflow-y-auto"
                style={{ zIndex: 50 }}
              >
                <div className="min-h-dvh flex flex-col p-6 relative">
                  <motion.div
                    className="sticky top-6 right-6 float-right z-1000"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>

                  <div className="flex items-center justify-center mb-12 mt-16 hidden">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={120}
                      />
                    </motion.div>
                  </div>

                  <motion.ul
                    className="flex flex-col space-y-4 items-center flex-1 justify-center"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.2,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    initial="closed"
                    animate="open"
                  >
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.href}
                        variants={{
                          open: { x: 0, opacity: 1 },
                          closed: { x: 50, opacity: 0 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                        }}
                      >
                        {link.dropdownItems ? (
                          <div className="w-64">
                            <button
                              className={`text-xl w-full py-3 px-6 ${
                                pathname === link.href
                                  ? "font-bold bg-white/10 rounded-lg"
                                  : "font-normal hover:bg-white/5 rounded-lg transition-colors"
                              } text-center`}
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                              {link.label}
                            </button>
                            {dropdownOpen && (
                              <div className="mt-2 rounded-lg bg-white/5">
                                {link.dropdownItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-lg block py-2 px-6 ${
                                      pathname === item.href
                                        ? "font-bold bg-white/10"
                                        : "font-normal hover:bg-white/10 transition-colors"
                                    } text-center`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setDropdownOpen(false);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={`text-xl block py-3 px-6 ${
                              pathname === link.href
                                ? "font-bold bg-white/10 rounded-lg"
                                : "font-normal hover:bg-white/5 rounded-lg transition-colors"
                            } text-center w-64`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                    <motion.li
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: 50, opacity: 0 },
                      }}
                      className="pt-4"
                    >
                      <Button
                        title="Join our mission"
                        nav
                        onClick={() => router.push("/partnership")}
                      />
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
