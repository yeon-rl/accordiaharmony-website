"use client";

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* desktop Navbar */}
      <nav
        className="relative z-100 flex items-center justify-between bg-[#1B365D66] px-4 py-4 backdrop-blur-md rounded-[23.54px]"
        style={{
          boxShadow: "0px 13.91px 23.97px 0px #00000033",
          backdropFilter: "blur(402.8999938964844px)",
        }}
      >
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />

        <ul className="flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.href}>
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
            </li>
          ))}
        </ul>

        <div>
          <Button title="Get in touch" nav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
